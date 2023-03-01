const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // next if 1, previous if -1
        const offset = button.dataset.carouselButton === "next"? 1 : -1

        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        console.log(slides);
        
        const activeSlide = slides.querySelector("[data-active]")

        // Convert slides to an array
        // Get index of element
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        console.log(activeSlide);

        // Index of last element
        if(newIndex < 0) newIndex = slides.children.length - 1
        // Passed last slide
        if(newIndex >= slides.children.length) newIndex = 0


        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

