let blr = 'blur';

const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

const main = document.querySelector('main');
const sec_back = document.querySelector('.section_Back');
const footer = document.querySelector('.footer');
const welcome = document.querySelector('.welcome');
const video = document.querySelector('.fullscreen-video-wrap video');

const links = document.querySelectorAll('.navlist li');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle('x');

    setTimeout(blurElement, 300);
});

function blurElement() {
    main.classList.toggle(blr);
    footer.classList.toggle(blr);
    welcome.classList.toggle(blr);
    video.classList.toggle('video-blur');
    sec_back.classList.toggle(blr);
}