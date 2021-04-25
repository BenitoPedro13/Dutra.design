import initAnimar from "./anime.js";
import SlideNav from "./slide.js";

const slide = new SlideNav(".slide-1", ".wrapper-1");
slide.init();
slide.addControl(".custom-controls-1");

const sections = document.querySelectorAll("[data-section]");
const selections = document.querySelectorAll("[data-select]");

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("[data-select='1']").classList.add("ativo");
  }, 2000);
});

if (selections) {
  function s(e) {
    selections.forEach((r) => {
      r.classList.remove("ativo");
    });
    sections.forEach((r) => {
      r.classList.remove("ativo");
    });
    e.currentTarget.classList.add("ativo");
    const number = e.currentTarget.dataset.select;
    document.querySelector(`[data-section='${number}']`).classList.add("ativo");
    slide.onResize();
  }
  selections.forEach((r) => r.addEventListener("click", s));
}

initAnimar();
