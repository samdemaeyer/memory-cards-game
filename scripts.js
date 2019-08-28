const colors = [
  "green",
  "blue",
  "pink",
  "purple",
  "teal",
  "red",
  "yellow",
  "orange"
];

colors.forEach(color => createElement(color));

function createElement(color) {
  for (let i = 0; i < 2; i++) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");
    const flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    const flipCardFront = document.createElement("div");
    flipCardFront.classList.add("flip-card-front", `background-${color}`);
    const flipCardBack = document.createElement("div");
    flipCardBack.classList.add("flip-card-back");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Memory Game";
    flipCardBack.appendChild(title);
    flipCardInner.appendChild(flipCardBack);
    flipCardInner.appendChild(flipCardFront);
    flipCard.appendChild(flipCardInner);
    const container = document.querySelector(".container");
    container.appendChild(flipCard);
  }
}
