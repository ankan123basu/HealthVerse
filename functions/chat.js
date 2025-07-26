// Netlify Function: chat.js
// Handles POST /chat for Nutri-Bot and Symptom Checker

const { getNutritionResponse, getSymptomResponse } = require('./utils/gemini');

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async function(event, context) {
  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { message, chatType } = JSON.parse(event.body);
    
    if (!message || !chatType) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields: message and chatType are required' })
      };
    }

    let response;
    
    // Route to the appropriate chat handler
    if (chatType === 'nutri') {
      response = await getNutritionResponse(message);
    } else if (chatType === 'symptom') {
      response = await getSymptomResponse(message);
    } else {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid chatType. Must be "nutri" or "symptom"' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ response })
    };
  } catch (error) {
    console.error('Error processing chat request:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal Server Error',
        details: error.message 
      })
    };
  }
};
