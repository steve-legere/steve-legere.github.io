document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("typing-container");
  if (!el) return;

  // Array of messages
  const messages = [
    "Wake up, Neo...",
    "The Matrix has you...",
    "Follow the white rabbit.",
    "Knock, knock, Neo."
  ];

  // Pick a random message
  const text = messages[Math.floor(Math.random() * messages.length)];

  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 150); // typing speed
    } else {
      // blinking cursor
      const cursor = document.createElement("span");
      cursor.textContent = "|";
      cursor.style.animation = "blink 1s infinite";
      el.appendChild(cursor);
    }
  }

  type();
});