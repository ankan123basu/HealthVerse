import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

# Load the dataset
df = pd.read_csv("data/Breast Cancer.csv")  # Adjusted to your file path

# Drop the ID column and any unnamed columns
df = df.drop(columns=["id", "Unnamed: 32"], errors='ignore')

# Convert diagnosis to 0/1: M -> 1 (Malignant), B -> 0 (Benign)
df["diagnosis"] = df["diagnosis"].map({'M': 1, 'B': 0})

# Get the feature columns (all columns except 'diagnosis')
feature_columns = [col for col in df.columns if col != 'diagnosis']

# Split features and target
X = df[feature_columns]
y = df["diagnosis"]

# Print the number of features
print(f"Number of features: {len(feature_columns)}")
print("Feature names:", feature_columns)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Train RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Predict and evaluate
y_pred = clf.predict(X_test)
print("\nBreast Cancer Model Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Save model
os.makedirs("models", exist_ok=True)
model_path = "models/breast_cancer_model.pkl"
joblib.dump(clf, model_path)
print(f"\n✅ Breast Cancer model saved to {model_path}")

# Verify the model was saved correctly
loaded_model = joblib.load(model_path)
print(f"\nModel verification - Number of features expected: {loaded_model.n_features_in_}")
print(f"Model feature names: {loaded_model.feature_names_in_ if hasattr(loaded_model, 'feature_names_in_') else 'Not available'}")
