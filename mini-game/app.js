const board = document.querySelector('#board');
const SQUARES_NUMBER = 400;

const colors = ['#d2e2f9', '#7dc0f7', '#e5dee6', '#fbf9fa', '#a27577', '#e4c3be', '#cacddc', '#2b95c3', '#e1c0bb', '#f70c57', '#dcc8d2', '#556107', '#ae894b', '#d3b83a', '#f4027d', '#3a430c', '#7d7c03', '#fd075d', '#f9f2ef', '#6d5458', 'fefefe'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('container__item');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square);
};

function setColor(e) {
  const item = e.target;
  const color = getRandomColor();

  item.style.backgroundColor = color;
  item.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(e) {
  const item = e.target;

  item.style.backgroundColor = '#1d1d1d';
  item.style.boxShadow = '0 0 2px #000';
};

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
