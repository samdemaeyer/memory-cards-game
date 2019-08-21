const colors = [ "green", "blue", "pink", "purple", "teal", "red", "yellow", "orange"];

colors.forEach(c => createElement(c));
function createElement(c) {
  for ( let i = 0; i < 2; i++ ) {
    let card = document.createElement('div');
    card.classList.add('card', `background-${c}`);
    let container = document.querySelector('.container');
    container.appendChild(card);
  }
}