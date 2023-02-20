const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // next if 1, previous if -1
        const offset = button.dataset.carouselButton === "next"? 1 : -1

        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        console.log(slides);
        
        const activeSlide = slides.querySelector("[data-active]")
        
        console.log(activeSlide);
    })
})

