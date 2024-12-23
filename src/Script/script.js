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
  const dropdown = document.getElementById("language-dropdown-menu");
  const buttonDrop = document.getElementById("button-dropdown-menu");
  const registerButton = document.getElementById("registerMenuButton");
  const registerMenu = document.getElementById("registerMenu");
  const registerItems = document.querySelectorAll(".register_item");

  function handleScroll() {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      logoDefault.style.display = "none";
      logoScrolled.style.display = "block";
    } else {
      header.classList.remove("scrolled");
      logoDefault.style.display = "block";
      logoScrolled.style.display = "none";
    }
  }
  function setActiveItem() {
    const dropdown_button = document.querySelector("#dropdown-button");
    const currentRoute = window.location.pathname.replace(/\/$/, "");
    const lang = currentRoute.split("/")[1];
    const routes = {
      merchant: `/${lang}/solutions/merchant-solutions`,
      logistic: `/${lang}/solutions/logistic-solutions`,
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
    const isSpecialRoute =
      currentRoute === routes.merchant || currentRoute === routes.logistic;
    toggleClasses(dropdown_button, isSpecialRoute, classes);
  }

  function toggleClasses(element, condition, classList) {
    if (condition) {
      element.classList.add(classList);
    } else {
      element.classList.remove(classList);
    }
  }

  setActiveItem();

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

  buttonDrop.addEventListener("mouseenter", function (event) {
    dropdown.classList.add("active");
  });
  buttonDrop.addEventListener("mouseleave", function (event) {
    dropdown.classList.remove("active");
  });

  ButtonMenuDropdown.addEventListener("mouseenter", function (event) {
    ButtonMenuDropdown.classList.add("active");
  });
  ButtonMenuDropdown.addEventListener("mouseleave", function (event) {
    ButtonMenuDropdown.classList.remove("active");
  });

  registerButton.addEventListener("mouseenter", function (event) {
    registerMenu.classList.toggle("active");
  });
  registerButton.addEventListener("mouseleave", function (event) {
    registerMenu.classList.remove("active");
  });

  handleScroll();
});
