function sendMessage() {
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let userText = input.value;

    if (userText === "") return;

    // User message
    let userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = userText;
    chatBox.appendChild(userMsg);

    // Bot response
    let botMsg = document.createElement("div");
    botMsg.className = "message bot";

    if (userText.toLowerCase().includes("about")) {
        botMsg.innerText = "I am a web developer passionate about AI.";
    } else if (userText.toLowerCase().includes("skills")) {
        botMsg.innerText = "HTML, CSS, JavaScript, AI tools.";
    } else if (userText.toLowerCase().includes("contact")) {
        botMsg.innerText = "Email: your@email.com";
    } else {
        botMsg.innerText = "I’m still learning. Ask about 'about', 'skills', or 'contact'.";
    }

    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}