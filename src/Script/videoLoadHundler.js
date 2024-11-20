const placeholder = document.getElementById("videoplaceholder");
const video = document.getElementById("video");
video.addEventListener("canplaythrough", () => {
  placeholder.classList.add("hidden");
  video.classList.remove("hidden");
});
