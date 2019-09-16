let totalArrayLength = 16;
let prevClickedCard;
let matchedColorsCount;

// An array of one set of colors, two sets will be needed for the game;
// the length of the array depends on the value of the totalArrayLength variable.
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

//An array with the total number of colors used in the game
const allColors = [...colors, ...colors];

//Function which randomly position items on the page
function shuffle(array) {
  array.sort(function() {
    return Math.random() - 0.5;
  });
}

//Call the function that itiniates the game
buildGame();

//Function that itiniates the game:
//a card is created for each color from the allColors array, the cards are positioned randomly, and the number of the cards which colors matched is (re)set to 0.
function buildGame() {
  allColors.forEach(color => createCard(color));
  shuffle(allColors);
  matchedColorsCount = 0;
}

//Function that creates a card.
//When the card is clicked, the clickCard function that flips the card and shows the user its background-color is called.
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

//Function that clicks a card and compares its color with previously clicked card (if any)
function clickCard(clickEvent) {
  const currentClickedCard = clickEvent.currentTarget; //the card a user just clicked is assigned to a variable currentClickedCard
  currentClickedCard.classList.add('flipped');

  //if no card was clicked before the current one, then prevClickedCard is assigned the value of the currently clicked card
  if (!prevClickedCard) {
    prevClickedCard = currentClickedCard;

    //if there was a card clicked before, check if the colors (data attributes) of both the previously and currently clicked cards match
  } else {
    const cardsMatch =
      prevClickedCard.getAttribute('data-color') ===
      currentClickedCard.getAttribute('data-color');

    //if colors do not match, flip both cards back after 800ms
    if (!cardsMatch) {
      setTimeout(function() {
        currentClickedCard.classList.remove('flipped');
        prevClickedCard.classList.remove('flipped');
      }, 800);

      //if colors do match, do not flip them back,
      //and increase the total number of matched colors by two, then check if it is the same as the total number of the cards
    } else {
      matchedColorsCount++;
      //if yes - all the cards flip back, then they are removed from the page, and the game starts again.
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
    //No matter if the colors match or not, after the color comparison is done,
    //the previosuly clicked card is set to null after 800ms, so the next round will start with (!prevClickedCard)
    setTimeout(function() {
      prevClickedCard = null;
    }, 800);
  }
}
