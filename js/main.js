// Initialize variables
const ratings = document.querySelectorAll(".ratings");
let rate_card = document.querySelector("#rate");
let thank_you_card = document.querySelector("#thank-you");
let submit_btn = document.querySelector("#submit-btn");
let selection_msg = document.querySelector("#selection");

let current_rating;

// Create event listener fore each rating btn
ratings.forEach(ratings => {
    ratings.addEventListener("click", function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
        current_rating = this.innerHTML; // Get current rating selected
        alert(current_rating);
    })
})



