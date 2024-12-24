const captions = [
    "Eres mi todo, hoy y siempre.",
    "Cada día contigo es un regalo.",
    "Tu sonrisa ilumina mi mundo.",
    "Eres mi razón de ser.",
    "No puedo imaginar mi vida sin ti.",
    "Cada momento contigo es mágico.",
    "Eres mi persona favorita.",
    "Mi corazón late por ti.",
    "Tú completas mi vida.",
    "Eres mi para siempre."
];

const images = document.querySelectorAll('.carousel img');
const caption = document.getElementById('caption');
let currentIndex = 0;

function updateSlide(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    caption.textContent = captions[index];
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSlide(currentIndex);
}
