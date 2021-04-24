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

//objednání
let ordered = false;
const orderBtnElm = document.querySelector('.order-btn');
orderBtnElm.addEventListener('click', () => {
  document
    .querySelector('.drink__cup')
    .classList.toggle('drink__cup--selected');
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
});
