// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {speed: 500});


// Sticky Nav
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');

const handleScroll = () => {
    if(window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-nav');
    }
    about.children[0].children[0].classList.add('about-landing');
    about.children[0].children[0].classList.add('animation-slide-in-left');
    projects.children[0].children[0].classList.add('projects-landing');
    projects.children[0].children[0].classList.add('animation-slide-in-right');
    contact.children[0].children[0].classList.add('about-landing');
    contact.children[0].children[0].classList.add('animation-slide-in-left');
}

window.addEventListener('scroll', handleScroll);


// Nav Animation
const navAnimation = () => {
    const burger = document.querySelector('.burger');
    const ul = document.querySelector('ul');
    const ulItems = document.querySelectorAll('ul li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        ul.classList.toggle('hide-on-mobile');
        
        if(nav.style.borderBottom === 'none') {
            nav.style.borderBottom = '3px solid #51BE95';
        } else {
            nav.style.borderBottom = 'none';
        }
        
        ul.style.borderBottom = '3px solid #51BE95';

        //Animate NavItems
        ulItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navLinkFade 1s ease-out forwards ${index / 8}s`
            }
        });

        //Animate Burger
        burger.classList.toggle('toggleBurger');
    });
}

navAnimation();