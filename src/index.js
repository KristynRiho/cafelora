import './style.css';

//schování navigace a zobrazení
const navBtnElm = document.querySelector('#nav-btn');
navBtnElm.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

//vybraní vsech polozek navigace
const allNavItems = document.querySelectorAll('.nav__item');
for (let i = 0; i < allNavItems.length; i++) {
  allNavItems[i].addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  });
}
