import initAnimar from "./anime.js";
import SlideNav from "./slide.js";

const existe = document.querySelector(".slide");

if (existe) {
  const slide = new SlideNav(".slide", ".wrapper");
  slide.init();
}

initAnimar();
