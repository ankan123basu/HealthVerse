import os
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.impute import SimpleImputer
import joblib

DATA_DIR = 'data'
OUT_DIR = 'data/cleaned'
os.makedirs(OUT_DIR, exist_ok=True)

# Helper: Try to infer target column
possible_targets = ['target', 'class', 'Outcome', 'disease', 'prognosis', 'DEATH_EVENT', 'Result']
def find_target(df):
    for col in possible_targets:
        if col in df.columns:
            return col
    # fallback: last column
    return df.columns[-1]

def clean_and_save(csv_file):
    print(f'Processing {csv_file}...')
    df = pd.read_csv(os.path.join(DATA_DIR, csv_file))
    target_col = find_target(df)
    # Separate features/target
    X = df.drop(columns=[target_col], errors='ignore')
    y = df[target_col] if target_col in df.columns else None

    # Impute missing values (features only)
    imp = SimpleImputer(strategy='most_frequent')
    X_imputed = pd.DataFrame(imp.fit_transform(X), columns=X.columns)

    # Encode categorical columns (features only)
    for col in X_imputed.select_dtypes(include=['object']).columns:
        le = LabelEncoder()
        X_imputed[col] = le.fit_transform(X_imputed[col].astype(str))
        # Sanitize col name for filename
        safe_col = ''.join([c if c.isalnum() else '_' for c in col])
        safe_csv = ''.join([c if c.isalnum() else '_' for c in csv_file])
        joblib.dump(le, f'{OUT_DIR}/{safe_csv}_{safe_col}_encoder.sav')

    # Scale numeric columns (features only)
    scaler = StandardScaler()
    X_scaled = pd.DataFrame(scaler.fit_transform(X_imputed), columns=X_imputed.columns)
    safe_csv = ''.join([c if c.isalnum() else '_' for c in csv_file])
    joblib.dump(scaler, f'{OUT_DIR}/{safe_csv}_scaler.sav')

    # Save cleaned data (features + original target column)
    if y is not None:
        cleaned = pd.concat([X_scaled, y.reset_index(drop=True)], axis=1)
    else:
        cleaned = X_scaled
    cleaned.to_pickle(f'{OUT_DIR}/{os.path.splitext(csv_file)[0]}.pkl')
    print(f'Saved cleaned {csv_file} as {OUT_DIR}/{os.path.splitext(csv_file)[0]}.pkl')

if __name__ == '__main__':
    for fname in os.listdir(DATA_DIR):
        if fname.endswith('.csv'):
            clean_and_save(fname)
