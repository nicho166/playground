const container = document.querySelector('.visual-container');
const dot = document.querySelector('#dot');
const step = '5px';

const keys = {
    ArrowUp: 'false',
    ArrowDown: 'false',
    ArrowLeft: 'false',
    ArrowRight: 'false'
};

window.addEventListener('keydown', (event) => {
  if (keys.hasOwnProperty(event.key)){
    keys[event.key] = 'true';
    moveDot(event);
  }
});

window.addEventListener('keyup', (event) => {
  if (keys.hasOwnProperty(event.key)){
    keys[event.key] = 'false'
  }
});

function moveDot(event){
  if (event.key === 'ArrowUp'){
    dot.style.top = '0px';
  } else if (event.key === 'ArrowDown'){
    dot.style.top = `100px`;
  }
}