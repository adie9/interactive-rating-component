const ratings = document.querySelectorAll(".ratings");
let current_rating;

//Create event listener fore each rating btn
ratings.forEach(ratings => {
    ratings.addEventListener("click", function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
        current_rating = this.innerHTML; // Get current rating selected
    })
})

function submit(current_rating) {
    let rate_card = document.querySelector("#rate");
    let thank_you_card = document.querySelector("#thank-you");

    // Check if rating is selected
    if (current_rating == "")
        alert("Please select a rating!")
    else {
        rate_card.style.display = "none";
        thank_you_card.style.display = "block";
    }
}

document.querySelector(".submit-btn").addEventListener("click", submit());

