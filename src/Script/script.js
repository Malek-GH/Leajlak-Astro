document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav_item a");
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
    const currentRoute = window.location.pathname.replace(/\/$/, "");
    /*  console.log(currentRoute); */
    navItems.forEach((item) => {
      const itemRoute = item.getAttribute("data-route");
      if (currentRoute === itemRoute) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  setActiveItem();

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      navList.classList.remove("open");
    });
  });

  window.addEventListener("scroll", handleScroll);
  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("open");
    burger1.classList.toggle("burger-active");
    burger2.classList.toggle("burger-active");
    burger3.classList.toggle("burger-active");
  });

  buttonDrop.addEventListener("click", function (event) {
    dropdown.classList.toggle("active");
  });

  ButtonMenuDropdown.addEventListener("click", function (event) {
    ButtonMenuDropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdown.contains(event.target) &&
      !buttonDrop.contains(event.target)
    ) {
      dropdown.classList.remove("active");
    }
    if (!ButtonMenuDropdown.contains(event.target)) {
      ButtonMenuDropdown.classList.remove("active");
    }
  });

  registerButton.addEventListener("click", function (event) {
    registerMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !registerMenu.contains(event.target) &&
      !registerButton.contains(event.target)
    ) {
      registerMenu.classList.remove("active");
    }
  });

  handleScroll();
});
