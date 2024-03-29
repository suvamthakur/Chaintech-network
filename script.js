// Navbar
const hamburger = document.querySelector(".menu-box");
const list = document.querySelector(".nav-list");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    list.classList.toggle("active-flex");
})