'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () =>{
    console.log(window.scrollY);
    console.log('navbarHeight: ${navbarHeight}');
    
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else{
        navbar.classList.remove('navbar--dark');
    }
});


//Handle scrolling
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link==null) {
        return;
    }
    scrollIntoView(link);
});




//Handle click on contact
const profileContactBtn = document.querySelector('.profile_contact');
profileContactBtn.addEventListener('click', () =>{
    scrollIntoView('#contact');
});



//make home fade
const profile = document.querySelector('.profile__container');
const profileHeight = profile.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    profile.style.opacity = 1- window.scrollY / profileHeight;
});



//show arrow up
const arrowup = document.querySelector('.arrowup');
document.addEventListener('scroll', () => {
    if (window.scrollY > profileHeight / 2){
        arrowup.classList.add('visible');
    } else {
        arrowup.classList.remove('visible');
    }
});


//handle click 
arrowup.addEventListener('click', () => {
    scrollIntoView('#profile');
});
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView ({behavior: "smooth", block: "center"});
}