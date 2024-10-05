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

//Remove Mobile Menu
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  menu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

//Change Background Header
function scrollHeader() {
  const header = document.getElementById("header")

  if (this.scrollY >= 50) header.classList.add("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

//Scoll Up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

//Scroll Section Active Link
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageXOffset
}
