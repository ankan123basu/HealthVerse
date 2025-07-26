import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
import joblib
import os

# Step 1: Load data
df = pd.read_csv("data/Anaemia.csv")

# Step 2: Drop unnecessary column
df.drop("Number", axis=1, inplace=True)

# Step 3: Encode 'Sex' and 'Anaemic'
label_encoder = LabelEncoder()
df["Sex"] = label_encoder.fit_transform(df["Sex"].astype(str).str.strip())  # M=1, F=0, strip spaces

df["Anaemic"] = df["Anaemic"].map({"Yes": 1, "No": 0})  # Yes=1, No=0

# Step 4: Split features and target
X = df.drop("Anaemic", axis=1)
y = df["Anaemic"]

# Step 5: Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 6: Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

# Step 7: Train Random Forest model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Step 8: Evaluate
y_pred = model.predict(X_test)
acc = accuracy_score(y_test, y_pred)

print(f"\U0001fa78 Anaemia Model Accuracy: {acc:.4f}\n")
print(classification_report(y_test, y_pred))

# Step 9: Save model and scaler
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/anemia_model.pkl")
joblib.dump(scaler, "models/anemia_scaler.pkl")

print("✅ Anaemia model and scaler saved in ./models/")
