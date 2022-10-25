const txtInput = document.querySelector(".inputs input"),
  checkBtn = document.querySelector(".inputs button"),
  infoTxt = document.querySelector(".info_txt");
let filterInput;

checkBtn.addEventListener("click", () => {
  //! splitting input char, reversing them and join
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is not a Palindrome`);
  }
  infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a Palindrome`;
});

txtInput.addEventListener("keyup", () => {
  //! removing spaces and all special charac when entered
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
});
