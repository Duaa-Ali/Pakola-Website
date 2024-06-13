/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),

      navToggle = document.getElementById('nav-toggle'),

      navClose = document.getElementById('nav-close')



/* Menu show */

if(navToggle){

   navToggle.addEventListener('click', () =>{

      navMenu.classList.add('show-menu')

   })

}



/* Menu hidden */

if(navClose){

    navClose.addEventListener('click', () =>{

      navMenu.classList.remove('show-menu')

   })

}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')



const linkAction = () =>{

   const navMenu = document.getElementById('nav-menu')

   // When we click on each nav__link, we remove the show-menu class

   navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{

   const header = document.getElementById('header')

   // Add a class if the bottom offset is greater than 50 of the viewport

   this.scrollY >= 50 ? header.classList.add('shadow-header') 

                      : header.classList.remove('shadow-header')

}

window.addEventListener('scroll', shadowHeader)



/*=============== SWIPER FAVORITES ===============*/ 

let swiperFavorites = new Swiper('.favorites__swiper', {

   loop: true,

   grabCursor: true,

   slidesPerView: 'auto',

   centeredSlides: 'auto',

})



/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{

	const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class

	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')

						     : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

    

const scrollActive = () =>{

  	const scrollDown = window.scrollY



	sections.forEach(current =>{

		const sectionHeight = current.offsetHeight,

			  sectionTop = current.offsetTop - 58,

			  sectionId = current.getAttribute('id'),

			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')



		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){

			sectionsClass.classList.add('active-link')

		}else{

			sectionsClass.classList.remove('active-link')

		}                                                    

	})

}

window.addEventListener('scroll', scrollActive)



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({

   origin: 'top',

   distance: '60px',

   duration: 2500,

   delay: 300,

   // reset: true, // Animations repeat

})



sr.reveal(`.home__data, .favorites__container, .footer__container`)

sr.reveal(`.home__circle, .home__img`, {delay: 600, scale: .5})

sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {delay: 1000, interval: 100})

sr.reveal(`.home__leaf`, {delay: 1200})

sr.reveal(`.home__tomato-1, .home__tomato-2`, {delay: 1400, interval: 100})

sr.reveal(`.care__img, .contact__img`, {origin: 'left'})

sr.reveal(`.care__list, .contact__data`, {origin: 'right'})

sr.reveal(`.banner__item, .products__card`, {interval: 100})





























document.addEventListener('DOMContentLoaded', () => {

   const careItems = document.querySelectorAll('.care__item');

   const observerOptions = {

       threshold: 0.1

   };



   const observer = new IntersectionObserver((entries, observer) => {

       entries.forEach(entry => {

           if (entry.isIntersecting) {

               entry.target.classList.add('visible');

               observer.unobserve(entry.target);

           }

       });

   }, observerOptions);



   careItems.forEach(item => {

       observer.observe(item);

   });

});















document.getElementById('thumb1').addEventListener('click', function() {

   changeBgGradient('#5AEE71 ', '#0CBD27 ');

});



document.getElementById('thumb2').addEventListener('click', function() {

   changeBgGradient('#D7BDFC', '#7E27FC ');

});



document.getElementById('thumb3').addEventListener('click', function() {

   changeBgGradient('#43cea2', '#185a9d');

});



function changeBgGradient(color1, color2) {

   const content = document.getElementById('content');

   content.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;

}