const employeesForm = document.querySelector("#employeesForm");
const messages = {
  name: {
    en: "Name must be at least 8 characters.",
    ar: "يجب أن يتكون الإسم من 8 أحرف على الأقل.",
  },
  email: {
    en: "Please enter a valid email address.",
    ar: "يرجى إدخال بريد إلكتروني صحيح.",
  },
  messageMin: {
    en: "Message must be at least 10 characters.",
    ar: "الرسالة يجب أن تكون 10 أحرف على الأقل.",
  },
  messageMax: {
    en: "Message cannot exceed 1000 characters.",
    ar: "لا يمكن أن تتجاوز الرسالة 1000 حرف.",
  },
  phone: {
    en: "Please enter a valid phone number.",
    ar: "يرجى إدخال رقم هاتف صالح.",
  },
  fileMissing: {
    en: "Please upload a PDF file.",
    ar: "يرجى رفع ملف PDF.",
  },
  fileWrong: {
    en: "Only PDF files are allowed.",
    ar: "فقط ملفات PDF مسموح بها.",
  },
};

employeesForm.addEventListener("submit", (e) => {
  if (!validateForm()) {
    e.preventDefault();
  }
});

function validateForm() {
  let isValid = true;

  const lang = detectLanguageFromUrl();

  const name = document.getElementById("name");
  const nameError = name.nextElementSibling;
  if (name.value.trim().length < 8) {
    nameError.textContent = messages.name[lang];

    name.classList.add("error");
    isValid = false;
  } else {
    nameError.textContent = "";
    name.classList.remove("error");
  }

  const email = document.getElementById("email");
  const emailError = email.nextElementSibling;
  if (!validateEmail(email.value.trim())) {
    emailError.textContent = messages.email[lang];
    email.classList.add("error");
    isValid = false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
  }

  const messageField = document.getElementById("message");
  const messageError = messageField.nextElementSibling;
  const messageVal = messageField.value.trim();
  if (messageVal.length < 10) {
    messageError.textContent = messages.messageMin[lang];
    messageField.classList.add("error");
    isValid = false;
  } else if (messageVal.length > 1000) {
    messageError.textContent = messages.messageMax[lang];
    messageField.classList.add("error");
    isValid = false;
  } else {
    messageError.textContent = "";
    messageField.classList.remove("error");
  }

  const phone = document.getElementById("number");
  const phoneError = phone.nextElementSibling;
  if (phone.value.trim().length < 7) {
    phoneError.textContent = messages.phone[lang];
    phone.classList.add("error");
    isValid = false;
  } else {
    phoneError.textContent = "";
    phone.classList.remove("error");
  }

  const fileInput = document.getElementById("file_input");
  const fileError = fileInput.nextElementSibling;
  if (!fileInput.files || fileInput.files.length === 0) {
    fileError.textContent = messages.fileMissing[lang];
    fileInput.classList.add("error");
    isValid = false;
  } else {
    const file = fileInput.files[0];
    if (file.type !== "application/pdf") {
      fileError.textContent = messages.fileWrong[lang];
      fileInput.classList.add("error");
      isValid = false;
    } else {
      fileError.textContent = "";
      fileInput.classList.remove("error");
    }
  }

  return isValid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function detectLanguageFromUrl() {
  const path = window.location.pathname;

  if (path.includes("/ar/")) {
    return "ar";
  }

  return "en";
}
