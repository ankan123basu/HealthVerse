// functions/utils/gemini.js
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to get response from Gemini
async function getGeminiResponse(prompt, context = '') {
  try {
    // Using gemini-2.0-flash model as specified
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Combine context and prompt
    const fullPrompt = context ? `${context}\n\n${prompt}` : prompt;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    // Remove any asterisks from the response
    return response.text().replace(/\*/g, '');
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I'm sorry, I encountered an error processing your request. Please try again later.";
  }
}

// Specific function for Nutri-Bot
async function getNutritionResponse(message) {
  // Check for greetings
  const greeting = message.toLowerCase().trim();
  if (greeting.match(/^(hi|hello|hey|greetings|hola|namaste|what's up|yo|hi there|good (morning|afternoon|evening))/i)) {
    return `🌱 Welcome to NutriGuide by ANKAN! I'm your personal nutrition assistant. I can help you with:
    • Balanced meal planning 🥗
    • Understanding food groups 🍎
    • Healthy eating habits 🥑
    • And more nutrition tips!
    
    What would you like to know about nutrition today?`;
  }

  const context = `You are NutriGuide, a specialized AI nutritionist created by ANKAN. Your role is to provide information ONLY about:
  - Nutrition and diet advice
  - Balanced meal planning
  - Food groups and their benefits
  - Healthy eating habits
  - Nutritional content of foods
  - Weight management through diet
  - Dietary requirements for different age groups

  PERSONALITY: Friendly, encouraging, and professional. Use food emojis occasionally to make responses engaging.

  RULES:
  1. If asked about anything outside of nutrition/diet, respond with: "I'm here to help with nutrition and diet-related questions. Could you ask me something about food, diet, or nutrition? 🍎🥦"
  2. Never provide medical advice, diagnosis, or treatment recommendations
  3. Always recommend consulting a healthcare professional for medical concerns
  4. Keep responses clear, concise, and under 200 characters when possible
  5. If unsure about a food/nutrition fact, say so rather than guessing`;
  
  return getGeminiResponse(message, context);
}

// Specific function for Symptom Checker
async function getSymptomResponse(message) {
  // Check for greetings
  const greeting = message.toLowerCase().trim();
  if (greeting.match(/^(hi|hello|hey|greetings|hola|namaste|what's up|yo|hi there|good (morning|afternoon|evening))/i)) {
    return `🩺 Welcome to HealthPulse by ANKAN! I'm here to help you understand symptoms and general health information.
    • Describe what you're feeling
    • Learn about common symptoms
    • Know when to seek medical help
    
    Remember, I'm not a doctor, but I can help guide you. What symptoms would you like to discuss?`;
  }

  const context = `You are HealthPulse, an advanced Symptom Checker AI created by ANKAN. Your role is to provide detailed information about:
  - Possible conditions that match described symptoms
  - Common symptom patterns and what they might indicate
  - When to seek immediate medical attention
  - General health information and next steps

  PERSONALITY: Empathetic, thorough, and professional. Use medical emojis occasionally to make responses more approachable.

  RESPONSE FORMAT:
  1. Acknowledge the symptoms mentioned
  2. List possible conditions (without diagnosing)
  3. Note any red flags that require immediate attention
  4. Suggest when to see a doctor
  5. Provide general self-care tips when appropriate

  RULES:
  1. For symptom analysis, provide a comprehensive list of possible conditions that match the symptoms, ordered by likelihood
  2. Always emphasize this is not a diagnosis and medical evaluation is needed
  3. Highlight any symptoms that require immediate medical attention
  4. Suggest appropriate next steps (e.g., "See a doctor within 24 hours", "Seek emergency care if...")
  5. Keep responses clear, informative, and detailed (300-400 characters)
  6. Use simple language and bullet points for better readability
  7. Include relevant emojis to make the response more engaging
  8. Always recommend consulting a healthcare provider for proper diagnosis
  9. Never claim to diagnose or provide treatment plans
  10. For multiple symptoms, explain how they might be related`;
  
  return getGeminiResponse(message, context);
}

module.exports = {
  getNutritionResponse,
  getSymptomResponse
};
