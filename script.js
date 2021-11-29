const colorInput = document.querySelector("input#color");
const randomColorBtn = document.querySelector("input#random-color");
const spanColorCode = document.querySelector("span#color-code");

const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomElem(arr, num = 1) {
  if (num === 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  } else if (num <= 0) {
    return null;
  } else {
    let elems = [];
    for (i = 0; i < num; i++) {
      elems.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return elems;
  }
}

randomColorBtn.addEventListener("click", () => {
  colorInput.value = "#" + getRandomElem(hexChars, 6).join("");
  updateBgColor();
});

colorInput.addEventListener("change", updateBgColor);

function updateBgColor() {
  document.body.style.background = spanColorCode.innerText =
    colorInput.value.toUpperCase();
}
