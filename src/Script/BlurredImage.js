document.addEventListener("DOMContentLoaded", () => {
  const blurredImg = document.querySelector(".blurred-img");
  const HeroBg = document.querySelector(".HeroBg");
  function loaded() {
    blurredImg.classList.add("loaded");
  }
  if (HeroBg.complete) {
    loaded();
  } else {
    HeroBg.addEventListener("load", loaded);
  }
});
