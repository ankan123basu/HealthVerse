import os
import pandas as pd
import numpy as np
import joblib

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import accuracy_score, classification_report

# 1. Load & clean
df = pd.read_csv('data/alzheimers_disease_data.csv')

# 2. Drop non‑features
for col in ['PatientID', 'DoctorInCharge']:
    if col in df.columns:
        df.drop(col, axis=1, inplace=True)

# 3. Ensure Diagnosis is numeric & drop NaNs
df = df[df['Diagnosis'].notnull()]
df = df[pd.to_numeric(df['Diagnosis'], errors='coerce').notnull()]
df['Diagnosis'] = df['Diagnosis'].astype(int)

# 4. Check for at least 2 classes
if df['Diagnosis'].nunique() < 2:
    raise RuntimeError("Need at least two classes in 'Diagnosis' to train.")

# 5. Impute missing values if any
num_cols = df.select_dtypes(include=[np.number]).columns
df[num_cols] = df[num_cols].fillna(df[num_cols].median())

# 6. Encode any remaining object cols (should be none)
for col in df.select_dtypes(include='object').columns:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col].astype(str))

# 7. Split features/target
X = df.drop('Diagnosis', axis=1)
y = df['Diagnosis']

# 8. Scale
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 9. Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42, stratify=y
)

# 10. Fit model
model = RandomForestClassifier(
    n_estimators=100,
    class_weight='balanced',
    random_state=42
)
model.fit(X_train, y_train)

# 11. Evaluate
y_pred = model.predict(X_test)
print(f"Alzheimer’s Model Accuracy: {accuracy_score(y_test, y_pred):.4f}\n")
print(classification_report(y_test, y_pred))

# 12. Save artifacts
os.makedirs('models', exist_ok=True)
joblib.dump(model, 'models/alzheimers_model.pkl')
joblib.dump(scaler, 'models/alzheimers_scaler.pkl')

print("✅ Alzheimer’s model and scaler saved in ./models/")
