const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomElem(arr, num=1) {
    if (num === 1) {
        return arr[Math.floor(Math.random() * arr.length)];
    } else if (num <= 0) {
        return null;
    } else {
        let elems = [];
        for (i=0; i < num; i++) {
            elems.push(arr[Math.floor(Math.random() * arr.length)])
        }
        return elems;
    }
}

let inputColor = document.querySelector('input#color');
let subButton = document.querySelector('input#sub');
let randomColorButton = document.querySelector('input#randomColor');
let divP = document.querySelector('div>p')

subButton.addEventListener('click', changeBackground);
randomColorButton.addEventListener('click', changeBackgroundAuto);

function changeBackground() {
    document.body.style.background = inputColor.value;
    divP.innerText = inputColor.value;
}

function changeBackgroundAuto() {
    let hexColor = '#' + getRandomElem(hexChars, num=6).join('');
    divP.innerText = hexColor;
    document.body.style.background = hexColor;
}

