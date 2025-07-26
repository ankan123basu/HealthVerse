import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os

# Load the dataset
df = pd.read_csv("data/Breast Cancer.csv")  # Adjusted to your file path

# Drop the ID column if present
df = df.drop(columns=["id"])

# Convert diagnosis to 0/1: M -> 1 (Malignant), B -> 0 (Benign)
df["diagnosis"] = df["diagnosis"].map({'M': 1, 'B': 0})

# Split features and target
X = df.drop("diagnosis", axis=1)
y = df["diagnosis"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Train RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Predict and evaluate
y_pred = clf.predict(X_test)
print("Breast Cancer Model Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:\n", classification_report(y_test, y_pred))

# Save model
os.makedirs("models", exist_ok=True)
joblib.dump(clf, "models/breast_cancer_model.pkl")
print("✅ Breast Cancer model saved in ./models/")
