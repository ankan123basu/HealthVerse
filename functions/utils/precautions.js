// functions/utils/precautions.js
const diseasePrecautions = {
  // Existing diseases (10)
  'diabetes': [
    'Monitor blood sugar levels regularly',
    'Maintain a healthy diet low in sugar and refined carbs',
    'Exercise regularly to maintain a healthy weight',
    'Take medications as prescribed by your doctor',
    'Get regular check-ups for eyes, feet, and kidneys'
  ],
  'heart disease': [
    'Eat a heart-healthy diet (low in saturated fats and cholesterol)',
    'Exercise for at least 30 minutes most days',
    'Maintain a healthy weight',
    'Control blood pressure and cholesterol',
    'Avoid smoking and limit alcohol intake'
  ],
  'hypertension': [
    'Reduce sodium intake',
    'Exercise regularly',
    'Limit alcohol consumption',
    'Manage stress through relaxation techniques',
    'Take prescribed medications as directed'
  ],
  'asthma': [
    'Identify and avoid triggers',
    'Take medications as prescribed',
    'Keep rescue inhaler accessible',
    'Get vaccinated for flu and pneumonia',
    'Monitor breathing and recognize warning signs'
  ],
  'covid-19': [
    'Get vaccinated and boosted',
    'Wear masks in crowded places',
    'Practice good hand hygiene',
    'Maintain social distancing',
    'Stay home when feeling unwell'
  ],
  'depression': [
    'Maintain a regular sleep schedule',
    'Stay connected with loved ones',
    'Engage in regular physical activity',
    'Practice stress-reduction techniques',
    'Seek professional help when needed'
  ],
  'anemia': [
    'Eat iron-rich foods (red meat, beans, leafy greens)',
    'Include vitamin C to enhance iron absorption',
    'Avoid tea/coffee with meals',
    'Take iron supplements if prescribed',
    'Get regular blood tests to monitor levels'
  ],
  'migraine': [
    'Identify and avoid triggers',
    'Maintain a regular sleep schedule',
    'Stay hydrated',
    'Manage stress',
    'Keep a headache diary'
  ],
  'allergies': [
    'Identify and avoid allergens',
    'Keep windows closed during high pollen seasons',
    'Use air purifiers',
    'Take antihistamines as prescribed',
    'Carry emergency medication if needed'
  ],
  'arthritis': [
    'Maintain a healthy weight',
    'Exercise regularly (low-impact activities)',
    'Use joint protection techniques',
    'Apply heat/cold therapy',
    'Take medications as prescribed'
  ],
  
  // New diseases (10 more - First batch)
  'pneumonia': [
    'Get vaccinated (pneumococcal and flu vaccines)',
    'Practice good hand hygiene',
    'Avoid smoking and secondhand smoke',
    'Cover your mouth when coughing or sneezing',
    'Manage chronic conditions properly'
  ],
  'osteoporosis': [
    'Ensure adequate calcium and vitamin D intake',
    'Engage in weight-bearing exercises',
    'Avoid smoking and limit alcohol',
    'Prevent falls at home',
    'Get regular bone density tests if at risk'
  ],
  'gastritis': [
    'Avoid spicy, acidic, or fried foods',
    'Limit alcohol and caffeine',
    'Eat smaller, more frequent meals',
    'Manage stress',
    'Avoid NSAIDs or take with food'
  ],
  'eczema': [
    'Moisturize skin regularly',
    'Use mild, fragrance-free soaps',
    'Avoid known triggers',
    'Wear soft, breathable fabrics',
    'Keep fingernails short to prevent scratching'
  ],
  'sinusitis': [
    'Use saline nasal sprays or rinses',
    'Stay hydrated',
    'Use a humidifier',
    'Avoid irritants like smoke',
    'Sleep with head elevated'
  ],
  'gout': [
    'Stay well hydrated',
    'Limit alcohol, especially beer',
    'Reduce intake of high-purine foods',
    'Maintain a healthy weight',
    'Take prescribed medications as directed'
  ],
  'hepatitis b': [
    'Get vaccinated',
    'Practice safe sex',
    'Avoid sharing needles or personal items',
    'Get regular medical check-ups',
    'Limit alcohol consumption'
  ],
  'hypothyroidism': [
    'Take thyroid medication as prescribed',
    'Have regular TSH level checks',
    'Maintain a balanced diet with iodine',
    'Be aware of medication interactions',
    'Monitor for symptoms of over/under medication'
  ],
  'psoriasis': [
    'Moisturize skin regularly',
    'Avoid skin injuries',
    'Manage stress',
    'Limit alcohol',
    'Follow treatment plan from dermatologist'
  ],
  'ulcerative colitis': [
    'Follow a low-residue diet during flare-ups',
    'Stay hydrated',
    'Manage stress',
    'Take medications as prescribed',
    'Get regular colonoscopies as recommended'
  ],
  
  // Next 10 diseases
  'chronic kidney disease': [
    'Control blood pressure',
    'Manage blood sugar levels if diabetic',
    'Follow a kidney-friendly diet (low sodium, potassium, phosphorus)',
    'Stay hydrated but monitor fluid intake as advised',
    'Avoid NSAIDs and nephrotoxic medications'
  ],
  'copd': [
    'Quit smoking and avoid secondhand smoke',
    'Get vaccinated (flu and pneumonia)',
    'Practice breathing exercises',
    'Stay active within your limits',
    'Avoid air pollution and lung irritants'
  ],
  'diverticulitis': [
    'Eat a high-fiber diet when not in flare-ups',
    'Stay well hydrated',
    'Exercise regularly',
    'Avoid nuts and seeds during flare-ups',
    'Maintain a healthy weight'
  ],
  'endometriosis': [
    'Use heat therapy for pain relief',
    'Practice relaxation techniques',
    'Consider hormonal therapy as prescribed',
    'Maintain a balanced diet',
    'Keep a symptom diary'
  ],
  'fibromyalgia': [
    'Maintain a regular sleep schedule',
    'Engage in low-impact exercise',
    'Practice stress management techniques',
    'Consider physical therapy',
    'Pace activities to avoid overexertion'
  ],
  'gallstones': [
    'Eat a high-fiber, low-fat diet',
    'Lose weight gradually if overweight',
    'Avoid rapid weight loss',
    'Stay hydrated',
    'Eat regular, balanced meals'
  ],
  'gerd': [
    'Eat smaller, more frequent meals',
    'Avoid lying down after eating',
    'Elevate the head of your bed',
    'Identify and avoid trigger foods',
    'Maintain a healthy weight'
  ],
  'hiv/aids': [
    'Take antiretroviral therapy as prescribed',
    'Practice safe sex',
    'Get regular medical check-ups',
    'Maintain a healthy lifestyle',
    'Stay up to date with vaccinations'
  ],
  'insomnia': [
    'Maintain a consistent sleep schedule',
    'Create a relaxing bedtime routine',
    'Keep your bedroom cool, dark, and quiet',
    'Limit screen time before bed',
    'Avoid caffeine and large meals before bedtime'
  ],
  'irritable bowel syndrome': [
    'Identify and avoid trigger foods',
    'Eat smaller, more frequent meals',
    'Increase fiber intake gradually',
    'Stay hydrated',
    'Manage stress through relaxation techniques'
  ],
  
  // Next 10 diseases
  'lupus': [
    'Protect skin from sun exposure',
    'Get adequate rest',
    'Exercise regularly when possible',
    'Take medications as prescribed',
    'Attend regular medical check-ups'
  ],
  'lyme disease': [
    'Use insect repellent in wooded areas',
    'Wear protective clothing',
    'Check for ticks after being outdoors',
    'Remove ticks properly and promptly',
    'Be aware of early symptoms'
  ],
  'multiple sclerosis': [
    'Stay cool in hot weather',
    'Engage in regular physical activity',
    'Eat a balanced diet',
    'Manage stress effectively',
    'Follow prescribed treatment plans'
  ],
  'obstructive sleep apnea': [
    'Maintain a healthy weight',
    'Sleep on your side',
    'Avoid alcohol before bedtime',
    'Use CPAP machine as prescribed',
    'Keep nasal passages open at night'
  ],
  'osteoarthritis': [
    'Maintain a healthy weight',
    'Engage in low-impact exercise',
    'Use assistive devices if needed',
    'Apply heat/cold therapy',
    'Consider physical therapy'
  ],
  'parkinson\'s disease': [
    'Exercise regularly to maintain mobility',
    'Make home safety modifications',
    'Take medications as scheduled',
    'Work with a physical therapist',
    'Eat a high-fiber diet'
  ],
  'pcos (polycystic ovary syndrome)': [
    'Maintain a healthy weight',
    'Eat a balanced diet',
    'Exercise regularly',
    'Monitor blood sugar levels',
    'Follow up with your healthcare provider'
  ],
  'pneumonia': [
    'Get vaccinated (pneumococcal and flu)',
    'Practice good hand hygiene',
    'Don\'t smoke',
    'Manage chronic conditions',
    'Get plenty of rest'
  ],
  'psoriatic arthritis': [
    'Take medications as prescribed',
    'Exercise regularly',
    'Use hot and cold therapy',
    'Protect your joints',
    'Maintain a healthy weight'
  ],
  'rheumatoid arthritis': [
    'Take medications as directed',
    'Balance activity with rest',
    'Use joint protection techniques',
    'Apply heat/cold as needed',
    'Maintain a healthy lifestyle'
  ],
  
  // Final 10 diseases
  'scleroderma': [
    'Protect skin from cold temperatures',
    'Use moisturizers regularly',
    'Exercise to maintain joint flexibility',
    'Manage heartburn with diet and medication',
    'Attend regular medical check-ups'
  ],
  'seasonal allergies': [
    'Check pollen counts and stay indoors when high',
    'Keep windows closed during allergy season',
    'Use air purifiers with HEPA filters',
    'Shower after being outdoors',
    'Take allergy medications as prescribed'
  ],
  'shingles': [
    'Get the shingles vaccine if eligible',
    'Keep the rash clean and covered',
    'Avoid scratching blisters',
    'Use cool compresses for pain relief',
    'Take antiviral medications if prescribed'
  ],
  'sickle cell anemia': [
    'Stay well hydrated',
    'Avoid extreme temperatures',
    'Get regular medical care',
    'Take folic acid supplements as directed',
    'Avoid high altitudes when possible'
  ],
  'sleep apnea': [
    'Maintain a healthy weight',
    'Sleep on your side',
    'Avoid alcohol before bed',
    'Use CPAP machine as prescribed',
    'Establish a regular sleep schedule'
  ],
  'strep throat': [
    'Complete the full course of antibiotics',
    'Get plenty of rest',
    'Stay hydrated',
    'Use a humidifier',
    'Practice good hand hygiene'
  ],
  'stroke': [
    'Control high blood pressure',
    'Manage diabetes',
    'Quit smoking',
    'Exercise regularly',
    'Eat a heart-healthy diet'
  ],
  'tb (tuberculosis)': [
    'Complete the full course of medications',
    'Cover your mouth when coughing',
    'Ventilate living spaces',
    'Get tested if exposed',
    'Follow doctor\'s instructions carefully'
  ],
  'ulcers': [
    'Avoid NSAIDs if possible',
    'Don\'t smoke',
    'Limit alcohol and caffeine',
    'Eat smaller, more frequent meals',
    'Manage stress'
  ],
  'varicose veins': [
    'Exercise regularly',
    'Elevate your legs when resting',
    'Avoid long periods of standing or sitting',
    'Wear compression stockings if recommended',
    'Maintain a healthy weight'
  ],
  
  // Common everyday health issues
  'common cold': [
    'Wash hands frequently with soap and water',
    'Cover your mouth when coughing or sneezing',
    'Get plenty of rest',
    'Stay hydrated with warm fluids',
    'Use a humidifier to ease congestion'
  ],
  'headache': [
    'Stay hydrated throughout the day',
    'Take breaks from screens every 20 minutes',
    'Practice stress-reduction techniques',
    'Ensure proper lighting when reading or working',
    'Get adequate sleep'
  ],
  'indigestion': [
    'Eat smaller, more frequent meals',
    'Avoid lying down immediately after eating',
    'Limit spicy and fatty foods',
    'Avoid eating too quickly',
    'Reduce stress during meals'
  ],
  'back pain': [
    'Maintain good posture when sitting',
    'Take frequent breaks from sitting',
    'Lift heavy objects properly (bend at knees)',
    'Sleep on a supportive mattress',
    'Do regular stretching exercises'
  ],
  'eye strain': [
    'Follow the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds)',
    'Adjust screen brightness to match surroundings',
    'Use artificial tears if eyes feel dry',
    'Position screens at arm\'s length',
    'Ensure proper lighting in your workspace'
  ],
  'stress': [
    'Practice deep breathing exercises',
    'Engage in regular physical activity',
    'Maintain a consistent sleep schedule',
    'Take short breaks throughout the day',
    'Limit caffeine and alcohol intake'
  ],
  'insect bites': [
    'Use insect repellent when outdoors',
    'Wear long sleeves and pants in wooded areas',
    'Apply cold compress to reduce swelling',
    'Avoid scratching to prevent infection',
    'Use anti-itch creams if needed'
  ],
  'sunburn': [
    'Apply broad-spectrum sunscreen (SPF 30+)',
    'Seek shade during peak sun hours (10am-4pm)',
    'Wear protective clothing and hats',
    'Apply aloe vera for relief',
    'Stay hydrated'
  ],
  'dry skin': [
    'Moisturize immediately after showering',
    'Use gentle, fragrance-free cleansers',
    'Avoid long, hot showers',
    'Use a humidifier in dry environments',
    'Drink plenty of water'
  ],
  'bad breath': [
    'Brush teeth twice daily and floss regularly',
    'Clean your tongue with a scraper or toothbrush',
    'Stay hydrated to prevent dry mouth',
    'Chew sugar-free gum to stimulate saliva',
    'Visit your dentist regularly'
  ],
  
  // Vector-borne and waterborne diseases
  'malaria': [
    'Use mosquito nets treated with insecticide',
    'Apply mosquito repellent containing DEET',
    'Wear long-sleeved clothing in endemic areas',
    'Take antimalarial medication if prescribed',
    'Eliminate standing water around living areas'
  ],
  'dengue': [
    'Prevent mosquito breeding in stagnant water',
    'Use window and door screens',
    'Wear protective clothing',
    'Use mosquito repellent',
    'Seek medical attention for high fever'
  ],
  'cholera': [
    'Drink only boiled or treated water',
    'Wash hands with soap before eating',
    'Eat only thoroughly cooked food',
    'Use proper sanitation facilities',
    'Get vaccinated if in high-risk areas'
  ],
  'rabies': [
    'Vaccinate pets against rabies',
    'Avoid contact with wild animals',
    'Wash animal bites with soap and water',
    'Seek immediate medical attention after animal bites',
    'Consider pre-exposure vaccination if at high risk'
  ],
  'snake bite': [
    'Wear boots and long pants in snake-prone areas',
    'Avoid tall grass and underbrush',
    'Do not handle or provoke snakes',
    'Keep your surroundings clean to avoid rodents',
    'Seek immediate medical help if bitten'
  ],
  'typhoid': [
    'Drink only boiled or bottled water',
    'Eat only hot, cooked food',
    'Practice good hand hygiene',
    'Get vaccinated before traveling to endemic areas',
    'Avoid raw fruits and vegetables that cannot be peeled'
  ],
  'leptospirosis': [
    'Avoid wading in floodwaters',
    'Wear protective footwear in contaminated areas',
    'Control rodent populations',
    'Cover cuts and wounds with waterproof dressings',
    'Avoid swimming in potentially contaminated water'
  ],
  'hepatitis a': [
    'Practice good hand hygiene',
    'Drink only treated water',
    'Get vaccinated',
    'Avoid raw or undercooked shellfish',
    'Practice safe food handling'
  ],
  'lyme disease': [
    'Use insect repellent containing DEET',
    'Wear light-colored clothing to spot ticks',
    'Check for ticks after being outdoors',
    'Shower soon after being outdoors',
    'Remove ticks promptly with fine-tipped tweezers'
  ],
  'zika virus': [
    'Prevent mosquito bites during the day',
    'Use condoms or abstain from sex if exposed',
    'Pregnant women should avoid travel to affected areas',
    'Eliminate standing water where mosquitoes breed',
    'Wear long-sleeved shirts and long pants'
  ]
};

function getPrecautionsForDisease(diseaseName) {
  const normalizedDisease = diseaseName.toLowerCase().trim();
  
  // Try to find an exact match first
  if (diseasePrecautions[normalizedDisease]) {
    return {
      found: true,
      disease: normalizedDisease,
      precautions: diseasePrecautions[normalizedDisease]
    };
  }
  
  // If no exact match, try to find a partial match
  const matchingDisease = Object.keys(diseasePrecautions).find(key => 
    normalizedDisease.includes(key) || key.includes(normalizedDisease)
  );
  
  if (matchingDisease) {
    return {
      found: true,
      disease: matchingDisease,
      precautions: diseasePrecautions[matchingDisease]
    };
  }
  
  // If no match found, return default message
  return {
    found: false,
    message: `No specific precautions found for "${diseaseName}". Please consult a healthcare professional for personalized advice.`
  };
}

module.exports = {
  getPrecautionsForDisease
};
