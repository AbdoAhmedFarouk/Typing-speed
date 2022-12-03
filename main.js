let words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];
let lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};
let defaultLvlName = "Normal";
let defaultLvlSeconds = lvls[defaultLvlName];

let startBtn = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upComingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMsg = document.querySelector(".finish");

scoreTotal.innerHTML = words.length;
timeLeftSpan.innerHTML = defaultLvlSeconds;
lvlNameSpan.innerHTML = defaultLvlName;
secondsSpan.innerHTML = defaultLvlSeconds;

input.onpaste = function () {
  return false;
};

startBtn.onclick = function () {
  input.focus();

  this.remove();
  genWords();
};

function genWords() {
  upComingWords.innerHTML = "";

  let random = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(random);
  words.splice(wordIndex, 1);
  theWord.innerHTML = random;

  for (let i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upComingWords.appendChild(div);
  }
  startPlaying();
}
function startPlaying() {
  resetTime();
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      if (input.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;
        if (words.length > 0) {
          genWords();
        } else {
          youWon();
        }
      } else {
        youLost();
      }
    }
  }, 1000);
}
function youWon() {
  let span = document.createElement("span");
  span.className = "good";
  let spanTxt = document.createTextNode("Congratulations");
  span.appendChild(spanTxt);
  finishMsg.appendChild(span);
  upComingWords.remove();
}
function youLost() {
  let span = document.createElement("span");
  span.className = "bad";
  let spanTxt = document.createTextNode("Game Over");
  span.appendChild(spanTxt);
  finishMsg.appendChild(span);
}
function resetTime() {
  timeLeftSpan.innerHTML = defaultLvlSeconds;
}
