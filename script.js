  const botaoAbrir = document.querySelector('[data-menu="open"]');
  const botaoFechar = document.querySelector('[data-menu="close"]');
  const containerMenu = document.querySelector('[data-menu="container"]');

  if(botaoAbrir && botaoFechar && containerMenu) {
    console.log('sim')
    function toggleMenu (event) {
      containerMenu.classList.toggle('ativo');
    }

    function cliqueForaMenu (event) {
      (event.target === this) ? toggleMenu(event) : null;
    }
  
    botaoAbrir.addEventListener('click', toggleMenu);
    botaoFechar.addEventListener('click', toggleMenu);
    containerMenu.addEventListener('click', cliqueForaMenu);
  }