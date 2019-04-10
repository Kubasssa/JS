const bt = document.querySelector("button");
const list = document.querySelector("ul");
let iterator = 1;

bt.addEventListener("click", function () {
    const listElement = document.createElement("li");
    listElement.textContent = iterator;

    if (iterator % 3 == 0) {
        listElement.classList.add("big");
    }

    list.appendChild(listElement);

    iterator += 2;
})