// Netlify Function: inference.js
// Handles POST /inference for disease prediction and GET /inference?disease=...&sample=random for random row

const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
const { spawnSync } = require('child_process');

// Disease file and model mapping
const diseaseMap = {
  diabetes: { csv: 'diabetes.csv', model: 'diabetes_model.pkl', scaler: 'diabetes_scaler.pkl' },
  heart: { csv: 'heartdisease.csv', model: 'heart_model.pkl', scaler: 'heart_scaler.pkl' },
  anemia: { csv: 'Anaemia.csv', model: 'anemia_model.pkl', scaler: 'anemia_scaler.pkl' },
  breast_cancer: { csv: 'Breast Cancer.csv', model: 'breast_cancer_model.pkl', scaler: null },
  dengue: { csv: 'Dengue diseases dataset.csv', model: 'dengue_model.pkl', scaler: 'dengue_scaler.pkl' },
  depression: { csv: 'Student Depression Dataset.csv', model: 'depression_model.pkl', scaler: 'depression_scaler.pkl' },
  alzheimers: { csv: 'alzheimers_disease_data.csv', model: 'alzheimers_model.pkl', scaler: 'alzheimers_scaler.pkl' },
  liver: { csv: 'indian_liver_patient.csv', model: 'liver_model.pkl', scaler: 'liver_scaler.pkl' },
  kidney: { csv: 'kidney_disease.csv', model: 'kidney_model.pkl', scaler: 'kidney_scaler.pkl' },
  stroke: { csv: 'healthcare-dataset-stroke-data.csv', model: 'stroke_model.pkl', scaler: 'stroke_scaler.pkl' },
  thyroid: { csv: 'new-thyroid.csv', model: 'thyroid_model.pkl', scaler: 'thyroid_scaler.pkl' }
};

exports.handler = async function(event, context) {
  console.log('Incoming request:', JSON.stringify(event, null, 2));
  console.log('Processing request for path:', event.path);
  console.log('HTTP Method:', event.httpMethod);
  console.log('Query params:', event.queryStringParameters);
  if (event.httpMethod === 'GET') {
    // Sample random row from CSV
    const { disease, sample } = event.queryStringParameters;
    if (disease && sample === 'random') {
      const csvPath = path.join(__dirname, '../data', diseaseMap[disease]?.csv || '');
      if (!fs.existsSync(csvPath)) return { statusCode: 404, body: 'CSV not found' };
      try {
        const rows = [];
        await new Promise((resolve, reject) => {
          fs.createReadStream(csvPath)
            .pipe(csv())
            .on('data', row => rows.push(row))
            .on('end', resolve)
            .on('error', reject);
        });
        // Pick 5 random samples
        const samples = [];
        const used = new Set();
        while (samples.length < 5 && used.size < rows.length) {
          const idx = Math.floor(Math.random() * rows.length);
          if (!used.has(idx)) {
            samples.push(rows[idx]);
            used.add(idx);
          }
        }
        return {
          statusCode: 200,
          body: JSON.stringify(samples)
        };
      } catch (e) {
        console.error('CSV read error:', e);
        return { 
          statusCode: 500, 
          body: JSON.stringify({ 
            error: 'CSV read error',
            message: e.message,
            stack: e.stack
          }) 
        };
      }
    }
    return { statusCode: 400, body: 'Invalid GET request' };
  }
  if (event.httpMethod === 'POST') {
    // Disease prediction
    try {
      console.log('Raw request body:', event.body);
      const requestBody = JSON.parse(event.body || '{}');
      const { disease, features } = requestBody;
      
      console.log('Parsed request body:', { disease, features });
      
      if (!disease || !diseaseMap[disease]) {
        console.error('Unknown disease:', disease);
        return { 
          statusCode: 400, 
          body: JSON.stringify({ error: 'Unknown disease', received: disease })
        };
      }
      
      // Call Python script for prediction
      console.log('Calling predict.py with:', disease, features);
      const py = spawnSync('python', [
        path.join(__dirname, 'predict.py'), 
        disease, 
        JSON.stringify(features)
      ], { 
        encoding: 'utf-8',
        env: { ...process.env, PYTHONPATH: __dirname }
      });
      
      console.log('Python script output:', {
        stdout: py.stdout,
        stderr: py.stderr,
        error: py.error,
        status: py.status
      });
      
      if (py.error) {
        console.error('Python script error:', py.error);
        return { 
          statusCode: 500, 
          body: JSON.stringify({ 
            error: 'Python script execution failed',
            message: py.error.message,
            stack: py.error.stack
          })
        };
      }
      
      if (py.status !== 0) {
        console.error('Python script exited with non-zero status:', py.status);
        return {
          statusCode: 500,
          body: JSON.stringify({
            error: 'Python script failed',
            stderr: py.stderr,
            status: py.status
          })
        };
      }
      
      return { 
        statusCode: 200, 
        headers: { 'Content-Type': 'application/json' },
        body: py.stdout 
      };
    } catch (e) {
      return { statusCode: 500, body: e.message };
    }
  }
  return { statusCode: 405, body: 'Method Not Allowed' };
};
