let size = 10;
let orderElement = 1;
let btn;
let list;

const init = () => {
    btn = document.createElement("button");
    list = document.createElement("ul");

    btn.style.height = "40px";
    btn.style.width = "200px";
    btn.textContent = "Dodaj";

    document.body.appendChild(btn);
    document.body.appendChild(list);
}


const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = "Element nr " + (orderElement++);
        liElement.style.fontSize = size + i + "px";
        list.appendChild(liElement);
    }
    size += 10;
}

init();

btn.addEventListener("click", () => {
    createLiElements();
})