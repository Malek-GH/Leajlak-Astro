document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationNames = entry.target
            .getAttribute("data-animation")
            .split(" ");
          animationNames.forEach((animationName) => {
            entry.target.classList.add(animationName);
          });
          /* console.log(animationNames); */
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  sections.forEach((el) => {
    const animationName = el.getAttribute("data-animation");
    if (animationName) {
      observer.observe(el);
    }
  });
});
