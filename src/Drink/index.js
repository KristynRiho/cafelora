import './style.css';

import { Layer } from './../Layer/index.js';

export const Drink = (props) => {
  const root = document.createElement('div');
  root.classList.add('drink');

  const drinkProductElm = document.createElement('div');
  drinkProductElm.classList.add('drink__product');
  root.appendChild(drinkProductElm);

  const drinkCupElm = document.createElement('div');
  drinkCupElm.classList.add('drink__cup');
  drinkProductElm.appendChild(drinkCupElm);

  const imgElm = document.createElement('img');
  imgElm.src = `/assets/cups/${props.id}.png`;
  drinkCupElm.appendChild(imgElm);

  const drinkInfoElm = document.createElement('div');
  drinkInfoElm.classList.add('drink__info');
  root.appendChild(drinkInfoElm);

  const nameElm = document.createElement('h3');
  nameElm.textContent = `${props.name}`;
  drinkInfoElm.appendChild(nameElm);

  const layerContainerElm = document.createElement('div');
  layerContainerElm.classList.add('layer-container');
  drinkInfoElm.appendChild(layerContainerElm);

  props.layers.forEach((item) => {
    layerContainerElm.innerHTML += Layer(item);
  });

  const btnDivElm = document.createElement('div');
  btnDivElm.classList.add('drink__controls');
  root.appendChild(btnDivElm);

  const buttonElm = document.createElement('button');
  buttonElm.classList.add('order-btn');
  buttonElm.textContent = 'Objednat';
  btnDivElm.appendChild(buttonElm);

  //objednání
  let ordered;
  buttonElm.addEventListener('click', () => {
    drinkCupElm.classList.toggle('drink__cup--selected');
    if (props.ordered === false) {
      buttonElm.textContent = 'Zrušit';
      ordered = true;
    } else {
      buttonElm.textContent = 'Objednat';
      props.ordered = false;
    }
  });

  return root;
};
