const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');
const ulItems = document.querySelectorAll('ul li');
const navLinks = document.querySelectorAll('ul li a');
const whole_page = document.querySelector('.container');
const abouth2 = document.querySelector('#about h2');
const abouth2Top = abouth2.offsetTop;
const nav = document.querySelector('nav');


//Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {speed: 500});


//Handling Click
const handleClick = () => {
    ul.classList.remove('nav-active');
    burger.classList.remove('toggleBurger');
    ulItems.forEach((item) => {
        item.style.animation = '';
    });
}


//Nav Animation
const navAnimation = () => {
    burger.addEventListener('click', () => {
        //Toggle Nav
        ul.classList.toggle('nav-active');

        console.log('click');

        //Animate ulItems
        ulItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 8}s`
            }
        });

        //Animate Burger
        burger.classList.toggle('toggleBurger');

        // Toggle Nav After Click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                handleClick();
            });
        });
    });

}

navAnimation();

// document.addEventListener('click', (e) => {
//     if(e.target.parentNode !== ul && e.target.parentNode !== burger) {
//         handleClick();
//         console.log('outside');
//     }
// });

//Sticky Nav + Some Animation
const navTop = nav.offsetTop;

const handleScroll = () => {
    // console.log(window.scrollY, pageYOffset);
    if(window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-nav');
    }
}

const scrollAnimation = () => {
    if(window.scrollY/window.innerHeight >= 0.3 && window.scrollY/window.innerHeight <= 1.13) {
        about.children[0].classList.add('animation-slide-in-right');
        about.children[0].classList.add('about-landing');
    }
    if(window.scrollY/window.innerHeight >= 0.69 && window.scrollY/window.innerHeight <= 1.465) {
        about.children[1].classList.add('animation-slide-in');
    }
    if(window.scrollY/window.innerHeight >= 1.3 && window.scrollY/window.innerHeight <= 2.15) {
        projects.children[0].classList.add('animation-slide-in-right');
        projects.children[0].classList.add('projects-landing');
    }
    if(window.scrollY/window.innerHeight >= 1.53 && window.scrollY/window.innerHeight <= 2.5) {
        projects.children[1].children[0].classList.add('animation-slide-in');
    }
    if(window.scrollY/window.innerHeight >= 2.0 && window.scrollY/window.innerHeight <= 2.8) {
        projects.children[1].children[1].classList.add('animation-slide-in');
    }
    if(window.scrollY/window.innerHeight >= 2.46) {
        contact.children[0].classList.add('animation-slide-in-right');
        contact.children[0].classList.add('projects-landing');
    }
}

const pageHighlight = () => {
    let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    
    for(let i = 0; i < navLinks.length-1; i++) {
        let current_page = navLinks[i]; 
        let value = current_page.getAttribute('href');
        let page = document.querySelector(value);
        if(page.offsetTop <= scrollPos && (page.offsetTop + page.offsetHeight > scrollPos)) {
            document.querySelector('ul li a').classList.remove('current-page');
            current_page.classList.add('current-page');
        } else {
            current_page.classList.remove('current-page');
        }
    }
    
};

window.addEventListener('scroll', () => {
    handleScroll(); 
    scrollAnimation();
    pageHighlight();
});

//Highlight Current Page
// const items = document.querySelectorAll('ul li a');
// const pageHighlight = () => {
//     items.forEach((item) => {
//         item.addEventListener('click', () => {
//             items.forEach((i) => {
//                 i.classList.remove('current-page');
//             });
//             item.classList.add('current-page');
//         });
//     });
// }

// pageHighlight();