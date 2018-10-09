const times = document.querySelector(".times");
const display = document.querySelector(".display");
let seconds = 0;
let miliSeconds = 0;
let minutes = 0;

let displayMiliSeconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;

let status = "stopped";

let timesTable = [];



let i = 1; //dziłanie spacji
let k = 0; //iterator tablicy do zapisywania czasów
let numberOfTimes = 0; //ilosc wszystkich czasów

function timer() {
    miliSeconds++;

    if (miliSeconds / 100 == 1) {
        miliSeconds = 0;
        seconds++;


        if (seconds / 60 == 1) {
            seconds = 0;
            minutes++;
        }
    }

    if (miliSeconds < 10) {
        displayMiliSeconds = "0" + miliSeconds.toString();

    } else {
        displayMiliSeconds = miliSeconds;
    }

    if (seconds < 10) {
        displaySeconds = "" + seconds.toString() + ".";

    } else {
        displaySeconds = seconds + ".";
    }


    if (minutes < 10 && minutes > 0) {
        displayMinutes = "" + minutes.toString() + ":"

    } else if (minutes == 0) {
        displayMinutes = "";
    } else {
        displayMinutes = minutes + ':';
    }


    document.querySelector(".display").innerHTML = displayMinutes + displaySeconds + displayMiliSeconds;
}

function saveTime() {
    timesTable[k] = displayMinutes + displaySeconds + displayMiliSeconds + ",  ";
    let tmpSpan = document.createElement("span"); // tworzy spana
    let tmpTime = document.createTextNode(timesTable[k]); //tworzy text z czasu
    tmpSpan.appendChild(tmpTime); //wkłada do spana text
    tmpSpan.className = "delete";
    times.appendChild(tmpSpan); // wkłada do klasy .times spana
    numberOfTimes++;
    k++;
}


function start() {
    if (status = "stopped") {
        reset();
        interval = window.setInterval(timer, 10);
        status = "started";
        i = 2;
    }
}

function stop() {
    i = 3;
    if (status = "started") {
        window.clearInterval(interval); //stopping interval
        status = "stopped";
        resetScramble();
        generateScramble();
        display.style.color = "black";

    }
}

function reset() {
    i = 1;
    miliSeconds = 0;
    seconds = 0;
    minutes = 0;
    document.querySelector(".display").innerHTML = "00:00";
}



window.addEventListener("keyup", function (e) { //start czas
    if (e.keyCode == "32" && i == 1) start();
});

window.addEventListener("keydown", function (e) {
    display.style.color = "gold";
    if (e.keyCode == "32" && i == 2) stop(), saveTime(); //stop czas
});

window.addEventListener("keyup", function (e) { //zmiana i
    if (e.keyCode == "32" && i == 3) i = 1;
});

window.addEventListener("keyup", function (e) {
    if (e.keyCode == "27") stop(), reset();
});



// if (k > 0) {
//     const deleteTime = document.querySelector(".delete");
//     deleteTime.addEventListener("click", function () {
//         times.style.backgroundColor = "red";
//     });
// }