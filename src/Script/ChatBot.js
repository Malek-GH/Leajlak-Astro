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
    container.classList.remove("size-32");
    container.classList.add("size-full");

    if (isSmallScreen()) {
      openButton.classList.add("translate-y-20");
    }
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");
    container.classList.remove("size-full");
    container.classList.add("size-32");

    if (isSmallScreen()) {
      openButton.classList.remove("translate-y-20");
    }
  });

  window.addEventListener("resize", () => {
    if (!isSmallScreen()) {
      openButton.classList.remove("translate-y-20");
    }
  });
});
