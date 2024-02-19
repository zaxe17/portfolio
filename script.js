/* TYPER */
var typed = new Typed(".auto-type", { 
    strings: ["FRONTEND DEVELOPER", "WEB DEVELOPER", "GAMER"], 
    typeSpeed: 130, 
    backSpeed: 100, 
    loop: true 
}) 

/* NAVBAR SCROLL */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

/* BACKGROUND SNOW EFFECT */
const numSnowflakes = 200;
const container = document.body;

for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    container.appendChild(snowflake);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    snowflake.style.left = x + 'px';
    snowflake.style.top = y + 'px';

    /* SPEED OF SNOW */
    const speed = Math.random() * 15 + 15;
    snowflake.style.animationDuration = `${speed}s`;

    const size = Math.random() * 3 + 2;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
}

/* ENEBALE SCROLL ANIMATION BAR */
const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
};

const animateProgressBars = () => {
    const bars = document.querySelectorAll(".progress .bar span");
    bars.forEach((bar) => {
        if (isElementInViewport(bar)) {
            bar.classList.add("bar-animate");
        } else {
            bar.classList.remove("bar-animate");
        }
    });
};

window.addEventListener("scroll", () => {
    animateProgressBars();
});

window.addEventListener("load", () => {
    animateProgressBars();
});

/* SLIDE ANIMATION */
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function() {
    showSlider('next');    
}

prevDom.onclick = function() {
    showSlider('prev');    
}

let runTimeOut;

function showSlider(type) {
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }
    else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    
}