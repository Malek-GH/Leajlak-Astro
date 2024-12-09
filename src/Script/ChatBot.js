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

    if (isSmallScreen()) {
      openButton.classList.add("translate-y-20");
      document.body.classList.toggle("no-scroll");
    }
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");

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
