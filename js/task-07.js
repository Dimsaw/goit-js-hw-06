const inputValue = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputValue.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
