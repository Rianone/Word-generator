const button = document.querySelector(".btn");
const word = document.querySelector('.generted-word');
const animation_array = ["spin", "grow", "changeColor1", "changeColor2", "changeColor3", "changeColor4"]

function random(number) {
    return Math.floor(Math.random() * number)
}

button.addEventListener("click", () => {
    fetch("./data.json").then((res) => res.json()).then((res) => {
        let word1 = res[random(178190)];
        let word2 = res[random(178190)];

        word.style.animation = animation_array[random(6)] + " 1s alternate ease-in-out";
        word.style.transition = "animation 1s ease-in";
        word.innerHTML = word1 + " " + word2;

    }).catch((err) => {
        console.log(err)
    })


});