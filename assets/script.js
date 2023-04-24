const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0;

function verifieposition() {  
	if (position >= slides.length) {
		position = 0;
	} else if (position < 0) {
		position = slides.length - 1;
	}
}

// création des bullets points 
const bullet = document.querySelector('.dots');
for (let i = 0; i < slides.length; i++) {
	const point = document.createElement("div");
	bullet.appendChild(point);
	point.classList.add("dot");
}

// Sélection du point en fonction de la position du slider
let bulletselect = positionbullet();
bulletselect.classList.add("dot_selected");

function positionbullet() {
	return document.querySelector(`.dots .dot:nth-child(${position + 1})`);
}

// changement de point lors du changement de slide
function changebullet() {
	bulletselect.classList.remove("dot_selected"); 
	bulletselect = positionbullet();  
	bulletselect.classList.add("dot_selected");
}


function imageTagline() {
	document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slides[position].image;  // met à jour l'image en fonction de la position
	document.querySelector("#banner p").innerHTML = slides[position].tagLine;  // met à jour la tagLine (description) en fonction de la position
}

// event listeners sur les flèches 
const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function () {   
	changementslides(-1);  // on appelle la fonction changementslides avec un paramètre de direction au click 
	console.log(position);
});

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', function () {
	changementslides(+1); 
	console.log(position);
});

// changement de slide, on créé le fonction changementslides 
function changementslides(direction) { 
	position += direction; 
	verifieposition();
	imageTagline();
	changebullet(); 
}

setInterval("changementslides(+1)", 4000) // appelle la fonction changementslides avec une direction +1 toutes les 4000ms


