document.addEventListener("DOMContentLoaded", () => {
  const data = {
    merchant: {
      categories: [
        "Account & Profile Management",
        "Product Management",
        "Order Management",
        "Payments & Invoices",
        "Shipping & Fulfillment",
        "Customer Support",
        "Notifications & Alerts",
      ],
      questions: {
        "Account & Profile Management": [
          {
            q: "How can I update my profile information?",
            a: "Waiting for answers",
          },
          { q: "How do I reset my password?", a: "Waiting for answers" },
          {
            q: "How do I add or remove team members from my account?",
            a: "Waiting for answers",
          },
        ],
        "Product Management": [
          {
            q: "How can I add a new product to my store?",
            a: "Waiting for answers",
          },
          {
            q: "How do I edit or update product details?",
            a: "Waiting for answers",
          },
          {
            q: "Can I delete a product from my catalog?",
            a: "Waiting for answers",
          },
        ],
        "Order Management": [
          { q: "How do I view current orders?", a: "Waiting for answers" },
          { q: "How can I track a shipment?", a: "Waiting for answers" },
          {
            q: "How do I manage or cancel an order?",
            a: "Waiting for answers",
          },
        ],
        "Payments & Invoices": [
          {
            q: "How can I update my payment methods?",
            a: "Waiting for answers",
          },
          {
            q: "How do I view or download my invoices?",
            a: "Waiting for answers",
          },
          { q: "How do I request a refund?", a: "Waiting for answers" },
        ],
        "Shipping & Fulfillment": [
          {
            q: "How do I set up shipping preferences?",
            a: "Waiting for answers",
          },
          {
            q: "What are the shipping options available for merchants?",
            a: "Waiting for answers",
          },
          {
            q: "How do I integrate my own shipping carriers?",
            a: "Waiting for answers",
          },
        ],
        "Customer Support": [
          {
            q: "How can I contact customer support?",
            a: "Waiting for answers",
          },
          {
            q: "Where can I find troubleshooting help?",
            a: "Waiting for answers",
          },
        ],
        "Notifications & Alerts": [
          {
            q: "How do I set up email or SMS notifications for orders?",
            a: "Waiting for answers",
          },
          {
            q: "Can I control what type of alerts I receive?",
            a: "Waiting for answers",
          },
        ],
      },
    },
    company: {
      categories: [
        "Warehouse & Inventory Management",
        "Shipping & Logistics",
        "Order Fulfillment",
        "Client & Contract Management",
        "Reports & Analytics",
        "Account & Settings",
        "Support & Help",
      ],
      questions: {
        "Warehouse & Inventory Management": [
          { q: "How can I manage inventory levels?", a: "Waiting for answers" },
          {
            q: "How do I view the status of a specific inventory item?",
            a: "Waiting for answers",
          },
          {
            q: "Can I receive alerts for low stock levels?",
            a: "Waiting for answers",
          },
        ],
        "Shipping & Logistics": [
          {
            q: "How do I manage shipping for multiple merchants?",
            a: "Waiting for answers",
          },
          {
            q: "What are the delivery options available for 3PL companies?",
            a: "Waiting for answers",
          },
          {
            q: "How do I track shipments in real-time?",
            a: "Waiting for answers",
          },
        ],
        "Order Fulfillment": [
          {
            q: "How do I process and fulfill orders from merchants?",
            a: "Waiting for answers",
          },
          {
            q: "Can I view all open orders that need to be fulfilled?",
            a: "Waiting for answers",
          },
          {
            q: "How do I confirm that an order has been shipped?",
            a: "Waiting for answers",
          },
        ],
        "Client & Contract Management": [
          {
            q: "How do I manage merchant contracts?",
            a: "Waiting for answers",
          },
          {
            q: "How can I view the performance data for each merchant I serve?",
            a: "Waiting for answers",
          },
          {
            q: "How can I add or remove merchants from my client list?",
            a: "Waiting for answers",
          },
        ],
        "Reports & Analytics": [
          {
            q: "How do I access performance and shipping reports?",
            a: "Waiting for answers",
          },
          {
            q: "How can I generate an inventory or sales report?",
            a: "Waiting for answers",
          },
          {
            q: "Can I get a summary of delivery times or costs?",
            a: "Waiting for answers",
          },
        ],
        "Account & Settings": [
          {
            q: "How do I update my 3PL company profile?",
            a: "Waiting for answers",
          },
          {
            q: "Can I set up multiple locations for different warehouses?",
            a: "Waiting for answers",
          },
          { q: "How do I update billing details?", a: "Waiting for answers" },
        ],
        "Support & Help": [
          {
            q: "How do I contact Leajlak support as a 3PL company?",
            a: "Waiting for answers",
          },
          {
            q: "Where can I find troubleshooting guides or video tutorials?",
            a: "Waiting for answers",
          },
        ],
      },
    },
  };

  const chatContainer = document.getElementById("chat-container");
  const optionsContent = document.getElementById("options-content");
  const innercontainer = document.querySelector(".ChatBot-innerContent");

  let currentState = "initial";

  const clearElement = (el) => {
    while (el.firstChild) el.removeChild(el.firstChild);
  };

  const renderReturnButton = (returnHandler) => {
    const btn = document.createElement("button");
    btn.className = "return-btn";
    btn.textContent = "Return";
    btn.addEventListener("click", returnHandler);
    return btn;
  };

  const renderOptionSet = (items, clickHandler, containerClass, btnClass) => {
    const wrapper = document.createElement("div");
    wrapper.className = containerClass;

    items.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = btnClass;
      btn.textContent = item;

      btn.addEventListener("click", () => clickHandler(item, btn));
      wrapper.appendChild(btn);
    });

    return wrapper;
  };

  const scrollToBottom = () => {
    innercontainer.scrollTop = innercontainer.scrollHeight;
  };

  const renderUserBubble = (text) => {
    const bubble = document.createElement("div");
    bubble.className = "flex flex-row-reverse gap-2 items-end w-full";
    bubble.innerHTML = `
      <div class="bg-primaryOrange text-white rounded-t-lg rounded-bl-lg drop-shadow-md py-2 px-4">
        <p class="chatText">${text}</p>
      </div>
    `;
    chatContainer.appendChild(bubble);
    scrollToBottom();
  };

  const renderBotBubble = (text) => {
    const bubble = document.createElement("div");
    bubble.className = "flex flex-row gap-2 items-end w-full";
    bubble.innerHTML = `
      <div>
        <img src="/icon.webp" alt="bot icon" class="max-h-7 max-w-5 shrink-0" />
      </div>
      <div>
        <div class="chat-bubble">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="relative bg-lightGray rounded-t-lg rounded-br-lg drop-shadow-md py-2 px-4 overflow-hidden hidden" id="actual-message-bubble">
          <p class="chatText animate-typing overflow-hidden whitespace-nowrap">${text}</p>
        </div>
      </div>
    `;

    chatContainer.appendChild(bubble);
    scrollToBottom();

    setTimeout(() => {
      const typingBubble = bubble.querySelector(".chat-bubble");
      const actualMessage = bubble.querySelector("#actual-message-bubble");

      if (typingBubble) {
        typingBubble.remove();
      }
      if (actualMessage) {
        actualMessage.classList.remove("hidden");
      }
      scrollToBottom();
    }, 2000);
  };

  const goToInitial = () => {
    currentState = "initial";
    handleInitial();
  };

  const goToMerchantChosen = () => {
    currentState = "merchant-chosen";
    handleMerchantChosen();
  };

  const goToCompanyChosen = () => {
    currentState = "company-chosen";
    handleCompanyChosen();
  };

  const goToMerchantCategoryChosen = (cat) => {
    currentState = "merchant-category-chosen";
    handleMerchantCategoryChosen(cat);
  };

  const goToCompanyCategoryChosen = (cat) => {
    currentState = "company-category-chosen";
    handleCompanyCategoryChosen(cat);
  };

  const handleInitial = () => {
    clearElement(optionsContent);
    const initialOptions = ["I am a merchant", "I am a 3PL company"];
    const initialSet = renderOptionSet(
      initialOptions,
      (choice) => {
        if (choice.includes("merchant")) {
          goToMerchantChosen();
        } else {
          goToCompanyChosen();
        }
      },
      "options-initial",
      "option-btn-initial",
    );
    optionsContent.appendChild(initialSet);
  };

  const handleMerchantChosen = () => {
    clearElement(optionsContent);
    const categories = data.merchant.categories;
    const categorySet = renderOptionSet(
      categories,
      (cat) => {
        goToMerchantCategoryChosen(cat);
      },
      "options-category",
      "option-btn",
    );
    categorySet.appendChild(renderReturnButton(() => goToInitial()));
    optionsContent.appendChild(categorySet);
  };

  const handleMerchantCategoryChosen = (category) => {
    clearElement(optionsContent);
    const questions = data.merchant.questions[category]
      ? data.merchant.questions[category].map((q) => q.q)
      : [];
    const questionSet = renderOptionSet(
      questions,
      (question, btn) => {
        const answerObj = data.merchant.questions[category].find(
          (q) => q.q === question,
        );
        showQnA(question, answerObj.a);
        btn.remove();
      },
      "options-question",
      "option-btn",
    );

    questionSet.appendChild(renderReturnButton(() => goToMerchantChosen()));
    optionsContent.appendChild(questionSet);
  };

  const handleCompanyChosen = () => {
    clearElement(optionsContent);
    const categories = data.company.categories;
    const categorySet = renderOptionSet(
      categories,
      (cat) => {
        goToCompanyCategoryChosen(cat);
      },
      "options-category",
      "option-btn",
    );
    categorySet.appendChild(renderReturnButton(() => goToInitial()));
    optionsContent.appendChild(categorySet);
  };

  const handleCompanyCategoryChosen = (category) => {
    clearElement(optionsContent);
    const questions = data.company.questions[category]
      ? data.company.questions[category].map((q) => q.q)
      : [];
    const questionSet = renderOptionSet(
      questions,
      (question) => {
        const answerObj = data.company.questions[category].find(
          (q) => q.q === question,
        );
        showQnA(question, answerObj.a);
      },
      "options-question",
      "option-btn",
    );
    questionSet.appendChild(renderReturnButton(() => goToCompanyChosen()));
    optionsContent.appendChild(questionSet);
  };

  const showQnA = (question, answer) => {
    renderUserBubble(question);
    renderBotBubble(answer);
  };

  handleInitial();

  const content = document.getElementById("Chatbot-content");
  const openButton = document.getElementById("Chatbot-icon");
  const closeButton = document.getElementById("close");
  const header = document.querySelector("header");

  const isSmallScreen = () => window.innerWidth <= 450;

  openButton.addEventListener("click", () => {
    content.classList.add("active");
    if (isSmallScreen()) {
      openButton.classList.add("translate-y-20");
      document.body.classList.add("no-scroll");
      header.classList.add("hidden");
    }
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");
    if (isSmallScreen()) {
      openButton.classList.remove("translate-y-20");
      document.body.classList.remove("no-scroll");
      header.classList.remove("hidden");
    }
  });

  window.addEventListener("resize", () => {
    if (!isSmallScreen()) {
      openButton.classList.remove("translate-y-20");
    }
  });
  window.addEventListener("load", () => {
    if (openButton && content) {
      openButton.classList.replace("hidden", "flex");
      content.classList.replace("hidden", "flex");
    }
  });
});
