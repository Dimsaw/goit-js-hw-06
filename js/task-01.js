const navItemEl = document.querySelectorAll("li.item");
console.log("Number of categories:", navItemEl.length);

const navLinkEl = document.querySelectorAll("h2");

console.log("Category:", navLinkEl[0].textContent);
const manFgh = navItemEl[0].querySelector("ul");
console.log("Elements:", manFgh.children.length);

console.log("Category:", navLinkEl[1].textContent);
const maneFgh = navItemEl[1].querySelector("ul");
console.log("Elements:", maneFgh.children.length);

console.log("Category:", navLinkEl[2].textContent);
const manqFgh = navItemEl[2].querySelector("ul");
console.log("Elements:", manqFgh.children.length);
