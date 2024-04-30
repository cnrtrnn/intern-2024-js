const ANIMALS = ["aslan", "fil", "kedi", "kopek", "ordek", "tavsan", "timsah", "zurafa"];
const ROW = 2;

function createBoard() {
  const grid = document.getElementById("grid");
  let gridCell = ROW * ROW;
  for (let i = 0; i < gridCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    grid.append(cell);
  }
}

function fillBoard() {
  const cells = document.querySelectorAll(".grid-cell")
  let pickedAnimals = chooseAnimals(); // fil ve aslan
  for (let index = 0; index < cells.length; index++) {
    const gridCell = cells[index];
    const pickIndex = rnd(0, pickedAnimals.length);
    const img = createImgDiv(pickedAnimals[pickIndex]);
    gridCell.append(img);
  }
}

function chooseAnimals(cellCount=ROW*ROW) {
  let animalCount = cellCount / 2; //2
  let tmpArr = [...ANIMALS];
  let pickedAnimals = [];
  for (let i = 0; i < animalCount; i++) {
    const pickIndex = rnd(0, tmpArr.length);
    pickedAnimals.push(tmpArr[pickIndex]);
    tmpArr.splice(pickIndex,1);
  }
  return pickedAnimals;
}

function createImgDiv(imageName) {
  const img = document.createElement("img");
  img.setAttribute("src", `assets/img/${imageName}.png`);
  return img;
}

function rnd(min=0, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


createBoard();
fillBoard();