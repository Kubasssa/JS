const sp = document.querySelector('span');
let counter = 1;

document.body.addEventListener('click', function () {
    sp.textContent = counter;
    counter++;
})