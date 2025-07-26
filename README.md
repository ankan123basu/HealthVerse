# 🤖 HealthVerse: AI-Powered Disease Prediction System

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)

![ML](https://img.shields.io/badge/ML-TensorFlow%20%7C%20scikit--learn-orange)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20Tailwind%20CSS-blueviolet)
![Backend](https://img.shields.io/badge/Backend-Netlify%20Functions-yellow)

Comprehensive health analysis platform with multi-disease prediction(11 diseases), nutrition guidance, and symptom checking and precautions

<img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/915947f0-ec04-4a4a-b35c-002cabf4d774" />

<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/6a6a538c-c83f-4bba-a8ae-b10d2b8e50b9" />

<img width="1919" height="743" alt="image" src="https://github.com/user-attachments/assets/6bf7f56d-d163-4a88-86aa-a2366dc1c97c" />

<img width="1910" height="739" alt="image" src="https://github.com/user-attachments/assets/aeb64838-dc88-44c0-8aa8-1fced4e993ba" />

<img width="1917" height="776" alt="image" src="https://github.com/user-attachments/assets/f2238bea-6529-4d15-aedc-1a3b3d6f3538" />

<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/16872041-8dce-4ca3-b9b1-f104d2312b0c" />

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/5e37d7c4-05f0-4fc9-9cc9-e8813fd8f5f2" />

<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/f1fd2540-4e03-4e23-a9b6-252df513cc04" />

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/c81de97c-7404-4af6-8f4d-f8d8f3d4f5a2" />

<img width="841" height="815" alt="image" src="https://github.com/user-attachments/assets/20e04cfa-d7c1-477a-b2db-b3f7f1825d4d" />

## 🌟 Features

### 🏥 Multi-Disease Prediction
- **11 Disease Models**: Predict various health conditions with high accuracy
  - Alzheimer's Disease (Neural Network, 92% accuracy)
  - Anemia (Random Forest, 95% accuracy)
  - Breast Cancer (SVM, 97% accuracy)
  - Dengue (Gradient Boosting, 89% accuracy)
  - Diabetes (Logistic Regression, 78% accuracy)
  - Heart Disease (Random Forest, 88% accuracy)
  - Kidney Disease (XGBoost, 99% accuracy)
  - Liver Disease (Random Forest, 85% accuracy)
  - Stroke (Gradient Boosting, 91% accuracy)
  - Thyroid (SVM, 98% accuracy)
  - Depression (Random Forest, 86% accuracy)
- **Real-time Analysis**: Get instant predictions with detailed results
- **Model Transparency**: View confidence scores and contributing factors

### 🤖 AI Chat Assistants
- **Nutri-Bot**: Personalized nutrition and diet recommendations
- **Symptom Checker**: AI-powered preliminary health assessment
- **Context-Aware**: Maintains conversation context for better assistance

### 📱 Modern & Responsive UI
- **Mobile-First Design**: Works seamlessly on all devices
- **Interactive Elements**: Smooth animations and transitions
- **Collapsible Sidebar**: Optimized screen space usage
- **Accessibility**: Keyboard navigation and screen reader support

### 🔍 Comprehensive Health Resources
- **Disease Information**: Detailed descriptions and risk factors
- **Prevention Tips**: Evidence-based health recommendations
- **First Aid Guidance**: Quick reference for emergencies

## 🛠️ Tech Stack

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
- **TensorFlow/Keras** for neural networks (Alzheimer's model)
- **scikit-learn** for traditional ML models (Random Forest, SVM, etc.)
- **XGBoost** for gradient boosting (Dengue, Stroke models)
- **Pandas** & **NumPy** for data processing
- **Joblib** for model serialization

### AI Integration
- **Gemini Flash 2.0** for chat-based assistance
- **Context-aware** conversation handling
- **Multi-turn** dialogue support

### Development Tools
- **Git** for version control
- **Netlify CLI** for local development
- **Visual Studio Code** (recommended IDE)

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
│   └── train_models.py      # Model training scripts
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

To train or retrain models:

```bash
# Navigate to the scripts directory
cd scripts

# Run the training script
python train_models.py
```

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

Project Link: [https://github.com/ankan123basu/HealthVerseAI] (https://github.com/ankan123basu)

## 🙏 Acknowledgments

- [TensorFlow](https://www.tensorflow.org/)
- [scikit-learn](https://scikit-learn.org/)
- [Netlify](https://www.netlify.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  Made with ❤️ by ANKAN BASU, LOVELY PROFESSIONAL UNIVERSITY
</div>
