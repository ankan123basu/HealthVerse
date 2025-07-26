import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report, accuracy_score

# Load dataset
df = pd.read_csv('./data/kidney_disease.csv')

# Drop ID column if it exists
if 'id' in df.columns:
    df.drop('id', axis=1, inplace=True)

# Replace '?' and whitespace with NaN
df.replace(['?', ' ', ''], np.nan, inplace=True)

# Drop rows with too many missing values (optional)
df = df.dropna(thresh=15)  # keep rows with at least 15 non-null entries

# Fill numeric columns with median and categorical with mode
for col in df.columns:
    if df[col].dtype == 'object':
        df[col].fillna(df[col].mode()[0], inplace=True)
    else:
        df[col] = pd.to_numeric(df[col], errors='coerce')  # Convert all to numeric
        df[col].fillna(df[col].median(), inplace=True)

# Encode categorical variables
le = LabelEncoder()
for col in df.select_dtypes(include='object').columns:
    df[col] = le.fit_transform(df[col])

# Features and label
X = df.drop('classification', axis=1)
y = df['classification']

# Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train_scaled, y_train)

# Predict
y_pred = model.predict(X_test_scaled)
acc = accuracy_score(y_test, y_pred)

# Results
print(f"🧠 Kidney Disease Model Accuracy: {acc:.4f}\n")
print(classification_report(y_test, y_pred))

# Save model and scaler
joblib.dump(model, './models/kidney_model.pkl')
joblib.dump(scaler, './models/kidney_scaler.pkl')
print("✅ Kidney model and scaler saved in ./models/")
