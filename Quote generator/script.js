const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector("button"),
  authorName = document.querySelector(".author .name"),
  soundBtn = document.querySelector(".sound"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter");

//! Random quote function
function randomQuote() {
  quoteBtn.innerHTML = "Loding Quote...";
  quoteBtn.classList.add("loading");
  //! Fetching random quote from API and parsing it into js object
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerHTML = "New Quote";
    });
}

soundBtn.addEventListener("click", () => {
  //! SpeechSynthesisUtterance is web speech synthes api a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${authorName.innerHTML}`
  );
  speechSynthesis.speak(utterance); //! speak method speechSynthesis specks the utterance
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerHTML);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
  window.open(tweetUrl, "_black");
});

quoteBtn.addEventListener("click", randomQuote);
