const btnMenu = document.getElementsByClassName("btn-menu");
const fixedMenu = document.querySelector(".fixed-menu");
const body = document.body;
for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click',  () => {
        body.classList.toggle('menu-open');
        fixedMenu.classList.toggle('menu-open');

        if ( fixedMenu.classList.contains('menu-open') ) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });
}

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 1200 ) {
        body.classList.remove('menu-open');
        fixedMenu.classList.remove('menu-open');
        document.body.style.overflow = "";
    }
});
