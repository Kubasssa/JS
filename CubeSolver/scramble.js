const move = ["R", "R'", "L", "L'", "U", "U'", "D", "D'", "F", "F'", "B", "B'"];
let scramble = "";
let randomIterator;
let ifSame = 0;

const section = document.querySelector("section");

function generateScramble() {
    scramble = "";
    for (let i = 0; i < 20; i++) {
        randomIterator = Math.floor((Math.random() * 12));
        if (ifSame == randomIterator) {
            randomIterator = Math.floor((Math.random() * 12));
        }
        ifSame = randomIterator;
        scramble += move[randomIterator] + " ";
    }
    let tmpScrambleSpan = document.createElement("span"); // tworzy spana
    let tmpScramble = document.createTextNode(scramble); //tworzy text z czasu
    tmpScrambleSpan.appendChild(tmpScramble); //wkłada do spana text
    section.appendChild(tmpScrambleSpan); // wkłada do klasy .times spana
    tmpScrambleSpan.classList.add("src");
}

generateScramble();

function resetScramble() {
    const scrambleShow = document.querySelector(".src");
    scrambleShow.parentNode.removeChild(scrambleShow);
}