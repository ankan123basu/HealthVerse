import pandas as pd
import numpy as np
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import joblib

# Load CSV
data_path = r"D:\DISEASEXYZ\data\Student Depression Dataset.csv"
df = pd.read_csv(data_path)

# Drop unnecessary columns
if 'id' in df.columns:
    df.drop('id', axis=1, inplace=True)

# Encode categorical variables
label_cols = ['Gender', 'City', 'Profession', 'Dietary Habits', 'Degree', 
              'Have you ever had suicidal thoughts ?', 'Sleep Duration', 
              'Family History of Mental Illness']
for col in label_cols:
    df[col] = LabelEncoder().fit_transform(df[col].astype(str))

# Target column
target = 'Depression'

# Feature columns
X = df.drop(target, axis=1)
y = df[target]

# Fill missing values
for col in X.columns:
    if X[col].dtype in ['float64', 'int64']:
        X[col] = X[col].fillna(X[col].median())
    else:
        X[col] = X[col].fillna(X[col].mode()[0])

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standard scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
clf = RandomForestClassifier(random_state=42)
clf.fit(X_train_scaled, y_train)

# Evaluate
y_pred = clf.predict(X_test_scaled)
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Save model and scaler
model_dir = r"D:\DISEASEXYZ\models"
os.makedirs(model_dir, exist_ok=True)
joblib.dump(clf, os.path.join(model_dir, "depression_model.pkl"))
joblib.dump(scaler, os.path.join(model_dir, "depression_scaler.pkl"))

print("✅ Model and scaler saved to:", model_dir)
