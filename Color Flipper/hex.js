const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const BTN = document.getElementById("btn");
const COLOR = document.querySelector(".color");

BTN.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += HEX[Math.floor(Math.random() * HEX.length)];
  }
  COLOR.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
