const hexNum = ['0', '1', '2', '3', '4', '5','6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

console.log('this is working');

let colorDomain = document.querySelector('.color-display');
let changeBtn = document.querySelector('button');
let colorName = document.querySelector('.color-name');

changeBtn.addEventListener('click', () => {
    let color = `#${hexNum[getRandomInt(16)]}${hexNum[getRandomInt(16)]}${hexNum[getRandomInt(16)]}${hexNum[getRandomInt(16)]}${hexNum[getRandomInt(16)]}${hexNum[getRandomInt(16)]}`;
    colorDomain.style.backgroundColor = color;
    colorName.innerHTML = color;
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


