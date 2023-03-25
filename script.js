const button = document.querySelector(".btn");
const word = document.querySelector('.generted-word');

button.addEventListener("click", () => {

    fetch("https://random-word-api.herokuapp.com/word").then((res) => {
        console.log(res)
    })

    // word.innerHTML = "Hello"
    // word.style.animation = "spin 1s alternate ease-in-out";
    // word.style.transition = "animation 1s ease-in";
    // word.style.animation = "grow 1s alternate ease-in-out";

});