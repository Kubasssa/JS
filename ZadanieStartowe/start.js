const bt1 = document.querySelector('.bigger');
const bt2 = document.querySelector('.smaller');
const tx = document.querySelector('p');
let fs = 16;

function powieksz() {
    fs++;
    tx.style.fontSize = fs + 'px';
}

function pomniejsz() {
    fs--;
    tx.style.fontSize = fs + 'px';
}

bt1.addEventListener('click', powieksz);
bt2.addEventListener('click', pomniejsz);