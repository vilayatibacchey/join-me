const scaryButtons = document.querySelectorAll(".scary-button");
const scaryText = document.querySelectorAll("h1")

scaryButtons.addEventListener("click", () => {
    scaryButtons.classList.contains("scary") ? scaryButtons.classList.remove("scary") : scaryButtons.classList.add("scary");
    if (scaryButtons.classList.contains("scary")) {
        scaryButtons.innerHTML = "Boo!"
        scaryText.style.fontSize = "clamp(25px, 5vw, 100px);"
    } else {
        scaryButtons.innerHTML = "Click me again!";
        scaryText.style.fontSize = "clamp(25px, 5vw, 100px);"
    }
})