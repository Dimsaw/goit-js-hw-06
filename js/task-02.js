const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allVegetables = document.querySelector("ul");
const elements = ingredients.map((option) => {
  const titleEl = document.createElement("li");
  titleEl.classList.add("item");
  titleEl.textContent = option;

  return titleEl;
});

console.log(elements);
allVegetables.append(...elements);
