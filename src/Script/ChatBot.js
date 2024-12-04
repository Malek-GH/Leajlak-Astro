const content = document.getElementById("Chatbot-content");
const openButton = document.getElementById("Chatbot-icon");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
  content.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  content.classList.remove("active");
});
