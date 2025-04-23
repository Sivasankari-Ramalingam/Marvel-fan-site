// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// setInterval(() => {
//     slides[currentIndex].style.transform = `translateX(-100%)`;
//     currentIndex = (currentIndex + 1) % totalSlides;
//     slides[currentIndex].style.transform = `translateX(0)`;
// }, 3000);

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.getElementsByClassName("slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        // Hide the current slide
        slides[currentSlide].classList.remove('active');
        // Move to the next slide, or loop back to the first
        currentSlide = (currentSlide + 1) % slides.length;
        // Show the new slide
        slides[currentSlide].classList.add('active');
    }

    // Set interval for automatic slide transition
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});