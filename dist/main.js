const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;



let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
        if(!showMenu){
            hamburger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
    
            navItems.forEach((item)=>{
                item.classList.add('open');
            });
            showMenu = true;
        } else{
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
    
            navItems.forEach((item)=>{
                item.classList.remove('open');
            });
            showMenu = false;
        }
    

}
