const ratings = document.querySelectorAll(".ratings");

//Create event listener fore each rating btn
ratings.forEach(ratings => {
    ratings.addEventListener("click", function() {
        document.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
    })
})