const gameTableSize = 10;
const amountOfBlankSquares = 20;
const amountOfElements = gameTableSize * gameTableSize;

let tab = [];
let counterIterator = 0;
let points = 0;

$(".startBtn").click(function () {
    $(".gameWindow").css("display", "block");
    $(".clickCounter").css("display", "block");
})

$("header").html("Układanka");

for (let i = 0; i < amountOfBlankSquares; i++) {
    tab.push(Math.floor((Math.random() * amountOfElements) + 1));
}

for (let i = 0; i < amountOfElements; i++) {
    if (tab.includes(i)) {
        $(".gameWindow").append("<div class='blankSquare sq'></div>");
    } else {
        $(".gameWindow").append("<div class='square sq'></div>");
    }
}

$(".blankSquare").css("background-color", "rgb(46, 184, 184)");

const $square = $(".square");

$square.click(function () {
    $(this).css("background-color", "#2eb8b8");
    counterIterator++;
    $(".iterator").html(counterIterator);
    selectNeighbor($(".sq").index($(this)));

    let flag = true;
    for (let i = 0; i < amountOfElements; i++) {
        if ($(".gameWindow").children().eq(i).css("background-color") != "rgb(46, 184, 184)") {
            flag = false;
        }
    }
    if (flag) {
        $("header").html("Układanka: Wygrana!");
    }
});

function coordinates(index) {
    let y = Math.floor(index / gameTableSize);
    let x = index % gameTableSize;
    return [x, y];
}


function selectNeighbor(index) {
    let a = coordinates(index);
    neighbor(coordinates(index));
}

function neighbor(coor) {
    for (let i = coor[0] - 1; i < coor[0] + 2; i += 2) {
        $(".gameWindow").children().eq(findWall(i) + coor[1] * gameTableSize).css("background-color", "#2eb8b8");
    }
    for (let i = coor[1] - 1; i < coor[1] + 2; i += 2) {
        $(".gameWindow").children().eq(coor[0] + findWall(i) * gameTableSize).css("background-color", "#2eb8b8");
    }
}

function findWall(c) {
    if (c > gameTableSize - 1) {
        return c - 1;
    }
    if (c < 0) {
        return 0;
    }
    return c;
}