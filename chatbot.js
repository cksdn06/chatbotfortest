// Select the chat container and user input box
const chatContainer = document.querySelector('.chat-container');
const userInput = document.querySelector('.user-input');

// Add an event listener to the user input box for when the user hits "Enter"
userInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    // Get the user's message and create a new message element
    const userMessage = userInput.value;
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.textContent = userMessage;

    // Append the user's message element to the chat container
    chatContainer.appendChild(userMessageElement);

    // Clear the user input box
    userInput.value = '';

    if (userMessage.toLowerCase() === '안녕') {     // '안녕' 이라는 텍스트를 입력했을 때, '어 그래 반갑다잉' 이라는 결과값이 출력됨.
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('bot-message');
      botMessageElement.textContent = '어 그래 반갑다잉';
      chatContainer.appendChild(botMessageElement);
    }
    if (userMessage.toLowerCase() === 'ㅎㅇ') {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('bot-message');
        botMessageElement.textContent = 'ㅇㅇ ㅎㅇ';
        chatContainer.appendChild(botMessageElement);
    }
    if (userMessage.toLowerCase() === '반갑다고') {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('bot-message');
        botMessageElement.textContent = '그래 ㅅㅂ';
        chatContainer.appendChild(botMessageElement);
    }
    if (userMessage.toLowerCase() === '니 우정잉 보냐?') {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('bot-message');
        botMessageElement.textContent = 'ㅇㅇ';
        chatContainer.appendChild(botMessageElement);
    }
  }
});
