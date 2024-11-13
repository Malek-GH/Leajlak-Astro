const formSteppers = document.querySelectorAll(".formStepper");
formSteppers.forEach((formStepper) => {
  const nextBtns = formStepper.querySelectorAll(".next-btn");
  const prevBtns = formStepper.querySelectorAll(".prev-btn");
  const formSteps = formStepper.querySelectorAll(".form-elements");
  const progressSteps = formStepper.parentElement.querySelectorAll(".stepper");

  let formStepNum = 0;

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (validateForm(formStepNum)) {
        formStepNum++;
        updateFormSteps();
        updateProgressBar();
      }
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepNum--;
      updateFormSteps();
      updateProgressBar();
    });
  });

  formStepper.addEventListener("submit", (e) => {
    if (!validateForm(formStepNum)) {
      e.preventDefault();
    } else {
      alert("Form submitted successfully!");
      // Handle form submission here
    }
  });

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.remove("active");
    });
    formSteps[formStepNum].classList.add("active");
  }

  function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx <= formStepNum) {
        progressStep.classList.add("active");
      } else {
        progressStep.classList.remove("active");
      }
      if (idx < formStepNum) {
        progressStep.classList.add("done");
      } else {
        progressStep.classList.remove("done");
      }
    });
  }

  function validateForm(idx) {
    const stepContent = formSteps[idx];
    let isValid = true;

    // Validate text inputs
    const inputs = stepContent.querySelectorAll(".input-text");
    inputs.forEach((input) => {
      const errorMessage = input.parentElement.nextElementSibling;
      if (input.value.trim() === "") {
        isValid = false;
        input.classList.add("error");
        errorMessage.style.display = "block";
      } else {
        input.classList.remove("error");
        input.classList.add("correct");
        errorMessage.style.display = "none";
      }
    });

    // Validate email inputs
    const emails = stepContent.querySelectorAll(".input-email");
    const emailRegex = /^\S+@\S+\.\S+$/;
    emails.forEach((email) => {
      const errorMessage = email.parentElement.nextElementSibling;
      if (!email.value.match(emailRegex)) {
        isValid = false;
        email.classList.add("error");
        errorMessage.style.display = "block";
      } else {
        email.classList.remove("error");
        email.classList.add("correct");
        errorMessage.style.display = "none";
      }
    });

    // Validate number inputs
    const numbers = stepContent.querySelectorAll(".input-number");
    const numberRegex = /^(0|[1-9]\d*)$/;
    numbers.forEach((number) => {
      const errorMessage = number.parentElement.nextElementSibling;
      if (!number.value.match(numberRegex)) {
        isValid = false;
        number.classList.add("error");
        errorMessage.style.display = "block";
      } else {
        number.classList.remove("error");
        number.classList.add("correct");
        errorMessage.style.display = "none";
      }
    });

    // Validate checkboxes
    const requiredCheckboxes =
      stepContent.querySelectorAll(".required-checkbox");
    if (requiredCheckboxes.length > 0) {
      let isChecked = false;

      for (let i = 0; i < requiredCheckboxes.length; i++) {
        if (requiredCheckboxes[i].checked) {
          isChecked = true;
          break;
        }
      }

      const errorMessage = stepContent.querySelector(".error-message-checkbox");

      if (!isChecked) {
        isValid = false;
        if (errorMessage) {
          errorMessage.style.display = "block";
        } else {
          console.warn(
            "Error message element for checkboxes not found in step",
            idx,
          );
        }
      } else {
        if (errorMessage) {
          errorMessage.style.display = "none";
        }
      }
    }

    return isValid;
  }
});
