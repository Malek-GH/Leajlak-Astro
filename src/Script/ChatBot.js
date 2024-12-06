document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("Chatbot");
  const content = document.getElementById("Chatbot-content");
  const openButton = document.getElementById("Chatbot-icon");
  const closeButton = document.getElementById("close");

  const isSmallScreen = () => {
    return window.innerWidth <= 450;
  };

  openButton.addEventListener("click", () => {
    content.classList.add("active");
    container.classList.remove("size-24");
    container.classList.add("size-full");

    if (isSmallScreen()) {
      openButton.classList.add("invisible");
    }
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");
    container.classList.remove("size-full");
    container.classList.add("size-24");

    if (isSmallScreen()) {
      openButton.classList.remove("invisible");
    }
  });

  window.addEventListener("resize", () => {
    if (!isSmallScreen()) {
      openButton.classList.remove("invisible");
    }
  });
});
