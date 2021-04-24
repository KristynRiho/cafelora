import './style.css';

import { Layer } from './Layer/index.js';

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

//ingredience jako komponenty
// const data = {
//   color: '#feeeca',
//   label: 'mléčná pěnička',
// };

const layerContainerElm = document.querySelector('.layer-container');
// layerContainerElm.innerHTML = Layer(data);
// layerContainerElm.innerHTML += Layer({
//   color: '#fed7b0',
//   label: 'teplé mléko',
// });
// layerContainerElm.innerHTML += Layer({
//   color: '#613916',
//   label: 'espresso',
// });

//seznam ingrediencí
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

layers.forEach((item) => {
  layerContainerElm.innerHTML += Layer(item);
});

//Nápoj jako komponenta
// const Drink = (props) => {
//   const root = document.createElement('div');
//   root.classList.add('layer-container');

//   return root;
// };

// const data2 = {
//   id: 'romano',
//   name: 'Romano',
//   ordered: false,
//   layers: [
//     {
//       color: '#fbdf5b',
//       label: 'citrón',
//     },
//     {
//       color: '#613916',
//       label: 'espresso',
//     },
//   ],
// };
