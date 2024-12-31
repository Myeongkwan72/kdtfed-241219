const form = Document.querySelector("form");
const word = form.querySelector("#word");
const h1 = Document.querySelector("h1");

h1.style.color = "#02c13c";

form.addeventlistener("submit", (e) => {
  e.preventdefault();
  const uservalue = word.value;
  console.log(uservalue);
  alert(uservalue);
});
