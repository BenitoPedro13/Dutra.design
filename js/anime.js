import anime from './anime-master/lib/anime.es.js';

export default function initAnimar() {

  const botaoAbrir = document.querySelector('[data-menu="open"]');
  const botaoFechar = document.querySelector('[data-menu="close"]');
  const containerMenu = document.querySelector('[data-menu="container"]');

  if (botaoAbrir && botaoFechar && containerMenu) {
    function toggleMenu(event) {
      containerMenu.classList.toggle("ativo");
      botaoAbrir.classList.toggle("ativo");

    }

    function cliqueForaMenu(event) {
      event.target === this ? toggleMenu(event) : null;
    }

    botaoAbrir.addEventListener("click", toggleMenu);
    botaoFechar.addEventListener("click", toggleMenu);
    containerMenu.addEventListener("click", cliqueForaMenu);
  }

  function y () {
    anime({
      targets: '[data-menu="open"] .top',
      translateY: [
        {value: 14, duration: 250},
        {value: 0, duration: 250, delay: 500}
      ],
      width: [
        {value: '40px', duration: 250, delay: 250},
        {value: '20px', duration: 250, delay: 750}
      ],
      easing: 'easeInOutSine'
    });
    anime({
      targets: '[data-menu="open"] .bottom',
      translateY: [
        {value: -14, duration: 250},
        {value: 0, duration: 250, delay: 500}
      ],
      width: [
        {value: '20px', duration: 250, delay: 250},
        {value: '40px', duration: 250, delay: 750}
      ],
      easing: 'easeInOutSine'
    });
    setTimeout(() => botaoAbrir.addEventListener('mouseover', y, {once: true}), 1600);
  }

  y();  

  function levitar(e){
    setTimeout(() => {
      document.querySelector('.hero .bg').style.display = 'block';
      document.querySelector('.hero .bg').style.animation = 'show 1.5s forwards';
      anime({
        targets: '.hero .bg path',
        strokeDashoffset: [
          {value: 0},
          {value: anime.setDashoffset, delay: 6000, duration: 3000},
        ],
        direction: 'alternate',
        easing: 'easeInOutSine',
        delay: function(el, i) { return i * 250 },
        loop: true
      });
      anime({
        targets: '.hero .bg path',
        translateY: 15,
        rotateX: 4,
        keyframes: [
          {rotate: -2, duration: 1000},
          {scale: 1.02, duration: 1000},
          {rotate: 4, duration: 1000}
        ],
        easing: 'easeInOutSine',
        direction: 'alternate',
        delay: function(el, i) { return i * 250 },
        loop: true
      });
    }, 2500);
  }

  levitar();

  const brand = document.querySelector('.brand');
  const midBar = document.querySelector('[data-anime="logo-mid"]');
  const sideBars = document.querySelectorAll('[data-anime="logo-side"]')

  setTimeout(() => midBar.classList.add('ativo'), 0);
  setTimeout(() => sideBars.forEach(r => r.classList.add('ativo')), 1000);


  function x() {
    midBar.classList.remove('ativo');
    sideBars.forEach(r => r.classList.remove('ativo'));
    setTimeout(() => midBar.classList.add('ativo'), 50);
    setTimeout(() => sideBars.forEach(r => r.classList.add('ativo')), 1000);
    setTimeout(() => brand.addEventListener("mouseover", x, { once: true }), 2000);
  }

  function hero(){

    
    const title = document.querySelectorAll('.hero h2');
    title.forEach(r => {
      const strText = r.textContent;
      const splitText = strText.split("");
      r.textContent = "";
      for (let i = 0; i < splitText.length; i++)
      {
        r.innerHTML += "<span class='letter'>" + splitText[i] + "</span>";
      }
    });
    

    anime({
      targets: '.hero .letter',
      opacity: [0,1],
      duration: 2250,
      delay: (el, i) => 50 * (i+1)
    })

    anime({
      targets: '.hero h1',
      easing: 'easeOutElastic(1, .5)',
      translateX: ['-50rem', 0],
      duration: 1000,
      delay: 1600
    })

    anime({
      targets: '.hero .img-container',
      translateX: [
        {value:'40vw', duration: 0},
        {value: '0vw', duration: 1500}
      ]
    });
    anime({
      targets: '.custom-controls li',
      translateY: '27vh',
      duration: 1000,
      delay: anime.stagger(250, {start: 2000})
    });
    setTimeout(() => document.querySelector('.custom-controls').classList.add('active'), 2200);
  }

  hero();

  function scroll(){
    
  }

  scroll();

  brand.addEventListener("mouseover", x, { once: true });

  const sections = document.querySelectorAll('[data-select]');
  if (sections) {
    
    function s(e) {
      sections.forEach(r => {
        r.classList.remove("ativo");
      });
      e.currentTarget.classList.add('ativo');
    }  
    sections.forEach(r => r.addEventListener("click", s));
  }
}