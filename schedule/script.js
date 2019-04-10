const btn = document.querySelector('.gobutton');
const btn2 = document.querySelector('.back');
const side = document.querySelector('.main');


btn.addEventListener('click', function () {
    side.style.zIndex = 1;
})


btn2.addEventListener('click', function () {
    side.style.zIndex = -1;
})