import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib
import os

# Step 1: Load dataset
df = pd.read_csv("data/heartdisease.csv")

# Step 2: Define features and target
X = df.drop("target", axis=1)
y = df["target"]

# Step 3: Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 4: Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

# Step 5: Train Random Forest model
model = RandomForestClassifier(n_estimators=100, max_depth=6, random_state=42)
model.fit(X_train, y_train)

# Step 6: Evaluate model
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)

print(f"❤️ Heart Disease Model Accuracy: {acc:.4f}\n")
print(classification_report(y_test, y_pred))

# Step 7: Save model and scaler
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/heart_model.pkl")
joblib.dump(scaler, "models/heart_scaler.pkl")

print("✅ Heart model and scaler saved in ./models/")
