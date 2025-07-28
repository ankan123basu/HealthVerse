// app.js - HEALTHVERSE Dashboard Navigation & Dynamic Content

const mainContent = document.getElementById('main-content');
const navItems = {
  overview: document.getElementById('nav-overview'),
  predictor: document.getElementById('nav-predictor'),
  nutri: document.getElementById('nav-nutri'),
  symptom: document.getElementById('nav-symptom'),
  precautions: document.getElementById('nav-precautions'),
  details: document.getElementById('nav-details'),
};

// Render functions for each section
function renderOverview() {
  mainContent.innerHTML = `
    <div class="text-center mb-6">
      <h1 class="text-3xl md:text-4xl font-bold text-purple-700">Welcome to HEALTHVERSE</h1>
      <p class="text-lg text-gray-600 mt-2">An AI-Powered Healthcare Companion</p>
      <p class="text-sm text-gray-500 mt-1">Developed by ANKAN BASU | Lovely Professional University</p>
    </div>
    
    <div class="glass p-6 mb-6">
      <p class="text-lg mb-4">HEALTHVERSE is a comprehensive healthcare application that leverages cutting-edge AI and machine learning to provide personalized health insights and guidance. Built with modern web technologies and powered by Gemini AI, it offers a seamless experience for health monitoring and education.</p>
      
      <h3 class="text-xl font-semibold text-pink-600 mb-3">Key Features:</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li><span class="font-medium">Disease Prediction:</span> Advanced ML models for accurate prediction of 10+ diseases</li>
        <li><span class="font-medium">Nutri-Guide:</span> AI-powered nutritionist for personalized diet and wellness advice</li>
        <li><span class="font-medium">Symptom Analysis:</span> Intelligent symptom checker with precautionary guidance</li>
        <li><span class="font-medium">Comprehensive Database:</span> Precautions and care information for 70+ diseases and conditions</li>
        <li><span class="font-medium">User-Friendly Interface:</span> Clean, intuitive design for seamless user experience</li>
      </ul>
      
      <div class="mt-4 p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-700">
          <span class="font-semibold">Note:</span> This application is for informational purposes only and does not replace professional medical advice. Always consult a healthcare provider for medical concerns.
        </p>
      </div>
    </div>
    <div class="glass p-4">
      <h2 class="text-xl font-bold mb-2 text-pink-700">Quick Navigation Guide</h2>
      <ul class="list-none space-y-2">
        <li><b>🏠 Overview:</b> Start here</li>
        <li><b>🧬 Disease Predictor:</b> Predict diseases using ML</li>
        <li><b>🥗 Nutri Chatbot:</b> Get nutrition advice</li>
        <li><b>🤖 Symptoms Chatbot:</b> Analyze your symptoms</li>
        <li><b>🛡️ Precautions:</b> Get prevention tips for any disease</li>
      </ul>
    </div>
  `;
}

function renderPredictor() {
  mainContent.innerHTML = `
    <h1 class="text-2xl font-bold mb-4 text-purple-700">Select Disease to Predict</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      ${[
  { key: "alzheimers", img: "Alzheimer.jpg", label: "Alzheimer's" },
  { key: "anemia", img: "anemia.jpg", label: "Anemia" },
  { key: "breast_cancer", img: "breast cancer.jpg", label: "Breast Cancer" },
  { key: "dengue", img: "dengue.jpg", label: "Dengue" },
  { key: "depression", img: "depression.jpg", label: "Depression" },
  { key: "diabetes", img: "diabetes.jpg", label: "Diabetes" },
  { key: "heart", img: "Heart.jpg", label: "Heart Disease" },
  { key: "kidney", img: "Kidney.jpg", label: "Kidney Disease" },
  { key: "liver", img: "liver.jpeg", label: "Liver Disease" },
  { key: "stroke", img: "Stroke.jpg", label: "Stroke" },
  { key: "thyroid", img: "thyroid.jpg", label: "Thyroid" }
].map(d => `
  <div class=\"glass p-5 flex flex-col items-center cursor-pointer hover:scale-105 transition\" onclick=\"openPredictionModal('${d.key}')\">
    <img src='assets/${d.img}' alt='${d.label}' class='w-16 h-16 mb-3 rounded-lg object-cover border-2 border-purple-200 shadow' />
    <span class=\"text-base mb-1\">${d.label}</span>
    <button class=\"pixel-btn mt-2\">Predict</button>
  </div>
`).join('')}

    </div>
  `;
}

function renderNutri() {
  mainContent.innerHTML = `
    <h1 class="text-2xl font-bold mb-4 text-purple-700">Nutri Chatbot (Nutri-Guide)</h1>
    <div class="glass p-6 h-[70vh] flex flex-col">
      <div id="nutri-chat" class="flex-1 overflow-hidden">
        <!-- Chat interface will be rendered here by chat.js -->
      </div>
    </div>
  `;
  // Initialize the Nutri-Bot chat
  new ChatBot('nutri-chat', 'nutri');
}

function renderSymptom() {
  mainContent.innerHTML = `
    <h1 class="text-2xl font-bold mb-4 text-purple-700">Symptoms Chatbot (Health-Pulse)</h1>
    <div class="glass p-6 h-[70vh] flex flex-col">
      <div id="symptom-chat" class="flex-1 overflow-hidden">
        <!-- Chat interface will be rendered here by chat.js -->
      </div>
    </div>
  `;
  // Initialize the Symptom Checker chat
  new ChatBot('symptom-chat', 'symptom');
}

function renderPrecautions() {
  mainContent.innerHTML = `
    <h1 class="text-2xl font-bold mb-4 text-purple-700">Disease Precautions</h1>
    <div class="glass p-6 mb-6">
      <div class="mb-3">Search for recommended precautions for any disease or health condition.</div>
      <div class="flex gap-2">
        <input 
          id="disease-search" 
          class="flex-1 p-2 rounded border border-purple-200 text-black" 
          placeholder="Enter disease name (e.g., diabetes, asthma, hypertension)" 
        />
        <button id="search-btn" class="pixel-btn">Search</button>
      </div>
      <div class="mt-4 text-sm text-gray-600">
        Try: diabetes, heart disease, asthma, hypertension, covid-19, depression, anemia, migraine, allergies, arthritis
      </div>
    </div>
    
    <div id="precautions-results" class="glass p-6">
      <div class="text-center text-gray-500">
        Search for a disease to see recommended precautions.
      </div>
    </div>
  `;

  // Add event listeners
  const searchInput = document.getElementById('disease-search');
  const searchBtn = document.getElementById('search-btn');
  const resultsDiv = document.getElementById('precautions-results');
  
  const searchPrecautions = async () => {
    const disease = searchInput.value.trim();
    if (!disease) return;
    
    // Show loading state
    resultsDiv.innerHTML = `
      <div class="flex justify-center items-center h-32">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    `;
    
    try {
      const response = await fetch(`/.netlify/functions/precautions?disease=${encodeURIComponent(disease)}`);
      const data = await response.json();
      
      if (data.found) {
        resultsDiv.innerHTML = `
          <h2 class="text-xl font-semibold mb-4">Precautions for <span class="text-purple-600">${data.disease}</span></h2>
          <ul class="space-y-2">
            ${data.precautions.map((precaution, index) => `
              <li class="flex items-start">
                <span class="text-purple-500 mr-2">•</span>
                <span>${precaution}</span>
              </li>
            `).join('')}
          </ul>
          <div class="mt-6 p-4 bg-purple-50 rounded-lg">
            <p class="text-sm text-purple-700">
              <span class="font-semibold">Note:</span> These are general precautions. Always consult with a healthcare professional for personalized medical advice.
            </p>
          </div>
        `;
      } else {
        resultsDiv.innerHTML = `
          <div class="text-center py-8">
            <div class="text-5xl mb-4">🤔</div>
            <h3 class="text-lg font-medium mb-2">No specific precautions found</h3>
            <p class="text-gray-600 mb-4">${data.message || 'Please try a different search term.'}</p>
            <button onclick="renderPrecautions()" class="pixel-btn">Search Again</button>
          </div>
        `;
      }
    } catch (error) {
      console.error('Error fetching precautions:', error);
      resultsDiv.innerHTML = `
        <div class="text-center py-8 text-red-500">
          <p>Sorry, we encountered an error while fetching precautions.</p>
          <button onclick="renderPrecautions()" class="pixel-btn mt-4">Try Again</button>
        </div>
      `;
    }
  };
  
  // Add click and keypress event listeners
  searchBtn.addEventListener('click', searchPrecautions);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchPrecautions();
    }
  });
}

// --- Disease feature mapping (auto-generated) ---
const diseaseFeatures = {
  diabetes: ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'],
  heart: ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'],
  anemia: ['Number', 'Sex', '%Red Pixel', '%Green pixel', '%Blue pixel', 'Hb'],
  breast_cancer: [
    // Mean features
    'radius_mean', 'texture_mean', 'perimeter_mean', 'area_mean', 'smoothness_mean', 
    'compactness_mean', 'concavity_mean', 'concave points_mean', 'symmetry_mean', 'fractal_dimension_mean',
    
    // Standard error features
    'radius_se', 'texture_se', 'perimeter_se', 'area_se', 'smoothness_se',
    'compactness_se', 'concavity_se', 'concave points_se', 'symmetry_se', 'fractal_dimension_se',
    
    // Worst features
    'radius_worst', 'texture_worst', 'perimeter_worst', 'area_worst', 'smoothness_worst',
    'compactness_worst', 'concavity_worst', 'concave points_worst', 'symmetry_worst', 'fractal_dimension_worst'
  ],
  dengue: ['Age', 'Sex', 'Haemoglobin', 'WBC Count', 'Differential Count', 'RBC PANEL', 'Platelet Count', 'PDW'],
  depression: [
    'Gender', 'Age', 'City', 'Profession', 'Academic Pressure', 
    'Work Pressure', 'Financial Stress', 'Family History of Mental Illness', 'Study Hours',
    'CGPA', 'Study Satisfaction', 'Job Satisfaction', 'Sleep Duration', 'Dietary Habits',
    'Degree', 'Have you ever had suicidal thoughts ?'
  ],
  alzheimers: [
    'Age', 'Gender', 'Ethnicity', 'EducationLevel', 'BMI', 'Smoking', 
    'AlcoholConsumption', 'PhysicalActivity', 'SleepQuality', 'FamilyHistoryAlzheimers',
    'CardiovascularDisease', 'Diabetes', 'Depression', 'Hypertension',
    'SystolicBP', 'DiastolicBP', 'CholesterolTotal', 'CholesterolHDL', 'MMSE',
    'MemoryComplaints', 'Forgetfulness'  
  ],
  liver: ['Age', 'Gender', 'Total_Bilirubin', 'Direct_Bilirubin', 'Alkaline_Phosphotase', 'Alamine_Aminotransferase', 'Aspartate_Aminotransferase', 'Total_Protiens', 'Albumin', 'Albumin_and_Globulin_Ratio'],
  kidney: ['age', 'bp', 'sg', 'al', 'su', 'rbc', 'pc', 'pcc', 'ba', 'bgr', 'bu', 'sc', 'sod', 'pot', 'hemo', 'pcv', 'wc', 'rc', 'htn', 'dm', 'cad', 'appet', 'pe', 'ane'],
  stroke: ['gender', 'age', 'hypertension', 'heart_disease', 'ever_married', 'work_type', 'Residence_type', 'avg_glucose_level', 'bmi', 'smoking_status'],
  thyroid: ['T2', 'thyroxin', 'triiodothyronine', 'tsh', 'difference']
};

// --- Modal logic ---
const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

function openPredictionModal(diseaseKey) {
  const features = diseaseFeatures[diseaseKey] || [];
  const diseaseName = (diseaseKey.charAt(0).toUpperCase() + diseaseKey.slice(1)).replace('_', ' ');
  
  // Function to render input field based on feature name
  const renderInputField = (feature) => {
    const commonProps = `name="${feature}" class='w-full border rounded p-2 text-black' required`;
    
    // Special handling for Alzheimer's form
    if (diseaseKey === 'alzheimers') {
      switch(feature) {
        case 'Gender':
          return `
            <select ${commonProps}>
              <option value="">Select gender</option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>`;
          
        case 'Ethnicity':
          return `
            <select ${commonProps}>
              <option value="">Select ethnicity</option>
              <option value="0">Caucasian</option>
              <option value="1">African American</option>
              <option value="2">Hispanic</option>
              <option value="3">Asian</option>
              <option value="4">Other</option>
            </select>`;
            
        case 'EducationLevel':
          return `
            <select ${commonProps}>
              <option value="">Select education level</option>
              <option value="0">No formal education</option>
              <option value="1">Primary school</option>
              <option value="2">Secondary school</option>
              <option value="3">Bachelor's degree</option>
              <option value="4">Postgraduate degree</option>
            </select>`;
            
        case 'Smoking':
        case 'CardiovascularDisease':
        case 'Diabetes':
        case 'Depression':
        case 'Hypertension':
        case 'MemoryComplaints':
        case 'Forgetfulness':
        case 'Gender':
          return `
            <select ${commonProps}>
              <option value="">Select option</option>
              <option value="0">${feature === 'Gender' ? 'Male' : 'No'}</option>
              <option value="1">${feature === 'Gender' ? 'Female' : 'Yes'}</option>
            </select>`;
            
        case 'FamilyHistoryAlzheimers':
          return `
            <select ${commonProps}>
              <option value="">Family history of Alzheimer's</option>
              <option value="0">No family history</option>
              <option value="1">One parent affected</option>
              <option value="2">Both parents affected</option>
            </select>`;
            
        case 'Age':
          return `<input type="text" inputmode="numeric" pattern="[0-9]*\.?[0-9]*" ${commonProps} placeholder="Enter age (e.g., 65)">`;
          
        case 'BMI':
          return `<input type="text" inputmode="decimal" pattern="[0-9]*\.?[0-9]*" ${commonProps} placeholder="Enter BMI (e.g., 22.5)">`;
          
        case 'SystolicBP':
          return `<input type="text" inputmode="decimal" pattern="[0-9]*\.?[0-9]*" ${commonProps} placeholder="Systolic BP (e.g., 120.5)">`;
          
        case 'DiastolicBP':
          return `<input type="text" inputmode="decimal" pattern="[0-9]*\.?[0-9]*" ${commonProps} placeholder="Diastolic BP (e.g., 80.5)">`;
          
        case 'CholesterolTotal':
        case 'CholesterolHDL':
          return `<input type="text" inputmode="decimal" pattern="[0-9]*\.?[0-9]*" ${commonProps} placeholder="${feature} (e.g., 200.5)">`;
          
        case 'MMSE':
          return `<input type="text" inputmode="decimal" pattern="[0-9]*\.?[0-9]*" ${commonProps} placeholder="MMSE score (e.g., 28.5)">`;
          
        case 'PhysicalActivity':
        case 'SleepQuality':
          return `
            <select ${commonProps}>
              <option value="">Select level (1-10)</option>
              ${Array.from({length: 10}, (_, i) => `
                <option value="${i+1}">${i+1} - ${i < 3 ? 'Very Low' : i < 5 ? 'Low' : i < 7 ? 'Moderate' : i < 9 ? 'High' : 'Very High'}</option>
              `).join('')}
            </select>`;
            
        case 'AlcoholConsumption':
          return `
            <select ${commonProps}>
              <option value="">Select alcohol consumption level</option>
              <option value="0">None</option>
              <option value="1-5">Light (1-5 drinks/week)</option>
              <option value="6-10">Moderate (6-10 drinks/week)</option>
              <option value="10+">Heavy (10+ drinks/week)</option>
            </select>`;
            
        default:
          return `<input ${commonProps} placeholder="Enter ${feature}">`;
      }
    }
    
    // Default input for other diseases
    return `<input ${commonProps} placeholder="Enter ${feature}">`;
  };

  modalRoot.innerHTML = `
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-2xl relative glass max-h-[90vh] overflow-y-auto">
        <button onclick="closeModal()" class="sticky top-4 right-4 float-right text-gray-400 hover:text-gray-700 text-xl">&times;</button>
        <h2 class="text-2xl font-bold mb-6 text-center text-purple-700">${diseaseName} Prediction</h2>
        <form id="predict-form" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${features.map(feature => `
              <div class="space-y-1">
                <label class="block text-sm font-medium text-gray-700">
                  ${feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                ${renderInputField(feature)}
              </div>
            `).join('')}
          </div>
          
          <div class="pt-4 border-t mt-6">
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-2">Quick Fill Options</label>
              <select id="custom-data-select" class='w-full border rounded p-2 text-black'>
                <option value="">-- Select a random sample from dataset --</option>
                <option value="random">Load Random Sample</option>
              </select>
            </div>
            <button class="pixel-btn w-full py-3 text-lg" type="submit">
              Predict ${diseaseName}
            </button>
          </div>
        </form>
        <div id="predict-result" class="mt-6 p-4 rounded-lg text-center font-bold text-lg"></div>
      </div>
    </div>
  `;
  // Custom data auto-fill logic (backend integration)
  document.getElementById('custom-data-select').onchange = async function() {
    if (this.value === 'random') {
      document.getElementById('predict-result').innerText = 'Loading sample data...';
      try {
        const resp = await fetch(`/.netlify/functions/inference?disease=${encodeURIComponent(diseaseKey)}&sample=random`);
        if (!resp.ok) throw new Error('Failed to fetch sample');
        const samples = await resp.json();
        if (!Array.isArray(samples) || samples.length === 0) throw new Error('No samples');
        // Show a dropdown to pick one sample
        let sampleSelect = document.getElementById('sample-data-select');
        if (!sampleSelect) {
          sampleSelect = document.createElement('select');
          sampleSelect.id = 'sample-data-select';
          sampleSelect.className = 'w-full border rounded p-2 text-black mb-2';
          document.getElementById('custom-data-select').parentNode.appendChild(sampleSelect);
        }
        sampleSelect.innerHTML = `<option value=''>-- Pick a sample row --</option>` + samples.map((row, i) =>
          `<option value='${i}'>Sample ${i+1}: ${Object.values(row).slice(0,5).join(', ')}...</option>`
        ).join('');
        sampleSelect.onchange = function() {
          const idx = this.value;
          if (idx !== '') {
            const row = samples[idx];
            for (const [k, v] of Object.entries(row)) {
              const input = document.querySelector(`[name='${k}']`);
              if (input) input.value = v;
            }
            document.getElementById('predict-result').innerText = 'Sample data filled!';
            setTimeout(() => { document.getElementById('predict-result').innerText = ''; }, 1000);
          }
        };
        document.getElementById('predict-result').innerText = 'Select a sample row to fill.';
      } catch (e) {
        document.getElementById('predict-result').innerText = 'Error loading sample data.';
      }
    }
  };

  document.getElementById('predict-form').onsubmit = async function(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this));
    document.getElementById('predict-result').innerText = 'Predicting...';
    try {
      const resp = await fetch('/.netlify/functions/inference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disease: diseaseKey, features: formData })
      });
      if (!resp.ok) throw new Error('Prediction failed');
      const result = await resp.json();
      document.getElementById('predict-result').innerText = `Prediction: ${result.prediction}`;
    } catch (e) {
      document.getElementById('predict-result').innerText = 'Prediction error.';
    }
  };


}
function closeModal() { modalRoot.innerHTML = ''; }

// Navigation logic
function setActive(section) {
  Object.entries(navItems).forEach(([key, el]) => {
    if (key === section) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

navItems.overview.onclick = () => { setActive('overview'); renderOverview(); };
navItems.predictor.onclick = () => { setActive('predictor'); renderPredictor(); };
navItems.nutri.onclick = () => { setActive('nutri'); renderNutri(); };
navItems.symptom.onclick = () => { setActive('symptom'); renderSymptom(); };
navItems.precautions.onclick = () => { setActive('precautions'); renderPrecautions(); };

// Initial render
renderOverview();

// Disease model information
const diseaseModels = {
  'alzheimer': {
    modelType: 'Random Forest',
    accuracy: '95%',
    features: [
      { name: 'Age', type: 'number', description: 'Age of the patient' },
      { name: 'Gender', type: 'categorical (0: Female, 1: Male)', description: 'Biological sex' },
      { name: 'EducationLevel', type: 'number', description: 'Years of education' },
      { name: 'MMSE', type: 'number (0-30)', description: 'Mini-Mental State Examination score' },
      { name: 'eTIV', type: 'number', description: 'Estimated Total Intracranial Volume' },
      { name: 'nWBV', type: 'number', description: 'Normalized Whole Brain Volume' }
    ]
  },
  'anemia': {
    modelType: 'Random Forest',
    accuracy: '95%',
    features: [
      { name: 'Hemoglobin', type: 'number (g/dL)', description: 'Hemoglobin level in blood' },
      { name: 'MCH', type: 'number (pg)', description: 'Mean Corpuscular Hemoglobin' },
      { name: 'MCHC', type: 'number (g/dL)', description: 'Mean Corpuscular Hemoglobin Concentration' },
      { name: 'MCV', type: 'number (fL)', description: 'Mean Corpuscular Volume' },
      { name: 'Gender', type: 'categorical (0: Female, 1: Male)', description: 'Biological sex' }
    ]
  },
  'breast_cancer': {
    modelType: 'Random Forest',
    accuracy: '96%',
    features: [
      { name: 'radius_mean', type: 'number', description: 'Mean radius of tumor cells' },
      { name: 'texture_mean', type: 'number', description: 'Mean texture of tumor cells' },
      { name: 'perimeter_mean', type: 'number', description: 'Mean perimeter of tumor cells' },
      { name: 'area_mean', type: 'number', description: 'Mean area of tumor cells' },
      { name: 'smoothness_mean', type: 'number', description: 'Mean smoothness of tumor cells' }
    ]
  },
  'dengue': {
    modelType: 'Random Forest',
    accuracy: '99%',
    features: [
      { name: 'platelets', type: 'number (10^3 cells/μL)', description: 'Platelet count in blood' },
      { name: 'hematocrit', type: 'number (%)', description: 'Percentage of red blood cells in blood' },
      { name: 'white_blood_cells', type: 'number (10^3 cells/μL)', description: 'White blood cell count' },
      { name: 'fever', type: 'binary (0/1)', description: 'Presence of fever' },
      { name: 'headache', type: 'binary (0/1)', description: 'Presence of headache' },
      { name: 'muscle_pain', type: 'binary (0/1)', description: 'Presence of muscle pain' }
    ]
  },
  'diabetes': {
    modelType: 'Random Forest',
    accuracy: '96%',
    features: [
      { name: 'Pregnancies', type: 'number', description: 'Number of pregnancies' },
      { name: 'Glucose', type: 'number (mg/dL)', description: 'Plasma glucose concentration' },
      { name: 'BloodPressure', type: 'number (mm Hg)', description: 'Diastolic blood pressure' },
      { name: 'SkinThickness', type: 'number (mm)', description: 'Triceps skin fold thickness' },
      { name: 'Insulin', type: 'number (μU/mL)', description: '2-Hour serum insulin' },
      { name: 'BMI', type: 'number (kg/m²)', description: 'Body mass index' },
      { name: 'DiabetesPedigree', type: 'number', description: 'Diabetes pedigree function' },
      { name: 'Age', type: 'number (years)', description: 'Age in years' }
    ]
  },
  'heart_disease': {
    modelType: 'Random Forest',
    accuracy: '88%',
    features: [
      { name: 'age', type: 'number (years)', description: 'Age of the patient' },
      { name: 'sex', type: 'categorical (0: Female, 1: Male)', description: 'Biological sex' },
      { name: 'cp', type: 'number (0-3)', description: 'Chest pain type' },
      { name: 'trestbps', type: 'number (mm Hg)', description: 'Resting blood pressure' },
      { name: 'chol', type: 'number (mg/dL)', description: 'Serum cholesterol' },
      { name: 'fbs', type: 'binary (0/1)', description: 'Fasting blood sugar > 120 mg/dL' },
      { name: 'restecg', type: 'number (0-2)', description: 'Resting electrocardiographic results' },
      { name: 'thalach', type: 'number', description: 'Maximum heart rate achieved' },
      { name: 'exang', type: 'binary (0/1)', description: 'Exercise induced angina' },
      { name: 'oldpeak', type: 'number', description: 'ST depression induced by exercise' },
      { name: 'slope', type: 'number (0-2)', description: 'Slope of the peak exercise ST segment' },
      { name: 'ca', type: 'number (0-3)', description: 'Number of major vessels colored by flourosopy' },
      { name: 'thal', type: 'number (0-3)', description: 'Thalassemia type' }
    ]
  },
  'kidney_disease': {
    modelType: 'Random Forest',
    accuracy: '99%',
    features: [
      { name: 'age', type: 'number (years)', description: 'Age of the patient' },
      { name: 'bp', type: 'number (mm Hg)', description: 'Blood pressure' },
      { name: 'sg', type: 'number (1.005-1.025)', description: 'Specific gravity of urine' },
      { name: 'al', type: 'number (0-5)', description: 'Albumin level' },
      { name: 'su', type: 'number (0-5)', description: 'Sugar level in urine' },
      { name: 'rbc', type: 'binary (0/1)', description: 'Red blood cells in urine' },
      { name: 'pc', type: 'binary (0/1)', description: 'Pus cells in urine' },
      { name: 'pcc', type: 'binary (0/1)', description: 'Pus cell clumps in urine' },
      { name: 'ba', type: 'binary (0/1)', description: 'Bacteria in urine' },
      { name: 'bgr', type: 'number (mg/dL)', description: 'Blood glucose random' },
      { name: 'bu', type: 'number (mg/dL)', description: 'Blood urea' },
      { name: 'sc', type: 'number (mg/dL)', description: 'Serum creatinine' },
      { name: 'sod', type: 'number (mEq/L)', description: 'Sodium level' },
      { name: 'pot', type: 'number (mEq/L)', description: 'Potassium level' },
      { name: 'hemo', type: 'number (g/dL)', description: 'Hemoglobin level' },
      { name: 'pcv', type: 'number (%)', description: 'Packed cell volume' },
      { name: 'wbcc', type: 'number (cells/cumm)', description: 'White blood cell count' },
      { name: 'rbcc', type: 'number (millions/cmm)', description: 'Red blood cell count' },
      { name: 'htn', type: 'binary (0/1)', description: 'Hypertension' },
      { name: 'dm', type: 'binary (0/1)', description: 'Diabetes mellitus' },
      { name: 'cad', type: 'binary (0/1)', description: 'Coronary artery disease' },
      { name: 'appet', type: 'categorical (0: Poor, 1: Good)', description: 'Appetite level' },
      { name: 'pe', type: 'binary (0/1)', description: 'Pedal edema' },
      { name: 'ane', type: 'binary (0/1)', description: 'Anemia' }
    ]
  },
  'liver_disease': {
    modelType: 'Random Forest',
    accuracy: '76%',
    features: [
      { name: 'Age', type: 'number (years)', description: 'Age of the patient' },
      { name: 'Gender', type: 'categorical (0: Female, 1: Male)', description: 'Biological sex' },
      { name: 'Total_Bilirubin', type: 'number (mg/dL)', description: 'Total bilirubin level' },
      { name: 'Direct_Bilirubin', type: 'number (mg/dL)', description: 'Direct bilirubin level' },
      { name: 'Alkaline_Phosphotase', type: 'number (IU/L)', description: 'Alkaline phosphatase level' },
      { name: 'Alamine_Aminotransferase', type: 'number (IU/L)', description: 'ALT level' },
      { name: 'Aspartate_Aminotransferase', type: 'number (IU/L)', description: 'AST level' },
      { name: 'Total_Protiens', type: 'number (g/dL)', description: 'Total protein level' },
      { name: 'Albumin', type: 'number (g/dL)', description: 'Albumin level' },
      { name: 'Albumin_and_Globulin_Ratio', type: 'number', description: 'A/G ratio' }
    ]
  },
  'pneumonia': {
    modelType: 'Random Forest',
    accuracy: '93%',
    features: [
      { name: 'Chest X-ray', type: 'image', description: 'Chest X-ray image (JPG/PNG format)' },
      { name: 'Age', type: 'number (years)', description: 'Age of the patient' },
      { name: 'Fever', type: 'binary (0/1)', description: 'Presence of fever' },
      { name: 'Cough', type: 'binary (0/1)', description: 'Presence of cough' },
      { name: 'Difficulty Breathing', type: 'binary (0/1)', description: 'Presence of dyspnea' },
      { name: 'Chest Pain', type: 'binary (0/1)', description: 'Presence of chest pain' }
    ]
  },
  'stroke': {
    modelType: 'Random Forest',
    accuracy: '95%',
    features: [
      { name: 'gender', type: 'categorical (0: Female, 1: Male)', description: 'Biological sex' },
      { name: 'age', type: 'number (years)', description: 'Age of the patient' },
      { name: 'hypertension', type: 'binary (0/1)', description: 'History of hypertension' },
      { name: 'heart_disease', type: 'binary (0/1)', description: 'History of heart disease' },
      { name: 'ever_married', type: 'binary (0/1)', description: 'Marital status' },
      { name: 'work_type', type: 'categorical (0-4)', description: 'Type of work' },
      { name: 'Residence_type', type: 'categorical (0: Rural, 1: Urban)', description: 'Type of residence' },
      { name: 'avg_glucose_level', type: 'number (mg/dL)', description: 'Average glucose level' },
      { name: 'bmi', type: 'number (kg/m²)', description: 'Body mass index' },
      { name: 'smoking_status', type: 'categorical (0-3)', description: 'Smoking status' }
    ]
  },
  'thyroid': {
    modelType: 'Random Forest',
    accuracy: '98%',
    features: [
      { name: 'age', type: 'number (years)', description: 'Age of the patient' },
      { name: 'sex', type: 'categorical (0: Female, 1: Male)', description: 'Biological sex' },
      { name: 'on_thyroxine', type: 'binary (0/1)', description: 'On thyroxine medication' },
      { name: 'query_on_thyroxine', type: 'binary (0/1)', description: 'Query about thyroxine use' },
      { name: 'on_antithyroid_meds', type: 'binary (0/1)', description: 'On antithyroid medication' },
      { name: 'sick', type: 'binary (0/1)', description: 'Feeling sick' },
      { name: 'pregnant', type: 'binary (0/1)', description: 'Pregnancy status' },
      { name: 'thyroid_surgery', type: 'binary (0/1)', description: 'History of thyroid surgery' },
      { name: 'I131_treatment', type: 'binary (0/1)', description: 'I131 treatment history' },
      { name: 'query_hypothyroid', type: 'binary (0/1)', description: 'Query about hypothyroidism' },
      { name: 'query_hyperthyroid', type: 'binary (0/1)', description: 'Query about hyperthyroidism' },
      { name: 'lithium', type: 'binary (0/1)', description: 'On lithium medication' },
      { name: 'goitre', type: 'binary (0/1)', description: 'Presence of goitre' },
      { name: 'tumor', type: 'binary (0/1)', description: 'Presence of tumor' },
      { name: 'hypopituitary', type: 'binary (0/1)', description: 'Hypopituitary condition' },
      { name: 'psych', type: 'binary (0/1)', description: 'Psychiatric condition' },
      { name: 'TSH', type: 'number (μIU/mL)', description: 'Thyroid Stimulating Hormone level' },
      { name: 'T3', type: 'number (ng/dL)', description: 'Triiodothyronine level' },
      { name: 'TT4', type: 'number (μg/dL)', description: 'Total Thyroxine level' },
      { name: 'T4U', type: 'number', description: 'Thyroxine utilization rate' },
      { name: 'FTI', type: 'number', description: 'Free Thyroxine Index' }
    ]
  }
};

// Render function for Details section
function renderDetails() {
  mainContent.innerHTML = `
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-purple-700 mb-4">Disease Prediction Models</h1>
      <p class="text-gray-700 mb-6">This section provides detailed information about the machine learning models used for disease prediction, including input parameters, their descriptions, and expected formats.</p>
      
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-pink-600 mb-4">Understanding the Inputs</h2>
        <div class="glass p-6 mb-6">
          <h3 class="text-xl font-semibold mb-3">Common Input Types</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><span class="font-medium">Binary (0/1):</span> 0 typically means "No" and 1 means "Yes"</li>
            <li><span class="font-medium">Categorical:</span> Numbers representing different categories (see description for mapping)</li>
            <li><span class="font-medium">Numerical:</span> Actual measurements with units specified</li>
            <li><span class="font-medium">Images:</span> For conditions like pneumonia, upload a clear X-ray image</li>
          </ul>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${Object.entries(diseaseModels).map(([disease, info]) => `
          <div class="glass p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold text-purple-700 capitalize">${disease.replace('_', ' ')}</h3>
              <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">${info.modelType}</span>
            </div>
            <p class="text-sm text-gray-600 mb-4">Accuracy: <span class="font-medium">${info.accuracy}</span></p>
            
            <h4 class="font-semibold text-gray-800 mb-2">Input Parameters:</h4>
            <div class="overflow-x-auto">
              <table class="min-w-full text-sm">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-gray-700">Parameter</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700">Type</th>
                    <th class="px-4 py-2 text-left font-medium text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  ${info.features.map(feature => `
                    <tr>
                      <td class="px-4 py-2 font-medium">${feature.name}</td>
                      <td class="px-4 py-2 text-gray-600">${feature.type}</td>
                      <td class="px-4 py-2 text-gray-600">${feature.description}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div class="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h3 class="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h3>
        <ul class="list-disc pl-6 text-yellow-700 space-y-1">
          <li>All models are for research and educational purposes only</li>
          <li>Input ranges should be within normal physiological limits</li>
          <li>For binary inputs, use 0 for No/False and 1 for Yes/True</li>
          <li>For categorical inputs, refer to the description for the correct encoding</li>
          <li>Always consult with healthcare professionals for medical diagnosis</li>
        </ul>
      </div>
    </div>
  `;
}

// Navigation event listeners
Object.entries(navItems).forEach(([key, element]) => {
  element.addEventListener('click', () => {
    // Remove active class from all nav items
    Object.values(navItems).forEach(item => item.classList.remove('active'));
    // Add active class to clicked nav item
    element.classList.add('active');
    // Render the corresponding section
    if (key === 'overview') renderOverview();
    else if (key === 'predictor') renderPredictor();
    else if (key === 'nutri') renderNutri();
    else if (key === 'symptom') { setActive('symptom'); renderSymptom(); }
    else if (key === 'precautions') { setActive('precautions'); renderPrecautions(); }
    else if (key === 'details') renderDetails();
    
    // Close sidebar on mobile after selecting an item
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  });
});

// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const closeSidebarBtn = document.getElementById('close-sidebar');

function openSidebar() {
  sidebar.classList.remove('-translate-x-full');
  sidebarToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  // Focus on the close button when opening sidebar
  setTimeout(() => closeSidebarBtn.focus(), 100);
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-full');
  sidebarToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = 'auto';
  // Return focus to the toggle button when closing
  sidebarToggle.focus();
}

// Toggle sidebar on button click
sidebarToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  const isExpanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

// Close sidebar when clicking the close button
closeSidebarBtn.addEventListener('click', closeSidebar);

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== sidebarToggle) {
    closeSidebar();
  }
});

// Close sidebar with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !sidebar.classList.contains('-translate-x-full')) {
    closeSidebar();
  }
});

// Handle window resize
function handleResize() {
  if (window.innerWidth >= 768) {
    // Desktop - ensure sidebar is visible
    sidebar.classList.remove('-translate-x-full');
    document.body.style.overflow = 'auto';
  } else {
    // Mobile - ensure sidebar is hidden by default
    sidebar.classList.add('-translate-x-full');
  }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Initialize sidebar state
handleResize();

// Initial render
renderOverview();
