import Home from "./home.js"
import Menu from "./menu"
import Contact from "./contact"

// Initial page load
Home()

// Dynamic page reloading
function clearContent() {
	content.innerHTML = ""
}

const content = document.querySelector("#content")
const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

homeBtn.addEventListener("click", () => {
	clearContent()
	Home()
})

menuBtn.addEventListener("click", () => {
	clearContent()
	Menu()
})

contactBtn.addEventListener("click", () => {
	clearContent()
	Contact()
})
