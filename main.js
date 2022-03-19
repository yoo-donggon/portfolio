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
    scrollIntoView('#contact');
});




//Handle click on contact
const homeContactBtn = document.querySelector('.profile_contact');
homeContactBtn.addEventListener('click', () =>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView ({behavior: "smooth", block: "center"});
}