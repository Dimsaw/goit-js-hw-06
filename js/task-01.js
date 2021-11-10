const navItemEl = document.querySelectorAll("li.item");
console.log("Number of categories:", navItemEl.length);

const listOfItems = [];
navItemEl.forEach((rav) => {
  listOfItems.push(`
Category: ${rav.querySelector("h2").textContent}
Elements: ${rav.querySelectorAll("li").length}
`);
});
console.log(...listOfItems);
