

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let sizes = 30;

create.addEventListener('click', createClick);
destroy.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  box.innerHTML = '';
  sizes = 30;
}

function createClick() {
  if (input.value < 1 || input.value > 100) {
    console.log('error');
    return;
  }

  createBoxes(input.value);
}

function createBoxes(amount) {
  input.value = '';
  box.innerHTML = '';
  sizes = 30;

  for (let index = 0; index < amount; index++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor(); 
    box.append(myBox);
    console.log(myBox);

    sizes += 10;
  }
}