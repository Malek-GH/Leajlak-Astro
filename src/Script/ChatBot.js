document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("Chatbot");
  const content = document.getElementById("Chatbot-content");
  const openButton = document.getElementById("Chatbot-icon");
  const closeButton = document.getElementById("close");

  openButton.addEventListener("click", () => {
    content.classList.add("active");
    container.classList.add("w-full", "h-full");
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");
  });
});
