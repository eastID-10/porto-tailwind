const slider = document.getElementById('slider');
const slides = slider.children;
let index = 0;

document.getElementById('next').onclick = () => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;

};
document.getElementById('prev').onclick = () => {
    index = (index -1 ) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
};
