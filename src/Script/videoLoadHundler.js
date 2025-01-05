const placeholder = document.getElementById("videoplaceholder");
const video = document.getElementById("video");
const isSmallScreen = () => window.innerWidth <= 480;
if (isSmallScreen()) {
  const smallScreenSource = document.createElement("source");
  smallScreenSource.src = "/video/delivery_mobile.mp4";
  smallScreenSource.type = "video/mp4";
  video.appendChild(smallScreenSource);
} else {
  const largeScreenSource = document.createElement("source");
  largeScreenSource.src = "/video/delivery.mp4";
  largeScreenSource.type = "video/mp4";
  video.appendChild(largeScreenSource);
}
video.addEventListener("canplay", () => {
  placeholder.classList.add("hidden");
});
