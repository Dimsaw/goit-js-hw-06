const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};
let valueOfSpan = document.querySelector("#value");

let counterValue = 0;

refs.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueOfSpan.textContent = counterValue;
  console.log(valueOfSpan);
});

refs.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueOfSpan.textContent = counterValue;
  console.log(valueOfSpan);
});
