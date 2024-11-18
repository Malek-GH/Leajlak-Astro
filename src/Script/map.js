const isArabic = document.documentElement.lang === "ar";
const popupText = isArabic ? "مكتب لأجلك" : "Leajlak's Office";

var map = L.map("map").setView([24.7479868, 46.688836], 16);
var myIcon = L.icon({
  iconUrl: "/marker.webp",
  iconSize: [34, 50],
  iconAnchor: [17, 0],
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 18,
  minZoom: 16,
}).addTo(map);

L.marker([24.7479868, 46.688836], { icon: myIcon })

  .addTo(map)
  .bindPopup(
    ` <a href="https://maps.app.goo.gl/fn9x9TY53S7p8ViM9" target="”_blank”"><p class='text-black text-sm font-OpenSans'>${popupText}</p></a>`,
  )
  .openPopup();
