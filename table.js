let clickTimeout;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColToRandom() {
  const cell = document.getElementById("variant");
  cell.style.backgroundColor = getRandomColor();
}

function changeColToSelected() {
  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.style.display = "none";

  document.body.appendChild(colorPicker);

  colorPicker.click();

  colorPicker.addEventListener("input", () => {
    const cell = document.getElementById("variant");
    cell.style.backgroundColor = colorPicker.value;
    document.body.removeChild(colorPicker);
  });
}

function changeRowColors(event) {
  const cell = event.target;
  const row = cell.parentElement;
  const cells = Array.from(row.children);

  let startIndex = cells.indexOf(cell);
  for (let i = startIndex; i < cells.length; i += 2) {
    cells[i].style.backgroundColor = getRandomColor();
  }
}

const cell = document.getElementById("variant");

cell.addEventListener("click", () => {
  clearTimeout(clickTimeout);
  clickTimeout = setTimeout(() => {
    changeColToSelected();
  }, 250);
});

cell.addEventListener("dblclick", (event) => {
  clearTimeout(clickTimeout);
  changeRowColors(event);
});
