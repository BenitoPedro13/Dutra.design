import anime from "./anime-master/lib/anime.es.js";

export default function initAnimar() {
  const botaoAbrir = document.querySelector('[data-menu="open"]');
  const botaoFechar = document.querySelector('[data-menu="close"]');
  const containerMenu = document.querySelector('[data-menu="container"]');
  const menu = document.querySelector(".menu");

  if (botaoAbrir && containerMenu && menu) {
    function abrirMenu(event) {
      if (botaoAbrir.classList.contains("inactive")) {
        botaoAbrir.classList.remove("inactive");
        containerMenu.style.animation = "contshow .3s forwards";
        menu.style.animation = "show .5s forwards";
        containerMenu.classList.add("ativo");
        botaoAbrir.classList.add("ativo");
        anime({
          targets: '[data-menu="open"] .top',
          width: "2.5rem",
          background: "#000",
          rotate: "45deg",
          easing: "easeInOutSine",
          duration: 500,
        });
        anime({
          targets: '[data-menu="open"] .bottom',
          translateY: "-1rem",
          translateX: ".5rem",
          background: "#000",
          rotate: "-45deg",
          easing: "easeInOutSine",
          duration: 500,
        });
      } else if (botaoAbrir.classList.contains("ativo")) {
        botaoAbrir.classList.remove("ativo");
        containerMenu.style.animation = "contunshow .3s forwards";
        menu.style.animation = "unshow .5s forwards";
        setTimeout(() => {
          containerMenu.classList.remove("ativo");
        }, 500);
        botaoAbrir.classList.add("inactive");
        anime({
          targets: '[data-menu="open"] .top',
          width: "1.25rem",
          background: "#fff",
          rotate: "0deg",
          easing: "easeInOutSine",
          duration: 500,
        });
        anime({
          targets: '[data-menu="open"] .bottom',
          translateY: "0px",
          translateX: "0px",
          background: "#fff",
          rotate: "0deg",
          easing: "easeInOutSine",
          duration: 500,
        });
      }
    }

    function cliqueForaMenu(event) {
      event.target === this ? abrirMenu(event) : null;
    }

    botaoAbrir.addEventListener("click", abrirMenu);
    containerMenu.addEventListener("click", cliqueForaMenu);
  }

  function y() {
    anime({
      targets: '[data-menu="open"].inactive .top',
      translateY: [
        { value: 14, duration: 250 },
        { value: 0, duration: 250, delay: 500 },
      ],
      width: [
        { value: "40px", duration: 250, delay: 250 },
        { value: "20px", duration: 250, delay: 750 },
      ],
      easing: "easeInOutSine",
    });
    anime({
      targets: '[data-menu="open"].inactive .bottom',
      translateY: [
        { value: -14, duration: 250 },
        { value: 0, duration: 250, delay: 500 },
      ],
      width: [
        { value: "20px", duration: 250, delay: 250 },
        { value: "40px", duration: 250, delay: 750 },
      ],
      easing: "easeInOutSine",
    });
  }

  //window.addEventListener("load", () => {
  //  setTimeout(y, 2000);
  //});

  const test = document.querySelector(".menu-nav");

  test.addEventListener("mouseover", function (event) {
    event.target.classList.add("ativo");
  });

  test.addEventListener("mouseout", function (event) {
    event.target.classList.remove("ativo");
  });

  function levitar(e) {
    setTimeout(() => {
      document.querySelector(".hero .bg").style.display = "block";
      document.querySelector(".hero .bg").style.animation =
        "show 1.5s forwards";
      anime({
        targets: ".hero .bg path",
        strokeDashoffset: [
          { value: 0 },
          { value: anime.setDashoffset, delay: 2000, duration: 4000 },
        ],
        scale: 1.01,
        rotate: [0, 1.5],
        direction: "alternate",
        easing: "easeInOutSine",
        delay: function (el, i) {
          return i * 250;
        },
        loop: true,
      });
      const data = ["Tanoshime", "Ilma", "Sus", "Pizza","tango","ocean","saphira"];
      data.forEach((r) => {
        anime({
          targets: `[data-projeto=${r}] .bg path`,
          scale: 1.01,
          rotate: [0, 1.5],
          direction: "alternate",
          easing: "easeInOutSine",
          delay: function (el, i) {
            return i * 250;
          },
          loop: true,
        });
      });
    }, 2000);
  }

  window.addEventListener("load", () => {
    setTimeout(levitar, 0);
  });

  const brand = document.querySelector(".brand");
  const midBar = document.querySelector('[data-anime="logo-mid"]');
  const sideBars = document.querySelectorAll('[data-anime="logo-side"]');

  window.addEventListener("load", () => {
    setTimeout(() => midBar.classList.add("ativo"), 2000);
    setTimeout(() => sideBars.forEach((r) => r.classList.add("ativo")), 3000);
  });

  function x() {
    midBar.classList.remove("ativo");
    sideBars.forEach((r) => r.classList.remove("ativo"));
    setTimeout(() => midBar.classList.add("ativo"), 50);
    setTimeout(() => sideBars.forEach((r) => r.classList.add("ativo")), 1000);
    setTimeout(
      () => brand.addEventListener("mouseover", x, { once: true }),
      2000
    );
  }

  function hero() {
    const title = document.querySelectorAll(".hero h2");
    title.forEach((r) => {
      const strText = r.textContent;
      const splitText = strText.split("");
      r.textContent = "";
      for (let i = 0; i < splitText.length; i++) {
        r.innerHTML += "<span class='letter'>" + splitText[i] + "</span>";
      }
    });

    anime({
      targets: ".hero .letter",
      opacity: [0, 1],
      duration: 2250,
      delay: (el, i) => 50 * (i + 1),
    });

    anime({
      targets: ".hero h1",
      easing: "easeOutElastic(1, .5)",
      translateX: ["-50rem", 0],
      duration: 1000,
      delay: 1600,
    });

    anime({
      targets: ".hero .img-container",
      translateX: [
        { value: "40vw", duration: 0 },
        { value: "0vw", duration: 1500 },
      ],
    });
    anime({
      targets: ".custom-controls li",
      translateY: "27vh",
      duration: 1000,
      delay: anime.stagger(250, { start: 2000 }),
    });
    setTimeout(
      () => document.querySelector(".custom-controls").classList.add("active"),
      2200
    );
  }

  window.addEventListener("load", () => {
    setTimeout(hero, 2000);
  });

  brand.addEventListener("mouseover", x, { once: true });
}
