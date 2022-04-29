const Home = () => {
	const content = document.getElementById("content")

	const image = document.createElement("img")
	image.src = "./images/restaurant.jpeg"
	image.classList.add("heroImg")
	content.appendChild(image)
}

export default Home
