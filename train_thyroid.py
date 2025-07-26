import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report, accuracy_score
import os

# Load dataset (handle bad rows)
expected_columns = ['class', 'T2', 'thyroxin', 'triiodothyronine', 'tsh', 'difference']
df = pd.read_csv('./data/new-thyroid.csv', names=expected_columns, header=0, usecols=range(len(expected_columns)), on_bad_lines='skip')

# Replace '?' and whitespace with NaN
df.replace(['?', ' ', ''], np.nan, inplace=True)

# Drop rows with too many missing values (optional)
df = df.dropna(thresh=5)  # keep rows with at least 5 non-null entries

# Fill numeric columns with median and categorical with mode
for col in df.columns:
    if df[col].dtype == 'object':
        df[col].fillna(df[col].mode()[0], inplace=True)
    else:
        df[col] = pd.to_numeric(df[col], errors='coerce')
        df[col].fillna(df[col].median(), inplace=True)

# Encode categorical variables
le = LabelEncoder()
df['class'] = le.fit_transform(df['class'])

# Features and labels
X = df.drop('class', axis=1)
y = df['class']

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Predict
y_pred = model.predict(X_test_scaled)
acc = accuracy_score(y_test, y_pred)

# Report
print(f"🧠 Thyroid Model Accuracy: {acc:.4f}\n")
print(classification_report(y_test, y_pred))

# Save model and scaler
os.makedirs('./models', exist_ok=True)
joblib.dump(model, './models/thyroid_model.pkl')
joblib.dump(scaler, './models/thyroid_scaler.pkl')
print("✅ Thyroid model and scaler saved in ./models/")
