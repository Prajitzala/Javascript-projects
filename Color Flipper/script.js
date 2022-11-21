const COLORS = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "Black",
  "yellow",
  "purple",
  "Blue",
  "pink",
];
const BTN = document.getElementById("btn");
const COLOR = document.querySelector(".color");

BTN.addEventListener("click", () => {
  const RANDOM_NUMBER = Math.floor(Math.random() * COLORS.length);
  document.body.style.backgroundColor = COLORS[RANDOM_NUMBER];
  COLOR.textContent = COLORS[RANDOM_NUMBER];
});
