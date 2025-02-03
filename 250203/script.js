const fruitItems = document.querySelector("#items");

const displayfruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  alert(`[${selectedText}] 선택했습니다.`);
};

fruitItems.addEventListener("change", displayfruit);
