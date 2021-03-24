import initAnimar from './anime.js';
import SlideNav from './slide.js';

const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.addControl('.custom-controls');
initAnimar();