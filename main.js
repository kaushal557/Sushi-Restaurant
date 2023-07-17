// ================= SHOW MENU =================
const d = document;

const navMenu = d.getElementById('nav-menu'),
navToggle = d.getElementById('nav-toggle'),
navClose = d.getElementById('nav-close');

// menu show
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// menu hide
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// ================= MENU ITEMS =====================
const navLink = d.querySelectorAll('.nav__link') //use queryselectorall bcoz multi classes.

const linkAction = () => {
    const navMenu = d.getElementById('nav-menu')
    // click on nav__link, we remove the show-menu.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ================= HEADER SHADOW =====================
const scrollHeader = () => {
    const header = d.getElementById('header')
    // when the scroll is greater than 50 viewport height, add scroll-header
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)


// ================= SCROLL UP =====================
const scroll_Up = () => {
    const scrollUp = d.getElementById('scroll-up')
    // when the scollup is higher than 350viewport height, add show-scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scroll_Up);


// ================= SCROLL SECTIONS ACTIVE LINK =====================
const sections = d.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = d.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


// ================= DARK THEME =====================
const themeButton = d.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// prev. selected theme(user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme 
const getCurrentTheme = () => {
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
}

const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
}

if(selectedTheme) {
    // classList.add(darkTheme)
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    d.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save theme locally
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ================= SCROLL REVEAL =====================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, //Animations repeat
})

sr.reveal('.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content')
sr.reveal('.home__data', {origin: 'bottom'})
sr.reveal('.about__data, .recently__data', {origin: 'left'})
sr.reveal('.about__img, .recently__img', {origin: 'right'})
sr.reveal('.popular__card', {interval: '100'})