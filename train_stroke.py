import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib
import os

# Step 1: Load dataset
df = pd.read_csv("data/healthcare-dataset-stroke-data.csv")

# Step 2: Drop ID column
df.drop("id", axis=1, inplace=True)

# Step 3: Handle missing values
df["bmi"] = pd.to_numeric(df["bmi"], errors="coerce")
df["bmi"].fillna(df["bmi"].median(), inplace=True)

# Step 4: Encode categorical columns
label_encoder = LabelEncoder()
for col in ['gender', 'ever_married', 'work_type', 'Residence_type', 'smoking_status']:
    df[col] = label_encoder.fit_transform(df[col].astype(str).str.strip())

# Step 5: Split features and target
X = df.drop("stroke", axis=1)
y = df["stroke"]

# Step 6: Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 7: Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

# Step 8: Train Random Forest model
model = RandomForestClassifier(n_estimators=100, max_depth=6, random_state=42)
model.fit(X_train, y_train)

# Step 9: Evaluate model
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)

print(f"🧠 Stroke Model Accuracy: {acc:.4f}\n")
print(classification_report(y_test, y_pred))

# Step 10: Save model and scaler
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/stroke_model.pkl")
joblib.dump(scaler, "models/stroke_scaler.pkl")

print("✅ Stroke model and scaler saved in ./models/")
