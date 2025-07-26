// chat.js - Chatbot functionality for Nutri-Bot and Symptom Checker

class ChatBot {
  constructor(containerId, botType) {
    this.container = document.getElementById(containerId);
    this.botType = botType; // 'nutri' or 'symptom'
    this.messages = [];
    this.initialize();
  }

  initialize() {
    // Create chat interface
    this.container.innerHTML = `
      <div class="flex flex-col h-full">
        <div class="flex-1 overflow-y-auto p-4 space-y-4" id="chat-messages"></div>
        <div class="p-4 border-t border-gray-200">
          <div class="flex space-x-2">
            <input type="text" id="chat-input" class="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Type your message...">
            <button id="send-button" class="pixel-btn">Send</button>
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    const sendButton = this.container.querySelector('#send-button');
    const inputField = this.container.querySelector('#chat-input');
    
    const sendMessage = () => {
      const message = inputField.value.trim();
      if (message) {
        this.addMessage('user', message);
        inputField.value = '';
        this.getBotResponse(message);
      }
    };

    sendButton.addEventListener('click', sendMessage);
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Add welcome message
    const welcomeMessage = this.botType === 'nutri' 
      ? "Ask me anything about nutrition, diet, or healthy eating!"
      : "Please describe your symptoms and I'll try to help.";
    
    this.addMessage('bot', welcomeMessage);
  }

  addMessage(sender, text) {
    const messagesContainer = this.container.querySelector('#chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
    
    messageDiv.innerHTML = `
      <div class="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg px-4 py-2 ${sender === 'user' 
        ? 'bg-purple-600 text-white rounded-br-none' 
        : 'bg-gray-200 text-gray-800 rounded-bl-none'}">
        ${text}
      </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    this.messages.push({ sender, text });
  }

  async getBotResponse(userMessage) {
    try {
      // Show typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'flex justify-start';
      typingIndicator.id = 'typing-indicator';
      typingIndicator.innerHTML = `
        <div class="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 rounded-bl-none">
          <div class="flex space-x-1">
            <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      `;
      this.container.querySelector('#chat-messages').appendChild(typingIndicator);
      this.container.scrollTop = this.container.scrollHeight;

      // Call our Netlify function
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          chatType: this.botType
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Remove typing indicator
      document.getElementById('typing-indicator')?.remove();
      
      // Add bot response
      this.addMessage('bot', data.response || 'I apologize, but I encountered an issue processing your request.');
    } catch (error) {
      console.error('Error getting bot response:', error);
      this.addMessage('bot', 'Sorry, I encountered an error. Please try again later.');
      document.getElementById('typing-indicator')?.remove();
    }
  }
}

// Initialize chat when the page loads
function initializeChat(containerId, botType) {
  document.addEventListener('DOMContentLoaded', () => {
    new ChatBot(containerId, botType);
  });
}
