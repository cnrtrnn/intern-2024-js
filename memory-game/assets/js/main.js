const ANIMALS = ["aslan", "fil", "kedi", "kopek", "ordek", "tavsan", "timsah", "zurafa"];
const ROW = 4;
const GAME_STATUSES = {
  "idle": 0,
  "start": 1,
  "reset": 2
};
let gameStatus = GAME_STATUSES.idle;


const timeEl = document.getElementById("game_actions_time");
const grid = document.getElementById("grid");

let choosenCards = []

function createBoard() {
  let gridCell = ROW * ROW;
  for (let i = 0; i < gridCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.addEventListener("click", flipCard);
    grid.append(cell);
  }
}

function fillBoard() {
  const cells = document.querySelectorAll(".grid-cell")
  let pickedAnimals = chooseAnimals(); // fil ve aslan
  pickedAnimals = pickedAnimals.concat(pickedAnimals); // 2 fil ve 2 aslan
  pickedAnimals.sort(() => 0.5 - Math.random());
  for (let index = 0; index < cells.length; index++) {
    const gridCell = cells[index];
    const pickAnimal = pickedAnimals[index];
    const img = createImgDiv(pickAnimal);
    gridCell.append(img);
  }
}

function chooseAnimals(cellCount = ROW * ROW) {
  let animalCount = cellCount / 2; //2
  let tmpArr = [...ANIMALS];
  let pickedAnimals = [];
  for (let i = 0; i < animalCount; i++) {
    const pickIndex = rnd(0, tmpArr.length - 1);
    pickedAnimals.push(tmpArr[pickIndex]);
    tmpArr.splice(pickIndex, 1);
  }
  return pickedAnimals;
}

function createImgDiv(imageName) {
  const img = document.createElement("img");
  img.setAttribute("src", `assets/img/${imageName}.png`);
  img.setAttribute("data-id", imageName);
  return img;
}

function rnd(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function flipCard() {
  if (gameStatus != GAME_STATUSES.start) {
    return;
  }
  let img = this.firstChild;
  let pick = img.getAttribute("data-id");
  this.classList.add("flipped")
  choosenCards.push(pick);
  if (choosenCards.length == 2) {
    checkMatch(pick);
  }
}

function clearBoard() {
  grid.innerHTML = "";
}

function prepareGame() {
  document.documentElement.style.setProperty("--repeat-count", ROW + "");
  clearBoard();
  resetTimer();
  createBoard();
  fillBoard();
}

function startTimer() {
  gameStatus = GAME_STATUSES.start;
  let remaining = 60;
  let interval = setInterval(() => {
    remaining -= 1;
    timeEl.innerText = `00:${remaining}`;
    if (!remaining) {
      clearInterval(interval);
      alert("Zaman Doldu!");
    }
  }, 1000);
}

function resetTimer() {
  timeEl.innerHTML = "01:00";
}

function startGame() {
  switch (gameStatus) {
    case GAME_STATUSES.idle:
      startTimer();
      break;
    case GAME_STATUSES.start:
      startTimer();
      break;
    case GAME_STATUSES.reset:
      resetTimer();
      prepareGame();
      break;

    default:
      break;
  }

}

function removeFlippedCards() {
  const cards = document.querySelectorAll(".flipped:not(.won)");
  cards.forEach(function (item) {
    item.classList.remove("flipped");
  });
}

function addWonCard() {
  const cards = document.querySelectorAll(".flipped");
  cards.forEach((item) => item.classList.add("won"));
}

function checkMatch(lastPick) {
  console.log(choosenCards);

  if (choosenCards.every(x => x == choosenCards[0])) {
    addWonCard();
  } else {
    setTimeout(removeFlippedCards, 500);
  }

  // if (lastPick == choosenCards[0]) {

  // }
  choosenCards = [];
}

prepareGame();