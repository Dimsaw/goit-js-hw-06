const ref = {
  input: document.querySelector("#validation-input"),
  invalid: document.querySelector("#validation-input.invalid"),
};

ref.input.addEventListener("focus", onInputFocus);
ref.input.addEventListener("blur", onInputBlur);

function onInputFocus() {
  console.log("here");
}

function onInputBlur(event) {
  if (event.currentTarget.value.length < "6") {
    ref.input.style.borderColor = "#f44336";
    return;
  }

  ref.input.style.borderColor = "#4caf50";
}
