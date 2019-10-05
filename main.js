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

// Handling Click
const burger = document.querySelector('.burger');
const ul = document.querySelector('#nav-ul');
const ulItems = document.querySelectorAll('#nav-ul li');
const navLinks = document.querySelectorAll('#nav-ul li a');
const handleClick = () => {
    // Remove Burger Animation
    burger.classList.remove('toggleBurger');

    // Change Border-Bottom
    nav.style.borderBottom = '3px solid #51BE95';
    ul.style.borderBottom = 'none';

    // Nav Closing Animation
    ul.style.animation = 'navFadeAway-portrait 0.5s forwards ease-in-out';

    // Makes Sure Nav Animation Ends First
    setTimeout(() => {
        ul.classList.add('hide-on-mobile');
    }, 500);

    // NavLink Fade Away Animation
    ulItems.forEach(item => {
        item.style.animation = `navLinkFadeOpposite 0.5s ease-in-out backwards`
    });
}

// Nav Animation
const navAnimation = () => {
    burger.addEventListener('click', () => {
        if(ul.classList.contains('hide-on-mobile')) {
            // Show Nav
            ul.classList.remove('hide-on-mobile');

            ul.style.animation = 'navFade-portrait 0.5s forwards ease-in-out';
            
            // Change Border-Bottom
            nav.style.borderBottom = 'none';
            ul.style.borderBottom = '3px solid #51BE95';

            // Animate NavItems
            ulItems.forEach((item, index) => {
                item.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index / 10}s`
            });

            // Animate Burger
            burger.classList.add('toggleBurger');
        } else {
            handleClick();
        }

        // Close Nav After Click Link
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