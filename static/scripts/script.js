

function index() {
	console.log("index");
}

function procedures() {
	console.log("procedures");
}

function news() {
	// Hacer que el alto de las noticias aumente entre mas texto tengan.

	let newsWrapper = document.getElementById("news-wrapper");
	let news = [...document.getElementsByClassName("new")];

	// Add colors to the images
	(() => {
		const colors = ["#8AFF80", "#FFCA80", "#FF80BF", "#9580FF", "#FF9580", "#FFFF80"];
		const images = [...document.getElementsByClassName("new-image")];

		images.forEach((image) => {
			image.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		});
	})();
	
}

function contact() {
	console.log("contact");
}


(() => {
	// Main function

	switch (window.location.pathname) {
		case "/":
			index();
			break;
		
		case "/tramites/":
			procedures();
			break;

		case "/noticias/":
			news();
			break;

		case "/contacto/":
			contact();
			break;
	}

})();
