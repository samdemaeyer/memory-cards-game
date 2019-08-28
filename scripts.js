const colors = [ 'green', 'blue', 'pink', 'purple', 'teal', 'red', 'yellow', 'orange'];

colors.forEach(c => createElement(c));

function createElement(c) {
  for ( let i = 0; i < 2; i++ ) {
    const card = document.createElement('div');
    card.classList.add('card', 'card-backside-color');
    const container = document.querySelector('.container');
    container.appendChild(card);
  }
}
