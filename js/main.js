// Initialize variables
const ratings = document.querySelectorAll(".ratings");
let rate_card = document.querySelector("#rate");
let thank_you_card = document.querySelector("#thank-you");
let submit_btn = document.querySelector("#submit-btn");
let selection_msg = document.querySelector("#selection");

let current_rating = "";

// Create event listener for each rating btn
ratings.forEach(ratings => {
    ratings.addEventListener("click", function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
        current_rating = this.innerHTML; // Get current rating selected
    })
})

function submit_rating() {
    // Checks if a rating is selected
    if (current_rating == ""){
        alert("Please select a rating!");
    }
    else {
        rate_card.style.display = "none";
        thank_you_card.style.display = "block";
        selection_msg.innerHTML = "You selected " + current_rating + " out of 5";
    }
}

// Add event listener for submit button
submit_btn.addEventListener("click", submit_rating);


