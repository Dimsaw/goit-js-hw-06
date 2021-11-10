const ref = {
  input: document.querySelector("input#validation-input"),
};

ref.input.addEventListener("focus", onInputFocus);
ref.input.addEventListener("blur", onInputBlur);

function onInputFocus() {
  console.log("here");
}

function onInputBlur(event) {
  if (event.currentTarget.value.length == ref.input.dataset.length) {
    ref.input.classList.remove("invalid");
    ref.input.classList.add("valid");

    return;
  }
  ref.input.classList.remove("valid");
  ref.input.classList.add("invalid");
}
