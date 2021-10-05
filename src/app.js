/* eslint-disable */
import "./style.css";

const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suites = [
  {
    name: "heart",
    symbol: "♥️"
  },
  {
    name: "diamond",
    symbol: "♦"
  },
  {
    name: "spade",
    symbol: "♠"
  },
  {
    name: "club",
    symbol: "♣"
  }
];
const getCard = () => {
  const randomValue = cardValue[Math.floor(Math.random() * cardValue.length)];
  const randomSuite = suites[Math.floor(Math.random() * suites.length)];
  const cardDiv = document.getElementById("card");

  suites.forEach(suite => {
    cardDiv.classList.remove(suite.name);
  });
  cardDiv.classList.add(randomSuite.name);
  document.getElementById("cardInfo").innerHTML = randomValue;

  const cardEmojis = document.getElementsByClassName("cardEmoji");
  const cardEmojiArray = [...cardEmojis];
  cardEmojiArray.forEach(el => (el.innerHTML = randomSuite.symbol));
};

const buttonElement = document.querySelector("input");
buttonElement.addEventListener("click", function() {
  getCard();
});

setInterval(getCard, [10000]);

window.onload = function() {
  getCard();
};
