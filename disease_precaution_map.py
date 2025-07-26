import pandas as pd
import json

# Load the Disease precaution CSV
df = pd.read_csv('data/Disease precaution.csv')

# Clean up disease names (strip whitespace)
df['Disease'] = df['Disease'].str.strip()

# Build mapping: disease -> list of precautions
precaution_map = {}
for _, row in df.iterrows():
    disease = row['Disease']
    precautions = [str(row[col]).strip() for col in df.columns if col.startswith('Precaution') and pd.notnull(row[col]) and str(row[col]).strip()]
    precaution_map[disease.lower()] = precautions

# Save as JSON
with open('disease_precaution_map.json', 'w', encoding='utf-8') as f:
    json.dump(precaution_map, f, indent=2, ensure_ascii=False)

print(f"✅ disease_precaution_map.json created with {len(precaution_map)} diseases.")
