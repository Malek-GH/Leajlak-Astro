document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".items a");
  const logoDefault = document.getElementById("logo-default");
  const logoScrolled = document.getElementById("logo-scrolled");
  const burger1 = document.querySelector(".burger-1");
  const burger2 = document.querySelector(".burger-2");
  const burger3 = document.querySelector(".burger-3");
  const ButtonMenuDropdown = document.getElementById("dropdownHoverButton");
  const dropdown = document.querySelectorAll(".language-dropdown-menu");
  const buttonDrop = document.querySelectorAll(".button-dropdown-menu");
  const registerButton = document.getElementById("registerMenuButton");
  const registerMenu = document.getElementById("registerMenu");
  const registerItems = document.querySelectorAll(".register_item");

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      logoDefault.classList.add("hidden");
      logoScrolled.classList.remove("hidden");
    } else {
      header.classList.remove("scrolled");
      logoDefault.classList.remove("hidden");
      logoScrolled.classList.add("hidden");
      /*  headerChange(); */
    }
  }
  function setActiveItem() {
    const dropdown_button = document.querySelector("#dropdown-button");
    const registerButton = document.querySelector("#registerButton");
    const currentRoute = window.location.pathname.replace(/\/$/, "");
    const lang = currentRoute.split("/")[1];
    const routes = {
      solutions: {
        merchant: `/${lang}/solutions/merchant-solutions`,
        logistic: `/${lang}/solutions/logistic-solutions`,
      },
      register: {
        merchant: `/${lang}/contact/merchants`,
        logistic: `/${lang}/contact/logistic-companies`,
        drivers: `/${lang}/contact/drivers`,
        employees: `/${lang}/contact/employees`,
      },
    };
    const classes = "active";

    navItems.forEach((item) => {
      const itemRoute = item.getAttribute("data-route");
      item.classList.toggle("active", currentRoute === itemRoute);
    });
    registerItems.forEach((registerItem) => {
      const itemRoute = registerItem.getAttribute("data-route");
      registerItem.classList.toggle("active", currentRoute === itemRoute);
    });
    const solutionsRoutes = [
      routes.solutions.merchant,
      routes.solutions.logistic,
    ];

    const registrationRoutes = [
      routes.register.merchant,
      routes.register.logistic,
      routes.register.drivers,
      routes.register.employees,
    ];

    const isSolutionsRoute = solutionsRoutes.includes(currentRoute);
    const isRegistrationRoute = registrationRoutes.includes(currentRoute);

    if (dropdown_button) {
      toggleClasses(dropdown_button, isSolutionsRoute, classes);
    }

    if (registerButton) {
      toggleClasses(registerButton, isRegistrationRoute, classes);
    }
  }

  function toggleClasses(element, condition, className) {
    if (element) {
      if (condition) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
  }

  /* function headerChange() {
    const currentRoute = window.location.pathname.replace(/\/$/, "");
    const pathSegments = currentRoute.split("/");
    const lang = pathSegments[1] || "";

    const caseStudiesRoute = `/${lang}/case-studiess`;

    if (currentRoute === caseStudiesRoute) {
      navList.classList.remove("text-white");
      navList.classList.add("text-secondaryBlueText");
      logoDefault.classList.add("hidden");
      logoScrolled.classList.remove("hidden");
      buttonDrop.forEach((drop) => {
        drop.classList.add("text-black");
      });
    } else {
      navList.classList.remove("text-secondaryBlueText");
      navList.classList.add("text-white");
      buttonDrop.forEach((drop) => {
        drop.classList.add("text-white");
      });
    }
  }
 */
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      navList.classList.remove("open");
    });
  });

  registerItems.forEach((registerItem) => {
    registerItem.addEventListener("click", () => {
      registerItem.classList.add("active");
    });
  });

  window.addEventListener("scroll", handleScroll);
  menuToggle.addEventListener("click", function () {
    document.body.classList.toggle(
      "no-scroll",
      navList.classList.toggle("open"),
    );
    burger1.classList.toggle("burger-active");
    burger2.classList.toggle("burger-active");
    burger3.classList.toggle("burger-active");
  });

  buttonDrop.forEach((button) => {
    button.addEventListener("mouseenter", function (event) {
      dropdown.forEach((drop) => {
        drop.classList.add("active");
      });
    });
  });
  buttonDrop.forEach((button) => {
    button.addEventListener("mouseleave", function (event) {
      dropdown.forEach((drop) => {
        drop.classList.remove("active");
      });
    });
  });

  ButtonMenuDropdown.addEventListener("mouseenter", function (event) {
    ButtonMenuDropdown.classList.add("active");
  });
  ButtonMenuDropdown.addEventListener("mouseleave", function (event) {
    ButtonMenuDropdown.classList.remove("active");
  });

  registerButton.addEventListener("mouseenter", function (event) {
    registerMenu.classList.add("active");
  });
  registerButton.addEventListener("mouseleave", function (event) {
    registerMenu.classList.remove("active");
  });

  setActiveItem();
  handleScroll();
  /*   headerChange(); */
});
