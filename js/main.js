// Get the navbar
const navbar = document.getElementById("navbar");

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll >= 56) {
        navbar.classList.add("navbarBackground")
        navbar.classList.add("navbar-light")
        navbar.classList.remove("navbar-dark");
    } else {
        navbar.classList.remove("navbarBackground");
        navbar.classList.remove("navbar-light")
        navbar.classList.add("navbar-dark");
    }
});


// $('.carousel').carousel({
//     interval: 114000
// });


