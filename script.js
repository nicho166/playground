function changeColor(color){
    const heading = document.getElementById("header");
    console.log(heading);
    heading.textContent = "Haha, this works!"
}

const name = document.querySelector("#first_name")
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting")

greetMeButton.addEventListener("click", (event) => {
    greetingOutput.innerHTML = `Hello ${name.value}`;
})