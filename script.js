/* Quote Generator 

const quotes = [
  "He who has a why to live can bear almost any how.",
  "That which does not kill us makes us stronger.",
  "In heaven, all the interesting people are missing.",
  "The man of knowledge must be able not only to love his enemies but also to hate his friends.",
  "The individual has always had to struggle to keep from being overwhelmed by the tribe.",
  "There are no facts, only interpretations.",
  "Man is the cruelest animal.",
  "You must have chaos within you to give birth to a dancing star.",
  "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.",
  "Sometimes people don’t want to hear the truth because they don’t want their illusions destroyed."
];

const generateQuote = document.querySelector("#get-quote");
const quoteContainer = document.querySelector(".quote");

function renderUi(quote) {
  quoteContainer.textContent = quote;
}

function getRandomQuote() {
  let index = Math.floor(Math.random()* quotes.length)
  renderUi(quotes[index]);
}

generateQuote.onclick = getRandomQuote

*/
/* Stopwatch with start/stop/reset (closure tracks time). 



const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const stopwatchTime = document.querySelector('h1#time');

const stopwatch = (function () {
  let stopwatchId = null;
  let currentTime = 0;

  function renderTime (value) {
    stopwatchTime.textContent = value;
  }

  return {
    start(){
      if (stopwatchId !== null) return;
    
      renderTime(currentTime);
      startButton.disabled = true;
      stopButton.disabled = false;

      stopwatchId = setInterval(() => {
        currentTime += 1;
        renderTime(currentTime);
    }, 1000);
    },
    stop(){
      if (stopwatchId !== null){
        clearInterval(stopwatchId);
        stopwatchId = null;
        stopButton.disabled = true;
        startButton.disabled = false;
      }
    },
    reset(){
      clearInterval(stopwatchId);
      currentTime = 0;
      stopwatchId = null;
      renderTime(currentTime);
      stopButton.disabled = false;
      startButton.disabled = false;
    }
  }

})();

startButton.onclick = stopwatch.start;
stopButton.onclick = stopwatch.stop;
resetButton.onclick = stopwatch.reset;
*/

/* Countdown Timer 
const START_FROM = 10;
const clock = document.querySelector('.time h1');
const startTimer = document.querySelector('#start-time');


let timerId = null; 
let current = START_FROM;


function render(value) {
  clock.textContent = String(value);
}


function clearTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}


function startCountdown() {
  if (timerId !== null) return; 

  current = START_FROM;
  render(current);
  startTimer.disabled = true;


  timerId = setInterval(() => {
    current -= 1;
    render(current);
    console.log(timerId)
      if (current <= 0) {
        clearTimer();
        startTimer.disabled = false;
      }
    }, 1000);
}

startTimer.addEventListener('click', startCountdown);
*/
/* Guess the number game 
const submitButton = document.querySelector('#submit-guess');
const guess = document.querySelector('#number-guess');
const responseP = document.querySelector('.result');

function onSubmit(){
  const guessInput = Number(guess.value.trim());
  const randomNum = Math.floor(Math.random() * 10) + 1;
  
  if (guessInput < 1 || guessInput > 10) {
    responseP.textContent = 'Please enter a value between 1 and 10';
  } else if (guessInput === randomNum) {
    responseP.textContent = `Congrats, you win! The number was ${randomNum}`
  } else {
    responseP.textContent = `You lose, the number was ${randomNum}.`
  }
  guess.value = '';
}


document.addEventListener('DOMContentLoaded', () => {
  if (!submitButton){
    return;
  } else {
    submitButton.addEventListener('click', onSubmit);
  }
});

*/
/* JS for my to-do list 
const input = document.querySelector("#list-input");
const button = document.querySelector("#submit");
const toDoList = document.querySelector("#to-do-list");

function addLineThrough(el){
  el.style.textDecoration = 
    el.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}

document.addEventListener('DOMContentLoaded', () => {
  if (!button){
    return;
  } else {
    button.addEventListener("click", () => {
      const text = input.value.trim();
      if (text){
        const item = document.createElement("li");
        item.textContent = text;

        item.addEventListener("click", () => addLineThrough(item));

        toDoList.appendChild(item);
        input.value = '';
      };
    });
  };
});
*/
/* JS for my moving red dot
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
 */
/* Practicing nest scope 

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
*/

/*

// Reverse String
const string = "tyler"
const palindrome = "kayak"

function reverseString(s){
  return s.split("").reverse().join("");
}

// Check Palindrome
function checkPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseS = reverseString(clean);

  return reverseS === clean;
};

//if (checkPalindrome("Race car")) {
//  console.log("Palindrome!");
//} else {
//  console.log("Not a palindrome.");
//};

// Flatten Array

const flattenDeepReduce = (arr) =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenDeepReduce(val) : val),
    []
  );

// Find Highest Value
let array = [1,2,31,25,55,2,3,14,100]

function getHighest(arr) {
  return arr.reduce((max, val) => (val > max ? val : max), arr[0]);
}
*/

const users = [
  {
    email: 'tyler.n.nicholson@gmail.com',
    password: '20_Five!'
  },
  {
    email: 'lcpolce@gmail.com',
    password: 'pineapple20'
  }
]

function verifyUser(email, password) {
  const user = users.find(u => u.email === email && u.password === password);
  return user ? true : false;
}

function handleSubmit(event) {
  event.preventDefault();
  const userEmail = document.querySelector('input#email').value;
  const userPassword = document.querySelector('input#password').value;

  console.log(verifyUser(userEmail, userPassword));

}

class User {
  age
  profileImage
  constructor(name, email){
    this.name = name;
    this.email = email;
  }

  renderUserInfo = () => {
    
  }

  toggleProfileCard = () => {
    const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hidden');

    const close = overlay.querySelector('.close-modal');
    close.addEventListener('click', () => {
      overlay.classList.add('hidden');
    })
  }
}

const tyler = new User('Tyler', 'tyler.n.nicholson@gmail.com');
tyler.age = 30;
tyler.profileImage = 'assets/profile_pic.jpeg';

const profilePic = document.querySelector('#profile-img')

profilePic.addEventListener('click', tyler.toggleProfileCard);