import sys
import os
import json
import joblib
import numpy as np
import pandas as pd

# Disease model/scaler mapping
MODEL_DIR = os.path.join(os.path.dirname(__file__), '../models')

# Map diseases to their corresponding model and scaler files
disease_map = {
    'anemia': ('anemia_model.pkl', 'anemia_scaler.pkl'),
    'breast_cancer': ('breast_cancer_model.pkl', None),
    'dengue': ('dengue_model.pkl', 'dengue_scaler.pkl'),
    'diabetes': ('diabetes_model.pkl', 'diabetes_scaler.pkl'),
    'heart': ('heart_model.pkl', 'heart_scaler.pkl'),
    'kidney': ('kidney_model.pkl', 'kidney_scaler.pkl'),
    'liver': ('liver_model.pkl', 'liver_scaler.pkl'),
    'stroke': ('stroke_model.pkl', 'stroke_scaler.pkl'),
    'thyroid': ('thyroid_model.pkl', 'thyroid_scaler.pkl'),
    'alzheimers': ('alzheimers_model.pkl', 'alzheimers_scaler.pkl'),
    'depression': ('depression_model.pkl', 'depression_scaler.pkl')
}

# Define categorical features for each disease
CATEGORICAL_FEATURES = {
    'anemia': ['Sex'],
    'liver': ['Gender'],
    'stroke': ['gender', 'ever_married', 'work_type', 'Residence_type', 'smoking_status'],
    'kidney': ['rbc', 'pc', 'pcc', 'ba', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane'],
    'alzheimers': ['Gender', 'Ethnicity', 'EducationLevel', 'Smoking', 'CardiovascularDisease', 
                  'Diabetes', 'Depression', 'Hypertension', 'MemoryComplaints', 'Forgetfulness',
                  'FamilyHistoryAlzheimers', 'AlcoholConsumption']
}

# Define mappings for categorical values
CATEGORY_MAPPINGS = {
    # Existing mappings
    'Sex': {'M': 1, 'F': 0},
    'Gender': {'0': 0, '1': 1, 'Male': 1, 'Female': 0},
    'gender': {'Male': 1, 'Female': 0, 'Other': 0.5},
    'ever_married': {'Yes': 1, 'No': 0},
    'Residence_type': {'Urban': 1, 'Rural': 0},
    'smoking_status': {'never smoked': 0, 'formerly smoked': 0.5, 'smokes': 1, 'Unknown': 0.5},
    'rbc': {'normal': 1, 'abnormal': 0},
    'pc': {'normal': 1, 'abnormal': 0},
    'pcc': {'present': 1, 'notpresent': 0},
    'ba': {'present': 1, 'notpresent': 0},
    'htn': {'yes': 1, 'no': 0},
    'dm': {'yes': 1, 'no': 0},
    'cad': {'yes': 1, 'no': 0},
    'appet': {'good': 1, 'poor': 0},
    'pe': {'yes': 1, 'no': 0},
    'ane': {'yes': 1, 'no': 0},
    
    # Alzheimer's specific mappings
    'Ethnicity': {
        '0': 0, 'Caucasian': 0,
        '1': 1, 'African American': 1,
        '2': 2, 'Hispanic': 2,
        '3': 3, 'Asian': 3,
        '4': 4, 'Other': 4
    },
    'EducationLevel': {
        '0': 0, 'No formal education': 0,
        '1': 1, 'Primary school': 1,
        '2': 2, 'Secondary school': 2,
        '3': 3, "Bachelor's degree": 3,
        '4': 4, 'Postgraduate degree': 4
    },
    'Smoking': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'CardiovascularDisease': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'Diabetes': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'Depression': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'Hypertension': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'MemoryComplaints': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'Forgetfulness': {'0': 0, '1': 1, 'No': 0, 'Yes': 1},
    'FamilyHistoryAlzheimers': {
        '0': 0, 'No family history': 0,
        '1': 1, 'One parent affected': 1,
        '2': 2, 'Both parents affected': 2
    },
    'AlcoholConsumption': {
        '0': 0, 'None': 0,
        '1-5': 1, 'Light (1-5 drinks/week)': 1,
        '6-10': 2, 'Moderate (6-10 drinks/week)': 2,
        '10+': 3, 'Heavy (10+ drinks/week)': 3
    }
}

disease_map = {
    'diabetes':      ('diabetes_model.pkl', 'diabetes_scaler.pkl'),
    'heart':         ('heart_model.pkl', 'heart_scaler.pkl'),
    'anemia':        ('anemia_model.pkl', 'anemia_scaler.pkl'),
    'breast_cancer': ('breast_cancer_model.pkl', None),
    'dengue':        ('dengue_model.pkl', 'dengue_scaler.pkl'),
    'depression':    ('depression_model.pkl', 'depression_scaler.pkl'),
    'alzheimers':    ('alzheimers_model.pkl', 'alzheimers_scaler.pkl'),
    'liver':         ('liver_model.pkl', 'liver_scaler.pkl'),
    'kidney':        ('kidney_model.pkl', 'kidney_scaler.pkl'),
    'stroke':        ('stroke_model.pkl', 'stroke_scaler.pkl'),
    'thyroid':       ('thyroid_model.pkl', 'thyroid_scaler.pkl'),
}

def get_expected_features(disease):
    """Return the list of features expected by the model for a given disease."""
    # Define expected features for each disease
    expected_features = {
        'anemia': ['Sex', '%Red Pixel', '%Green pixel', '%Blue pixel', 'Hb'],
        'liver': ['Age', 'Gender', 'Total_Bilirubin', 'Direct_Bilirubin', 'Alkaline_Phosphotase',
                 'Alamine_Aminotransferase', 'Aspartate_Aminotransferase', 'Total_Protiens',
                 'Albumin', 'Albumin_and_Globulin_Ratio'],
        'alzheimers': [
            'Age', 'Gender', 'Ethnicity', 'EducationLevel', 'BMI', 'Smoking',
            'AlcoholConsumption', 'PhysicalActivity', 'DietQuality', 'SleepQuality',
            'FamilyHistoryAlzheimers', 'CardiovascularDisease', 'Diabetes', 'Depression',
            'HeadInjury', 'Hypertension', 'SystolicBP', 'DiastolicBP', 'CholesterolTotal',
            'CholesterolLDL', 'CholesterolHDL', 'CholesterolTriglycerides', 'MMSE',
            'FunctionalAssessment', 'MemoryComplaints', 'BehavioralProblems', 'ADL',
            'Confusion', 'Disorientation', 'PersonalityChanges',
            'DifficultyCompletingTasks', 'Forgetfulness'
        ],
        'breast_cancer': [
            'radius_mean', 'texture_mean', 'perimeter_mean', 'area_mean', 'smoothness_mean',
            'compactness_mean', 'concavity_mean', 'concave points_mean', 'symmetry_mean', 'fractal_dimension_mean',
            'radius_se', 'texture_se', 'perimeter_se', 'area_se', 'smoothness_se',
            'compactness_se', 'concavity_se', 'concave points_se', 'symmetry_se', 'fractal_dimension_se',
            'radius_worst', 'texture_worst', 'perimeter_worst', 'area_worst', 'smoothness_worst',
            'compactness_worst', 'concavity_worst', 'concave points_worst', 'symmetry_worst', 'fractal_dimension_worst'
        ],
        'dengue': [
            'Age', 'Haemoglobin', 'WBC Count', 'Differential Count', 
            'RBC PANEL', 'Platelet Count', 'PDW', 'Sex_Female', 'Sex_Male'
        ],
        'depression': [
            'Gender', 'Age', 'City', 'Profession', 'Academic Pressure', 
            'Work Pressure', 'Financial Stress', 'Family History of Mental Illness', 'Study Hours',
            'CGPA', 'Study Satisfaction', 'Job Satisfaction', 'Sleep Duration', 'Dietary Habits',
            'Degree', 'Have you ever had suicidal thoughts ?'
        ],
        'thyroid': [
            'T2', 'thyroxin', 'triiodothyronine', 'tsh', 'difference'
        ]
    }
    return expected_features.get(disease, list(features.keys()) if isinstance(features, dict) else [])  # Default to all features if not specified

def get_default_values(disease, feature):
    """Return default values for features if not provided."""
    # Default values for common features
    defaults = {
        'Age': 50,  # Middle age as default
        'Gender': 0,  # Default to first category
        'BMI': 25.0,  # Normal weight
        'Smoking': 0,  # Non-smoker
        'AlcoholConsumption': 0,  # Non-drinker
        'PhysicalActivity': 1,  # Some activity
        'SleepQuality': 2,  # Average sleep
        'Diabetes': 0,  # No diabetes
        'Hypertension': 0,  # No hypertension
        'Depression': 0,  # No depression
        'MemoryComplaints': 0,  # No memory complaints
        'Forgetfulness': 0,  # No forgetfulness
    }
    
    # Return the default value if available, otherwise 0 for numeric features
    return defaults.get(feature, 0)

def preprocess_features(features, disease):
    """Preprocess features including handling categorical variables and missing values."""
    try:
        # Get expected features for this disease
        expected_features = get_expected_features(disease)
        
        # Create a copy of input features to avoid modifying the original
        processed_features = features.copy()
        
        # Special handling for Alzheimer's model
        if disease == 'alzheimers':
            # Map frontend field names to model's expected names if needed
            if 'Education' in processed_features and 'EducationLevel' not in processed_features:
                processed_features['EducationLevel'] = processed_features.pop('Education')
                
            # Ensure all expected features are present with defaults if missing
            for feat in expected_features:
                if feat not in processed_features:
                    processed_features[feat] = get_default_values(disease, feat)
        
        # Special handling for dengue model - one-hot encode 'Sex' feature
        if disease == 'dengue' and 'Sex' in processed_features:
            sex_value = str(processed_features['Sex']).strip().lower()
            processed_features['Sex_Female'] = 1 if sex_value == 'female' else 0
            processed_features['Sex_Male'] = 1 if sex_value == 'male' else 0
            # Remove the original 'Sex' feature as it's been one-hot encoded
            processed_features.pop('Sex', None)
        
        # Special handling for depression model
        if disease == 'depression':
            # Convert numeric strings to float for numeric fields
            numeric_fields = ['Age', 'Academic Pressure', 'Work Pressure', 'Financial Stress', 
                            'Study Hours', 'CGPA', 'Study Satisfaction', 'Job Satisfaction']
            for field in numeric_fields:
                if field in processed_features and processed_features[field] is not None:
                    try:
                        processed_features[field] = float(processed_features[field])
                    except (ValueError, TypeError):
                        processed_features[field] = 0.0
            
            # Ensure all expected features are present with defaults if missing
            for feat in expected_features:
                if feat not in processed_features:
                    processed_features[feat] = get_default_values(disease, feat)
        
        # Filter features to only include expected ones
        filtered_features = {k: v for k, v in processed_features.items() 
                           if k in expected_features or disease not in ['alzheimers', 'depression']}
        
        # Ensure all expected features are present, fill missing with defaults
        for feat in expected_features:
            if feat not in filtered_features:
                filtered_features[feat] = get_default_values(disease, feat)
        
        # Convert to DataFrame for easier manipulation
        df = pd.DataFrame([filtered_features])
        
        # Convert categorical features to numerical (for non-dengue models)
        if disease != 'dengue':
            for col in df.columns:
                if col in CATEGORICAL_FEATURES.get(disease, []):
                    # Handle categorical features
                    df[col] = df[col].map(CATEGORY_MAPPINGS.get(col, {})).fillna(0)
                else:
                    # Convert numeric strings to float
                    df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)
        
        # Ensure columns are in the expected order
        df = df[expected_features]
        
        return df.values[0]
        
    except Exception as e:
        print(f"Error in preprocess_features: {str(e)}")
        print(f"Disease: {disease}")
        print(f"Features received: {features}")
        print(f"Expected features: {get_expected_features(disease)}")
        raise

if __name__ == '__main__':
    try:
        disease = sys.argv[1]
        features = json.loads(sys.argv[2])
        model_file, scaler_file = disease_map[disease]
        model_path = os.path.join(MODEL_DIR, model_file)
        scaler_path = os.path.join(MODEL_DIR, scaler_file) if scaler_file else None

        # Preprocess features
        X_processed = preprocess_features(features, disease)
        X = X_processed.reshape(1, -1)

        # Scale if scaler exists
        if scaler_file and os.path.exists(scaler_path):
            scaler = joblib.load(scaler_path)
            X = scaler.transform(X)

        model = joblib.load(model_path)
        y_pred = model.predict(X)
        
        # For binary classification, convert to 0/1 if needed
        if hasattr(model, 'predict_proba'):
            proba = model.predict_proba(X)[0]
            result = {
                "prediction": int(y_pred[0]),
                "probability": float(max(proba)),
                "class_probabilities": proba.tolist()
            }
        else:
            result = {"prediction": float(y_pred[0])}
            
        print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({
            "error": str(e),
            "type": type(e).__name__,
            "disease": disease,
            "features": features
        }), file=sys.stderr)
        sys.exit(1)
