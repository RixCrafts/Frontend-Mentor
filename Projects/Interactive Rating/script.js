'use stric'

console.log("-- Starting JS --");

let rating_btns = document.querySelectorAll(".rating div");
let rating = 1;

rating_btns.forEach(btn => {
    btn.addEventListener("click", ratingClickHandler)
})

function ratingClickHandler(event) {
    rating_btns.forEach(btn => {
        btn.classList.remove("selected");
    })

    event.target.classList.add("selected");
    // ===
    // event.target.className += " selected";

    rating = event.target.innerText;
}

// Submit

document.querySelector(".button button").addEventListener("click", () => {
    let response = document.querySelector(".response");
    let result = document.querySelector(".result");
    result.innerText = `You selected ${rating} out of 5`;
    response.style.visibility = "visible";
    response.style.opacity = 1;
})