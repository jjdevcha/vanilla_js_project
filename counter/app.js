let decBtn = document.querySelector('.decrease');
let resetBtn = document.querySelector('.reset');
let incBtn = document.querySelector('.increase');

let countNum = document.querySelector('.counter-number');

resetBtn.addEventListener('click', () => {
    countNum.innerHTML = 0;
    countNum.style.color = 'black';
});

decBtn.addEventListener('click', () => {
    countNum.innerHTML = parseInt(countNum.innerHTML) - 1;
    countNum.style.color = 'red';
});

incBtn.addEventListener('click', () => {
    countNum.innerHTML = parseInt(countNum.innerHTML) + 1;
    countNum.style.color = 'green';
});