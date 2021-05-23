const fixedMenuLink = document.querySelectorAll('.sidebar__menu-link');
const btnMenu = document.getElementsByClassName("btn-menu");
const fixedMenu = document.querySelector(".fixed-menu");
const body = document.body;

fixedMenuLink.forEach( element => {
  element.addEventListener('click', (e) => {
    let idLink = element.id;

    let idSection = document.getElementById(idLink  + '-section');
    let coordY = idSection.getBoundingClientRect().y;

    e.preventDefault();
    
    window.scrollBy(0, coordY);
    body.classList.remove('menu-open');
    fixedMenu.classList.remove('menu-open');
    document.body.style.overflow = "";
  })
});