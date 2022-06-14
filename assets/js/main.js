/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========== ACCOMMODATIONS SWIPER ==========*/
let accommodationsSwiper = new Swiper('.accommodations-swiper', {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})

/*========== DINING SWIPER ==========*/
let diningSwiper = new Swiper('.dining-swiper', {
    spaceBetween: 30,
    loop: true,
    effect: 'cube',
    grabCursor: true,
    cube: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*========== FACILITIES SWIPER ==========*/
let facilitiesSwiper = new Swiper('.facilities-swiper', {
    spaceBetween: 30,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    cube: {
        rotate: 50,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*========== CHANGE BACKGROUND HEADER ==========*/

/*========== SCROLL SECTIONS ACTIVE LINK ==========*/

/*========== SHOW SCROLL UP ==========*/

/*========== SWIPER JS ==========*/

/*========== SCROLL REVEAL JS ==========*/