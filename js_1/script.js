const klik = document.querySelector(".klik");
const section = document.querySelector("section");
let iterator = 1;

klik.addEventListener("click", function () {

    if (iterator % 5 != 0) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.innerHTML = iterator;
        section.appendChild(newSquare);
    } else {
        let newCircle = document.createElement("div");
        newCircle.classList.add("circle");
        newCircle.innerHTML = iterator;
        section.appendChild(newCircle);
    }
    iterator++;
})