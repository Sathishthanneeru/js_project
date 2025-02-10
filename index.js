document.addEventListener("DOMContentLoaded", () => {
    const bar = document.querySelector(".bar");
    const navLinks = document.querySelector(".nav-links");

    bar.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});


