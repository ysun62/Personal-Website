//Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {speed: 500});



const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const navItems = document.querySelectorAll('ul li');
const whole_page = document.querySelector('.container');

const abouth1 = document.querySelector('#about h1');
const abouth1Top = abouth1.offsetTop;

//Nav Animation
const navAnimation = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');


    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate NavItems
        navItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 8}s`
            }
        });

        //Animate Burger
        burger.classList.toggle('toggleBurger');
    });
}

navAnimation();

//Page Animation
const pageAnimation = () => {
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            // console.log(page.textContent);
            // if(item.textContent === 'About') {
                // about.classList.add('about-landing');
            // } else if(item.textContent === 'Projects') {
            //     projects.classList.add('projects-landing');
            // }
            
        });
    });
        
}

pageAnimation();

//Sticky Nav + Some Animation
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

const handleScroll = () => {
    console.log(window.scrollY, navTop);
    if(window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed-nav');
        console.log('fixed');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-nav');
    }
}



const scrollAnimation = () => {
    // console.log(window.abouth1Top);
    // if(window.scrollY >= 460 && window.scrollY <= 1180) {
        about.children[0].classList.add('animation-slide-in-right');
        about.children[0].classList.add('about-landing');
    // }
    // if(window.scrollY >= 750 && window.scrollY <= 1660) {
        about.children[1].classList.add('animation-slide-in');
    // }
    // if(window.scrollY >= 1523 && window.scrollY <= 2246) {
        projects.children[0].classList.add('animation-slide-in-right');
        projects.children[0].classList.add('projects-landing');
    // }
    // if(window.scrollY >= 1700 && window.scrollY <= 2700) {
        projects.children[1].children[0].classList.add('animation-slide-in');
    // }
    // if(window.scrollY >= 1900 && window.scrollY <= 2700) {
        projects.children[1].children[1].classList.add('animation-slide-in');
    // }
    // if(window.scrollY >= 2586) {
        contact.children[0].classList.add('animation-slide-in-right');
        contact.children[0].classList.add('projects-landing');
    // }
}

window.addEventListener('scroll', () => {
    handleScroll(); 
    scrollAnimation();
});