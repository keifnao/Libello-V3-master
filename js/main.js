// Navbar Functions
// https://stackoverflow.com/questions/19900953/trying-to-trigger-event-on-certain-scroll-height-using-javascript

scrollCheck()

window.addEventListener("scroll", () => scrollCheck())

function scrollCheck() {
    const navbar = document.querySelector(".navbar")
    const navBrand = document.querySelector(".navbar-brand")
    const navText = document.querySelector(".nav-link")

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#FAF9F6'
        navBrand.style.color = '#4878D4'
        navText.style.color = '#4878D4'
    } else {
        navbar.style.backgroundColor = 'transparent'
        navBrand.style.color = '#FAF9F6'
        navText.style.color = '#FAF9F6'
    }    
}