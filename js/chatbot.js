// AI-powered chatbot using Gemini Pro API
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY'; // Replace with your actual API key
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are a helpful health assistant for CureByDiet, a healthcare platform. 
Provide accurate, helpful health information while always recommending users consult healthcare professionals for serious concerns. 
Keep responses concise (2-3 sentences). Focus on:
- Symptom guidance and when to seek medical help
- General nutrition and diet advice
- Directing users to platform features (symptom checker, diet plans, appointments)
- Health education and prevention tips
Never provide specific medical diagnoses or replace professional medical advice.`;

async function getBotResponse(message) {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `${SYSTEM_PROMPT}\n\nUser: ${message}`
                    }]
                }]
            })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('API Error:', error);
        return "I'm having trouble connecting right now. Please try our symptom checker or contact support.";
    }
}

function addMessage(message, isUser = false, isThinking = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'} ${isThinking ? 'thinking' : ''}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            ${isUser ? '' : '<i class="fas fa-robot"></i>'}
            <span>${isThinking ? '<i class="fas fa-spinner fa-spin"></i> ' + message : message}</span>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, true);
        input.value = '';
        
        addMessage("Thinking...", false, true);
        
        try {
            const response = await getBotResponse(message);
            // Remove thinking message
            const messages = document.getElementById('chatMessages');
            messages.removeChild(messages.lastChild);
            addMessage(response);
        } catch (error) {
            const messages = document.getElementById('chatMessages');
            messages.removeChild(messages.lastChild);
            addMessage("Sorry, I'm having trouble right now. Please try again.");
        }
    }
}

function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('open');
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('chatbot')) {
        setTimeout(() => addMessage("Hello! I'm your CureByDiet assistant. How can I help you today?"), 1000);
    }
});