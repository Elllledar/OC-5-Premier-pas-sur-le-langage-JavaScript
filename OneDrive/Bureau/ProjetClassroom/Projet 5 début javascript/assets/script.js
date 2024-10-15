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

const images = [
    { src: './assets/images/slideshow/slide1.jpg', text: 'Impressions tous formats <span>en boutique et en ligne</span>' },
    { src: './assets/images/slideshow/slide2.jpg', text: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>' },
    { src: './assets/images/slideshow/slide3.jpg', text: 'Grand choix de couleurs <span>de CMJN aux pantones</span>' },
    { src: './assets/images/slideshow/slide4.png', text: 'Autocollants <span>avec découpe laser sur mesure</span>' }
];

const dotsDiv = document.querySelector('.dots');
const bannerImg = document.getElementById('banner_img');
const bannerText = document.getElementById('banner_text'); 
const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');

let currentIndex = 0;

function updateCarousel(index) {
    bannerImg.src = images[index].src; 
    bannerText.innerHTML = images[index].text; 

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('dot_selected');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
    dotsDiv.appendChild(dot);
});

arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex); 
});

arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
});

updateCarousel(currentIndex); 