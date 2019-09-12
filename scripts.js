const totalArrayLength = 6;
let prevClickedCard;
let matchedColorsCount;

const colors = [
  'green',
  'blue',
  'pink',
  'purple',
  'teal',
  'red',
  'yellow',
  'orange'
].slice(0, totalArrayLength / 2);

const allColors = [...colors, ...colors];

function shuffle(array) {
  array.sort(function() {
    return Math.random() - 0.5;
  });
}

buildGame();

function buildGame() {
  allColors.forEach(color => createCard(color));
  shuffle(allColors);
  matchedColorsCount = 0;
}

function createCard(color) {
  const flipCard = document.createElement('div');
  flipCard.classList.add('flip-card');
  flipCard.setAttribute('data-color', color);
  flipCard.addEventListener('click', clickCard);
  const flipCardInner = document.createElement('div');
  flipCardInner.classList.add('flip-card-inner');
  const flipCardFront = document.createElement('div');
  flipCardFront.classList.add('flip-card-front', `background-${color}`);
  const flipCardBack = document.createElement('div');
  flipCardBack.classList.add('flip-card-back');
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Memory Game';
  flipCardBack.appendChild(title);
  flipCardInner.appendChild(flipCardBack);
  flipCardInner.appendChild(flipCardFront);
  flipCard.appendChild(flipCardInner);
  const container = document.querySelector('.container');
  container.appendChild(flipCard);
}

function clickCard(clickEvent) {
  const currentClickedCard = clickEvent.currentTarget;
  currentClickedCard.classList.add('flipped');

  if (!prevClickedCard) {
    prevClickedCard = currentClickedCard;
  } else {
    const cardsMatch =
      prevClickedCard.getAttribute('data-color') ===
      currentClickedCard.getAttribute('data-color');
    if (!cardsMatch) {
      setTimeout(function() {
        currentClickedCard.classList.remove('flipped');
        prevClickedCard.classList.remove('flipped');
      }, 800);
    } else {
      matchedColorsCount++;
      if (matchedColorsCount === totalArrayLength / 2) {
        setTimeout(function() {
          document.querySelectorAll('.flip-card').forEach(function(card) {
            card.classList.remove('flipped');
          });
          setTimeout(function() {
            document.querySelector('.container').innerHTML = '';
            buildGame();
          }, 800);
        }, 2000);
      }
    }
    setTimeout(function() {
      prevClickedCard = null;
    }, 800);
  }
}
