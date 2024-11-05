// Add event listener to window scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    // Add 'scrolled' class when page is scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
