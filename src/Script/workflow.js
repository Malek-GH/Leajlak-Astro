document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".lazy-video");
  const videoSrc = video.querySelector("source").getAttribute("data-src");

  const loadVideo = () => {
    video.load();
    video.querySelector("source").setAttribute("src", videoSrc);
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadVideo();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(video);
});
