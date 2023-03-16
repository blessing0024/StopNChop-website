'use strict';


const navbar =document.querySelector("[data-navbar]");
const navbarlinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn =document.querySelector("data-menu-toggle-btn")

menuToggleBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
});