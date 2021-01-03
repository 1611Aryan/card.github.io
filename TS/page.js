const container = document.getElementById('container');
const pages = document.getElementById('pages');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const balloon1 = document.getElementById('balloon1');
const balloon2 = document.getElementById('balloon2');
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    pages.style.transition = 'none';
    pages.style.transform = 'rotateY(' + xAxis + 'deg) rotateX(' + yAxis + 'deg)';
});
container.addEventListener('mouseleave', () => {
    pages.style.transition = 'all 0.5s ease-out';
    pages.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
container.addEventListener('mouseenter', () => {
    pages.style.transition = 'none';
});
page1.addEventListener('click', () => {
    page1.classList.add('pageUp');
    page1.classList.remove('pageDown');
});
page2.addEventListener('click', () => {
    page1.classList.add('pageDown');
    page1.classList.remove('pageUp');
});
