const refs = {
  input: document.querySelector("#name-input"),
  change: document.querySelector("span#name-output"),
};

refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("input", onInputChange);

function onInputFocus() {
  console.log("im here");
}

function onInputChange(event) {
  if (!event.target.value) {
    refs.change.textContent = "Anonymous";
    return;
  }

  refs.change.textContent = event.currentTarget.value;
}
