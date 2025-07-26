// Test script for Gemini API
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGemini() {
  try {
    console.log('Initializing Gemini with API key:', process.env.GEMINI_API_KEY ? 'Found' : 'Not found');
    
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    console.log('Sending test request to Gemini...');
    const result = await model.generateContent('Explain how AI works in a few words');
    const response = await result.response;
    
    console.log('\nResponse from Gemini:');
    console.log(response.text());
    console.log('\nTest completed successfully!');
  } catch (error) {
    console.error('Error testing Gemini API:');
    console.error(error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Status code:', error.response.status);
    }
  }
}

testGemini();
