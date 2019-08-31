const colors = [
  'green',
  'blue',
  'pink',
  'purple',
  'teal',
  'red',
  'yellow',
  'orange'
];

const allColors = [...colors, ...colors];

function shuffle(array) {
  array.sort(function() {
    return Math.random() - 0.5;
  });
}

shuffle(allColors);

allColors.forEach(color => createElement(color));

function createElement(color) {
  const flipCard = document.createElement('div');
  flipCard.classList.add('flip-card');
  flipCard.addEventListener('click', function(clickEvent) {
    clickEvent.currentTarget.classList.add('flipped');
  });
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
