/* JS for my to-do list */
const input = document.querySelector("#list-input");
const button = document.querySelector("#submit");
const toDoList = document.querySelector("#to-do-list");

function addLineThrough(el){
  el.style.textDecoration = 'line-through';
}

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text){
    const item = document.createElement("li");
    item.textContent = text;

    item.addEventListener("click", () => addLineThrough(item));

    toDoList.appendChild(item);
    input.value = '';
  }
})

/* JS for my moving red dot */
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

