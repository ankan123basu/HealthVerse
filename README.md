# HealthVerse : AI Health Companion with multi-disease prediction(11 diseases), nutrition guidance, and symptom checking and precautions

[![MIT License](https://img.shields.io/badge/License-MIT-8A2BE2.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)
[![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://healthverse-ai.netlify.app)

> **⚠️ RETRO THEME ACTIVATED**  
> Experience the nostalgia of retro UI with our pixel-perfect health companion! 

![HealthVerse Banner](https://img.shields.io/badge/HEALTHVERSE-8A2BE2?style=for-the-badge&logo=gamepad&logoColor=white)
  Retro-Themed AI-Powered Health Companion

> 💡 **Our Promise**: We don't replace doctors—we empower you with knowledge and bridge the gap between medical tests and understanding.

![ML](https://img.shields.io/badge/ML-TensorFlow%20%7C%20scikit--learn-orange)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20Tailwind%20CSS-blueviolet)
![Backend](https://img.shields.io/badge/Backend-Netlify%20Functions-yellow)

An all-in-one health analysis platform offering multi-disease prediction (11+ conditions), personalized nutrition guidance, and symptom checking with precautionary insights for over 60 diseases.

<img width="1919" height="906" alt="Screenshot 2025-07-29 005656" src="https://github.com/user-attachments/assets/92b884be-7e5d-4675-a740-75ca6625e152" />

<img width="1919" height="912" alt="Screenshot 2025-07-29 011454" src="https://github.com/user-attachments/assets/0d68f15a-c507-487e-b1d8-a3cf33dd9166" />

<img width="1919" height="913" alt="image" src="https://github.com/user-attachments/assets/2777d482-d14f-4af9-b02c-3ac64c694243" />

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/18206aec-f4d6-47e0-950d-c8b8e6aaa092" />

<img width="1919" height="903" alt="image" src="https://github.com/user-attachments/assets/bb932e37-cad5-4dca-a85c-cd23c92570fa" />


<img width="1919" height="800" alt="Screenshot 2025-07-29 012510" src="https://github.com/user-attachments/assets/3ef684dd-7331-465c-9bb3-7a9daa951d73" />

<img width="1919" height="782" alt="Screenshot 2025-07-29 012519" src="https://github.com/user-attachments/assets/9b73438a-6fdd-4c36-a5d6-2115327b3dac" />

<img width="1919" height="841" alt="Screenshot 2025-07-29 012549" src="https://github.com/user-attachments/assets/cedcb7a0-fdfd-4c5d-a141-ce72966a237c" />

<img width="1919" height="837" alt="Screenshot 2025-07-29 015129" src="https://github.com/user-attachments/assets/7bc2994c-b668-4b6c-9aff-f9bd0b3190ff" />

<img width="1919" height="879" alt="Screenshot 2025-07-29 015142" src="https://github.com/user-attachments/assets/d0514266-537b-45b4-9610-f482dd16e57d" />

<img width="1919" height="901" alt="Screenshot 2025-07-29 015154" src="https://github.com/user-attachments/assets/f52a0ece-2862-4e6a-8733-b73f797e9fbb" />

<img width="1919" height="921" alt="Screenshot 2025-07-29 015206" src="https://github.com/user-attachments/assets/6704ad8a-e142-45fd-9202-cbfd9ac298fc" />

<img width="1919" height="865" alt="Screenshot 2025-07-29 015255" src="https://github.com/user-attachments/assets/3c48896c-c748-4a87-896b-6dadb1db74b0" />

<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/6e8929ea-f55c-471f-bec9-a4c640d63e8b" />

<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/617107c5-f79f-4061-a9f2-774af7fede11" />

<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/33ec0787-9bff-446a-9b36-fa63d1e746e8" />

## 🎯 Why HealthVerse? Bridging the Gap in Healthcare Access

In a world where medical expertise isn't always accessible, HealthVerse emerges as your intelligent health companion. While medical tests provide raw data, they don't always translate to clear understanding or action. That's where we step in.

### 🤔 Why Use HealthVerse When Tests Exist?

#### 1. Beyond Binary Predictions

Medical tests give you numbers; we give you context. Our AI doesn't just read values—it understands patterns across multiple health indicators to provide meaningful insights about your health status.

#### 2. Comprehensive Health Analysis

We don't just look at one number in isolation. Our models analyze multiple parameters simultaneously to detect early warning signs that might be missed when looking at individual test results.

#### 3. Democratizing Healthcare

- **For Everyone**: No medical degree needed to understand your health status
- **24/7 Access**: Get insights anytime, anywhere
- **Multi-Disease Coverage**: From diabetes to depression, we've got you covered

### 🌍 Real-World Impact

#### For Individuals

- Early detection of potential health issues
- Clear explanations of what your symptoms might mean
- Actionable health recommendations

#### For Communities

- Supports healthcare workers in resource-limited settings
- Reduces unnecessary hospital visits
- Promotes preventive healthcare awareness

### 🏥 Our 11-Disease Coverage

Our specialized models provide insights into:

- **Chronic Conditions**: Diabetes, Heart Disease, Hypertension
- **Organ Health**: Liver Disease, Kidney Disease
- **Mental Health**: Depression
- **Metabolic Disorders**: Thyroid Conditions, Anemia
- **Neurological**: Alzheimer's Disease
- **Life-Threatening**: Stroke, Breast Cancer
- **Infectious Diseases**: Dengue

## 🎮 Features

### 🩺 Disease Prediction Models

Each disease prediction model is trained using its own dedicated script for optimal performance. All models use scikit-learn's RandomForestClassifier with appropriate hyperparameters.

| Disease | Model Type | Accuracy | Training Script |
|---------|------------|----------|-----------------|
| Alzheimer's Disease | Random Forest | ~95% | `train_alzheimer.py` |
| Anemia | Random Forest | ~95% | `train_anemia.py` |
| Breast Cancer | Random Forest | ~96% | `train_breast_cancer.py` |
| Depression | Random Forest | ~89% | `train_depression_model.py` |
| Diabetes | Random Forest | ~93% | `train_diabetes.py` |
| Heart Disease | Random Forest | ~97% | `train_heart.py` |
| Kidney Disease | Random Forest | ~94% | `train_kidney.py` |
| Liver Disease | Random Forest | ~96% | `train_liver.py` |
| Stroke | Random Forest | ~95% | `train_stroke.py` |
| Thyroid | Random Forest | ~98% | `train_thyroid.py` |
| Dengue | In Progress | ~95% | `train_dengue.py` |

*Note: Accuracies are approximate and based on test set performance. Actual performance may vary with different data distributions.*

- **Real-time Analysis**: Get instant predictions with detailed results
- **Model Transparency**: View confidence scores and contributing factors

### 🤖 AI Chat Assistants
- **Nutri-Bot**: Personalized nutrition and diet recommendations
- **Symptom Checker**: AI-powered preliminary health assessment

### 📱 Modern & Responsive UI
- **Mobile-First Design**: Works seamlessly on all devices
- **Interactive Elements**: Smooth animations and transitions
- **Collapsible Sidebar**: Optimized screen space usage
- **Accessibility**: Keyboard navigation and screen reader support

### 🔍 Comprehensive Health Resources
- **Disease Information**: Detailed descriptions and risk factors
- **Prevention Tips**: Evidence-based health recommendations
- **First Aid Guidance**: Quick reference for emergencies

## 🎮 Retro UI/UX Features

- **Pixel-Perfect Design**: Nostalgic pixel art interface with smooth animations
- **Responsive Layout**: Works on all devices from retro to modern
- **Dark Mode**: Eye-friendly interface for extended use

## 🕹️ Tech Stack

### Frontend
- **HTML5** & **CSS3** with **Tailwind CSS**
- **Vanilla JavaScript** for interactivity
- **Responsive Design** with mobile-first approach
- **Pixel Font** for consistent typography

### Backend
- **Netlify Functions** for serverless API endpoints
- **Python 3.8+** for machine learning models and data processing
- **Node.js 16+** for server-side logic

### Machine Learning
- **scikit-learn** for all machine learning models (Random Forest)**
- **Pandas** & **NumPy** for data processing and manipulation
- **Joblib** for model serialization and loading
- **StandardScaler** for feature scaling
- **LabelEncoder** for categorical variable encoding

### AI Integration
- **Gemini Flash 2.0** for chat-based assistance
- **Multi-turn** dialogue support

### Development Tools
- **Git** for version control
- **Netlify CLI** for local development
- **Visual Studio Code**

## 📁 Project Structure

```plaintext
DISEASEXYZ/
├── data/                    # Raw and processed datasets
│   ├── raw/                 # Original CSV files from various sources
│   │   ├── alzheimers_disease_data.csv
│   │   ├── Anaemia.csv
│   │   ├── Breast Cancer.csv
│   │   ├── Dengue diseases dataset.csv
│   │   ├── healthcare-dataset-stroke-data.csv
│   │   ├── indian_liver_patient.csv
│   │   ├── kidney_disease.csv
│   │   ├── new-thyroid.csv
│   │   └── Student Depression Dataset.csv
│   └── cleaned/             # Preprocessed and cleaned datasets
│
├── functions/               # Netlify Functions
│   ├── utils/               # Utility functions
│   │   └── precautions.js   # Disease precautions database
│   ├── chat.js              # Chat functionality with Gemini AI
│   └── predict.py           # ML model prediction logic
│
├── models/                  # Trained ML models and scalers
│   ├── alzheimers_model.pkl
│   ├── alzheimers_scaler.pkl
│   ├── anemia_model.pkl
│   ├── anemia_scaler.pkl
│   ├── breast_cancer_model.pkl
│   ├── dengue_model.joblib
│   ├── dengue_scaler.joblib
│   ├── depression_model.pkl
│   ├── depression_scaler.pkl
│   ├── diabetes_model.pkl
│   ├── diabetes_scaler.pkl
│   ├── heart_model.pkl
│   ├── heart_scaler.pkl
│   ├── kidney_model.pkl
│   ├── kidney_scaler.pkl
│   ├── liver_model.pkl
│   ├── liver_scaler.pkl
│   ├── stroke_model.pkl
│   └── thyroid_model.pkl
│
├── public/                  # Static files
│   ├── assets/              # Images and icons
│   │   ├── alzheimer.jpg
│   │   ├── anemia.jpg
│   │   ├── breast_cancer.jpg
│   │   ├── default.jpg
│   │   ├── dengue.jpg
│   │   ├── depression.jpg
│   │   ├── diabetes.jpg
│   │   ├── heart.jpg
│   │   ├── kidney.jpg
│   │   ├── liver.jpg
│   │   ├── logo.png
│   │   ├── stroke.jpg
│   │   └── thyroid.jpg
│   ├── js/
│   │   ├── app.js           # Main application logic
│   │   └── chat.js          # Chat interface logic
│   └── index.html           # Main HTML file
│
├── scripts/                 # Data processing and model training
│   ├── prepare.py           # Data cleaning and preprocessing
│   ├── train_alzheimer.py   # Alzheimer's disease model training
│   ├── train_anemia.py      # Anemia model training
│   ├── train_breast_cancer.py  # Breast cancer model training
│   ├── train_dengue.py      # Dengue model training
│   ├── train_depression_model.py  # Depression model training
│   ├── train_diabetes.py    # Diabetes model training
│   ├── train_heart.py       # Heart disease model training
│   ├── train_kidney.py      # Kidney disease model training
│   ├── train_liver.py       # Liver disease model training
│   ├── train_stroke.py      # Stroke prediction model training
│   └── train_thyroid.py     # Thyroid disease model training
│
├── .gitignore              # Git ignore file
├── netlify.toml            # Netlify configuration
├── package.json            # Node.js dependencies
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Python 3.8+
- Netlify CLI (for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healthverse.git
   cd healthverse
   ```

2. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```

5. **Run locally**
   ```bash
   netlify dev
   ```
   The app will be available at `http://localhost:8888`

## 🧪 Model Training

Each disease model is trained using its own dedicated script for better maintainability and customization. Here's how to train the models:

### Training Individual Models

Each model can be trained independently using its specific script:

```bash
# Navigate to the project root directory
cd path/to/HealthVerseAI

# Train Alzheimer's model
python train_alzheimer.py

# Train Anemia model
python train_anemia.py

# Train Breast Cancer model
python train_breast_cancer.py

# Train Depression model
python train_depression_model.py

# Train Diabetes model
python train_diabetes.py

# Train Heart Disease model
python train_heart.py

# Train Kidney Disease model
python train_kidney.py

# Train Liver Disease model
python train_liver.py

# Train Stroke model
python train_stroke.py

# Train Thyroid model
python train_thyroid.py
```

### Training Details
- Each training script handles its own data preprocessing, model training, and evaluation
- Models are saved in the `models/` directory
- Training scripts output accuracy and classification reports
- Each script is self-contained with its own data loading and preprocessing logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🌟 Future Enhancements

- [ ] **Expanded Disease Coverage**: Add more disease prediction models
- [ ] **Multi-language Support**: Support for multiple languages
- [ ] **Mobile App**: Native mobile applications for iOS and Android
- [ ] **Integration with Health Devices**: Connect with wearables and health trackers
- [ ] **Telemedicine Integration**: Connect with healthcare providers
- [ ] **Personal Health Dashboard**: Track health metrics over time

## 📞 Contact

**Project Link:**  
https://github.com/ankan123basu/HealthVerseAI  

**GitHub Profiles:**  
- https://github.com/ankan123basu  
- https://github.com/Ankit-Basu

## 🙏 Acknowledgments

- [TensorFlow](https://www.tensorflow.org/)
- [scikit-learn](https://scikit-learn.org/)
- [Netlify](https://www.netlify.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  Made with ❤️ by <b>ANKAN BASU</b> & <b>ANKIT BASU</b><br/>
  <i>Lovely Professional University</i>
</div>

