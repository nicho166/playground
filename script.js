/* Practicing nest scope */

function varScoping() {
  var x = 1;
  if (true) {
    var x = 2; // Modifies the same 'x' variable
    console.log(x); // Output: 2
  }
  console.log(x); // Output: 2 (because var is function-scoped)
}

function letScoping() {
  let x = 1;
  if (true) {
    let x = 2; // Creates a new 'x' variable within the if block
    console.log(x); // Output: 2
  }
  console.log(x); // Output: 1 (the original 'x' variable)
}

varScoping();
letScoping();


/* JS for my to-do list */
const input = document.querySelector("#list-input");
const button = document.querySelector("#submit");
const toDoList = document.querySelector("#to-do-list");

function addLineThrough(el){
  el.style.textDecoration = 
    el.style.textDecoration === 'line-through' ? 'none' : 'line-through';
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
const step = 5;

let topPos = 0;
let leftPos = 0;

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

window.addEventListener('keydown', (event) => {
  if (keys.hasOwnProperty(event.key)){
    keys[event.key] = true;
    moveDot(event);
  }
});

window.addEventListener('keyup', (event) => {
  if (keys.hasOwnProperty(event.key)){
    keys[event.key] = false
  }
});

function moveDot(event){
  if (event.key === 'ArrowUp'){
    topPos -= step;
  } else if (event.key === 'ArrowDown'){
    topPos += step;
  } else if (event.key === 'ArrowLeft') {
    leftPos -= step;
  } else if (event.key === 'ArrowRight') {
    leftPos += step;
  }

  dot.style.top = `${topPos}px`
  dot.style.left = `${leftPos}px`
}

