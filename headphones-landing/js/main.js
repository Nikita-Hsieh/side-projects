// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

// Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

// Hide
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

// Remove Mobile Menu
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu") // Fix the variable from 'menu' to 'navMenu'
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

// Change Background Header
function scrollHeader() {
  const header = document.getElementById("header")

  if (window.scrollY >= 50) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

// Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")
  if (window.scrollY >= 200) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

// Scroll Section Active Link
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

//Scroll Receal Animation
const sr = ScrollReveal({
  distance: "60px",
  duration: "2500",
  delay: "400",
  //reset: true
})

sr.reveal(`.home__header, .section__title`, { delay: 600 })
sr.reveal(`.home__footer`, { delay: 700 })
sr.reveal(`.home__img`, { delay: 900, origin: "top" })
sr.reveal(
  `.sponsor__img,  .products__card, .footer__logo, .footer__content, .footer__copy`,
  {
    origin: "top",
    interval: 100,
  }
)
sr.reveal(`.specs__data, .discount__animate`, { origin: "left", interval: 100 })
sr.reveal(`.specs__img, .discount__img`, { origin: "right" })
sr.reveal(`.case__img`, { origin: "top" })
sr.reveal(`.case__data`)
