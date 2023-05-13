const certificates = document.querySelectorAll('.certificate-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;

certificates.forEach((certificate, index) => {
if (index !== currentIndex) {
    certificate.style.display = 'none';
}
});

if (currentIndex === 0) {
prevButton.disabled = true;
prevButton.style.visibility = 'hidden';
}

if (currentIndex === certificates.length - 1) {
nextButton.disabled = true;
nextButton.style.visibility = 'hidden';
}

prevButton.addEventListener('click', () => {
if (currentIndex > 0) {
    certificates[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
    certificates[currentIndex].style.display = 'flex';
    nextButton.disabled = false;
    nextButton.style.visibility = 'visible';

    if (currentIndex === 0) {
    prevButton.disabled = true;
    prevButton.style.visibility = 'hidden';
    }
    
    localStorage.setItem('currentIndex', currentIndex);
}
});

nextButton.addEventListener('click', () => {
if (currentIndex < certificates.length - 1) {
certificates[currentIndex].style.display = 'none';
currentIndex = (currentIndex + 1) % certificates.length;
certificates[currentIndex].style.display = 'flex';
prevButton.disabled = false;
prevButton.style.visibility = 'visible';

if (currentIndex === certificates.length - 1) {
nextButton.disabled = true;
nextButton.style.visibility = 'hidden';
}

localStorage.setItem('currentIndex', currentIndex);
}
});