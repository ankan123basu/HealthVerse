import pandas as pd
import numpy as np
import os
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Load dataset
df = pd.read_csv("data/Dengue diseases dataset.csv")

# Clean data
df.dropna(subset=["Final Output"], inplace=True)

# Split features and target
X = df.drop(columns=["Final Output"])
y = df["Final Output"]

# Handle categorical columns (e.g., 'Sex')
X = pd.get_dummies(X, drop_first=True)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale numerical features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train classifier
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Predict & evaluate
y_pred = model.predict(X_test_scaled)
print("\n📊 Classification Report:\n")
print(classification_report(y_test, y_pred))

# Save model and scaler
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/dengue_model.pkl")
joblib.dump(scaler, "models/dengue_scaler.pkl")
print("\n✅ Model and scaler saved in ./models/\n")
