// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', { speed: 500 });

const nav = document.querySelector("nav");
// Sticky Nav
// const navTop = nav.offsetTop;

// const handleScroll = () => {
//     if(window.scrollY >= navTop) {
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         nav.classList.add('fixed-nav');
//     } else {
//         document.body.style.paddingTop = 0;
//         nav.classList.remove('fixed-nav');
//     }
// }

const navActivate = () => {
  if (window.pageYOffset > 20) {
    nav.classList.add("active-nav");
    if (burger.classList.contains("toggleBurger")) {
      ul.classList.add("active-nav");
    }
  } else {
    nav.classList.remove("active-nav");
    ul.classList.remove("active-nav");
  }
};

window.addEventListener("scroll", () => {
  // handleScroll();
  navActivate();
  pageHighlight();
});

// Handling Click
const burger = document.querySelector(".burger");
const ul = document.querySelector("#nav-ul");
const ulItems = document.querySelectorAll("#nav-ul li");
const navLinks = document.querySelectorAll("#nav-ul li a");
const handleClick = () => {
  // Remove Burger Animation
  burger.classList.remove("toggleBurger");

  // Nav Closing Animation
  ul.style.animation = "navFadeAway-portrait 0.5s forwards ease-in-out";

  // Makes Sure Nav Animation Ends First
  setTimeout(() => {
    ul.classList.add("hide-on-mobile");
  }, 500);

  // NavLink Fade Away Animation
  ulItems.forEach(item => {
    item.style.animation = `navLinkFadeOpposite 0.5s ease-in-out backwards`;
  });
};

// Nav Animation
const navAnimation = () => {
  burger.addEventListener("click", () => {
    if (ul.classList.contains("hide-on-mobile")) {
      // Show Nav
      ul.classList.remove("hide-on-mobile");

      ul.style.animation = "navFade-portrait 0.5s forwards ease-in-out";

      if (nav.classList.contains("active-nav")) {
        ul.classList.add("active-nav");
      }

      // Animate NavItems
      ulItems.forEach((item, index) => {
        item.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index /
          10}s`;
      });

      // Animate Burger
      burger.classList.add("toggleBurger");
    } else {
      handleClick();
    }

    // Close Nav After Click Link
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        handleClick();
      });
    });
  });
};

navAnimation();

document.querySelector(".body-container").addEventListener("click", () => {
  handleClick();
});

const pageHighlight = () => {
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

  for (let i = 0; i < navLinks.length - 1; i++) {
    let current_page = navLinks[i];
    let value = current_page.getAttribute("href");
    let page = document.querySelector(value);
    if (
      page.offsetTop <= scrollPos &&
      page.offsetTop + page.clientHeight - 10 > scrollPos
    ) {
      document.querySelector("ul li a").classList.remove("current-page");
      current_page.classList.add("current-page");
    } else {
      current_page.classList.remove("current-page");
    }
  }
};

clearCurrentPage = () => {
  for (let i = 0; i < navLinks.length - 1; i++) {
    navLinks[i].classList.remove("current-page");
  }
};

window.onload = async () => {
  await clearCurrentPage();
  if (window.location.href.indexOf("projects") != -1) {
    navLinks[1].classList.add("current-page");
  } else if (window.location.href.indexOf("about") != -1) {
    navLinks[2].classList.add("current-page");
  } else if (window.location.href.indexOf("contact") != -1) {
    navLinks[3].classList.add("current-page");
  } else {
    navLinks[0].classList.add("current-page");
  }

  if (window.pageYOffset > 20) {
    nav.classList.add("active-nav");
  }
};
