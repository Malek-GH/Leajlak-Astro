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

    const validateInputs = (selector, regex) => {
      const inputs = stepContent.querySelectorAll(selector);
      inputs.forEach((input) => {
        const valid = regex.test(input.value);
        input.classList.toggle("error", !valid);
        input.classList.toggle("correct", valid);

        const errorMessage = input.parentElement.nextElementSibling;
        if (errorMessage) {
          errorMessage.classList.toggle("hidden", valid);
        }

        if (!valid) {
          isValid = false;
        }
      });
    };

    const textRegex = /^[a-zA-Z0-9,#.\-]+$/;
    validateInputs(".input-text", textRegex);
    const emailRegex = /^\S+@\S+\.\S+$/;
    validateInputs(".input-email", emailRegex);
    const numberRegex = /^(0|[1-9]\d*)$/;
    validateInputs(".input-number", numberRegex);

    // Validate checkboxes
    const requiredCheckboxes =
      stepContent.querySelectorAll(".required-checkbox");
    if (requiredCheckboxes.length > 0) {
      const isChecked = Array.from(requiredCheckboxes).some((cb) => cb.checked);
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
