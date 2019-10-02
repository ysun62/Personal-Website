// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {speed: 500});


// Sticky Nav
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

const handleScroll = () => {
    if(window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', () => {
    handleScroll();
    pageHighlight();
});

//Handling Click
const burger = document.querySelector('.burger');
const ul = document.querySelector('ul');
const ulItems = document.querySelectorAll('ul li');
const navLinks = document.querySelectorAll('ul li a');
const handleClick = () => {
    ul.classList.add('hide-on-mobile');
    burger.classList.remove('toggleBurger');
    nav.style.borderBottom = '3px solid #51BE95';
    ul.style.borderBottom = 'none';
    ulItems.forEach((item) => {
        item.style.animation = '';
    });
}

// Nav Animation
const navAnimation = () => {
    burger.addEventListener('click', () => {
        //Toggle Nav
        ul.classList.toggle('hide-on-mobile');
        
        if(nav.style.borderBottom === 'none') {
            ul.style.borderBottom = 'none';
            nav.style.borderBottom = '3px solid #51BE95';
        } else {
            nav.style.borderBottom = 'none';
            ul.style.borderBottom = '3px solid #51BE95';
        }
        
        //Animate NavItems
        ulItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navLinkFade 0.5s ease-out forwards ${index / 10}s`
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