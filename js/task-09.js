const refs = {
  changeColorButton: document.querySelector(".change-color"),
  nameChangeColor: document.querySelector(".color"),
};

refs.changeColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  console.log("here");

  const color = getRandomHexColor();
  document.body.style.background = color;
  refs.nameChangeColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
