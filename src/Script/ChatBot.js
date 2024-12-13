document.addEventListener("DOMContentLoaded", () => {
  // Data Structure: cleanly defined
  const data = {
    merchant: {
      categories: ["Payments", "Orders", "Support"],
      questions: {
        Payments: [
          {
            q: "How to update payment details?",
            a: "You can update them in your account settings.",
          },
          { q: "What are the fees?", a: "Fees vary depending on the service." },
        ],
        Orders: [
          {
            q: "How to track an order?",
            a: "Use the order tracking ID in your dashboard.",
          },
          {
            q: "How to cancel an order?",
            a: "You can cancel within the first 2 hours.",
          },
        ],
        Support: [
          {
            q: "How to contact support?",
            a: "Email us at support@example.com or use live chat.",
          },
          { q: "Support hours?", a: "We're available 24/7." },
        ],
      },
    },
    company: {
      categories: ["Logistics", "Integration", "Pricing"],
      questions: {
        Logistics: [
          {
            q: "How to assign a driver?",
            a: "Go to the 'Drivers' section in the logistics portal.",
          },
          {
            q: "How to manage deliveries?",
            a: "Use the 'Deliveries' dashboard to schedule and manage deliveries.",
          },
        ],
        Integration: [
          {
            q: "API documentation?",
            a: "Find the docs at api.example.com/docs.",
          },
          {
            q: "Integration support?",
            a: "Contact techsupport@example.com for assistance.",
          },
        ],
        Pricing: [
          {
            q: "What are the pricing tiers?",
            a: "Check our pricing page for detailed information.",
          },
          {
            q: "Any discounts available?",
            a: "Discounts for high-volume clients—contact sales.",
          },
        ],
      },
    },
  };

  const chatContainer = document.getElementById("chat-container");
  const optionsSection = document.getElementById("options-section");

  let currentState = "initial";

  // Utility Functions
  const clearElement = (el) => {
    while (el.firstChild) el.removeChild(el.firstChild);
  };

  // UI Rendering Functions
  const renderOptions = (items, clickHandler) => {
    const frag = document.createDocumentFragment();
    items.forEach((item) => {
      const btn = document.createElement("button");
      btn.className =
        "rounded-sm px-3 py-2 text-center font-medium ring-1 ring-black duration-200 hover:bg-black hover:text-white";
      btn.textContent = item;
      btn.addEventListener("click", () => clickHandler(item));
      frag.appendChild(btn);
    });
    return frag;
  };

  const renderUserBubble = (text) => {
    const bubble = document.createElement("div");
    bubble.className = "flex flex-row-reverse gap-2 items-end w-full";
    bubble.innerHTML = `
    
      <div class="bg-primaryOrange text-white rounded-t-lg rounded-bl-lg shadow py-2 px-4">
        <p class="chatText">${text}</p>
      </div>
    `;
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  const renderBotBubble = (text) => {
    const bubble = document.createElement("div");
    bubble.className = "flex flex-row gap-2 items-end w-full";
    bubble.innerHTML = `
      <div>
        <img src="/icon.webp" alt="bot icon" class="max-h-7 max-w-5 shrink-0" />
      </div>
      <div class="bg-white rounded-t-lg rounded-br-lg shadow py-2 px-4">
        <p class="chatText">${text}</p>
      </div>
    `;
    chatContainer.appendChild(bubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  // Step Handlers
  const handleInitial = () => {
    clearElement(optionsSection);
    const initialOptions = ["I am a merchant", "I am a 3PL company"];
    optionsSection.appendChild(
      renderOptions(initialOptions, (choice) => {
        if (choice.includes("merchant")) {
          currentState = "merchant-chosen";
          handleMerchantChosen();
        } else {
          currentState = "company-chosen";
          handleCompanyChosen();
        }
      }),
    );
  };

  const handleMerchantChosen = () => {
    clearElement(optionsSection);
    const categories = data.merchant.categories;
    optionsSection.appendChild(
      renderOptions(categories, (cat) => {
        currentState = "merchant-category-chosen";
        handleMerchantCategoryChosen(cat);
      }),
    );
  };

  const handleMerchantCategoryChosen = (category) => {
    clearElement(optionsSection);
    const questions = data.merchant.questions[category].map((q) => q.q);
    optionsSection.appendChild(
      renderOptions(questions, (question) => {
        const answerObj = data.merchant.questions[category].find(
          (q) => q.q === question,
        );
        showQnA(question, answerObj.a);
      }),
    );
  };

  const handleCompanyChosen = () => {
    clearElement(optionsSection);
    const categories = data.company.categories;
    optionsSection.appendChild(
      renderOptions(categories, (cat) => {
        currentState = "company-category-chosen";
        handleCompanyCategoryChosen(cat);
      }),
    );
  };

  const handleCompanyCategoryChosen = (category) => {
    clearElement(optionsSection);
    const questions = data.company.questions[category].map((q) => q.q);
    optionsSection.appendChild(
      renderOptions(questions, (question) => {
        const answerObj = data.company.questions[category].find(
          (q) => q.q === question,
        );
        showQnA(question, answerObj.a);
      }),
    );
  };

  // Show Q&A in the chat
  const showQnA = (question, answer) => {
    // User bubble (question)
    renderUserBubble(question);
    // Bot bubble (answer)
    renderBotBubble(answer);
  };

  // Initialize with the initial state
  handleInitial();

  // Chatbot open/close logic (unchanged from your original)
  const content = document.getElementById("Chatbot-content");
  const openButton = document.getElementById("Chatbot-icon");
  const closeButton = document.getElementById("close");

  const isSmallScreen = () => window.innerWidth <= 450;

  openButton.addEventListener("click", () => {
    content.classList.add("active");
    if (isSmallScreen()) {
      openButton.classList.add("translate-y-20");
      document.body.classList.add("no-scroll");
    }
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");
    if (isSmallScreen()) {
      openButton.classList.remove("translate-y-20");
      document.body.classList.remove("no-scroll");
    }
  });

  window.addEventListener("resize", () => {
    if (!isSmallScreen()) {
      openButton.classList.remove("translate-y-20");
    }
  });
});
