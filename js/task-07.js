const refs = {
  inputValue: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
refs.inputValue.addEventListener("input", changeFontSize);
function changeFontSize(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
}
