import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
from imblearn.over_sampling import SMOTE
import joblib
import warnings
warnings.filterwarnings("ignore")

# Load and clean dataset
df = pd.read_csv("data/indian_liver_patient.csv")

# Drop rows with missing values
df = df.dropna()

# Fix corrupted row if present (optional: skip if already removed)
df = df[df['Gender'].isin(['Male', 'Female'])]

# Encode gender
df['Gender'] = df['Gender'].map({'Male': 1, 'Female': 0})

# Map target: 1 = disease, 0 = no disease
df['Dataset'] = df['Dataset'].replace(2, 0)

# Split features and target
X = df.drop('Dataset', axis=1)
y = df['Dataset']

# Normalize features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Stratified split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42, stratify=y
)

# Fix class imbalance using SMOTE
smote = SMOTE(random_state=42)
X_train_sm, y_train_sm = smote.fit_resample(X_train, y_train)

# Train Random Forest with balanced weights
clf = RandomForestClassifier(n_estimators=200, class_weight='balanced', random_state=42)
clf.fit(X_train_sm, y_train_sm)

# Predict
y_pred = clf.predict(X_test)
acc = accuracy_score(y_test, y_pred)

print(f"🧠 Liver Disease Model Accuracy: {acc:.4f}\n")
print(classification_report(y_test, y_pred))

# Save model and scaler
joblib.dump(clf, './models/liver_model.pkl')
joblib.dump(scaler, './models/liver_scaler.pkl')
print("✅ Liver model and scaler saved in ./models/")
