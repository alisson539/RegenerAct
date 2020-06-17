/*<--HEADER-->*/

//Select element function

const selectElement = function (element) {
   return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');


menuToggler.addEventListener('click', function() {
   body.classList.toggle('open');
});


/*<--HERO-->*/

//Scroll paralax

window.addEventListener ('scroll', function() {
   const parallax = document.querySelector('.parallax');
   let scrollPosition = window.pageYOffset;
   
   parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
});



/*<--ABOUT US-->*/


// Slider

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton =  document.querySelector('.carousel_button--right');
const prevButton =  document.querySelector('.carousel_button--left') ;
const dotsNav = document.querySelector('.carousel_nav'); 
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

/* Arrange the slides next to one another */

const setSlidePosition = ((slide, index) => {
   slide.style.left = slideWidth * index + 'px';
});
slides.forEach(setSlidePosition);


const moveToslide = (track, currentSlide, targetSlide) => {
   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
   currentSlide.classList.remove('current-slide');
   currentSlide.classList.add('hidden');
   targetSlide.classList.add('current-slide');
   targetSlide.classList.remove('hidden');
}

const updateDots = (currentDot, targetDot) => {
   currentDot.classList.remove('current-slide');
   targetDot.classList.add('current-slide');
}

/* When I move left, move slide to the left */
prevButton.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const prevSlide = currentSlide.previousElementSibling;
   const nextSlide = currentSlide.nextElementSibling;
   const currentDot = dotsNav.querySelector('.current-slide');
   const prevDot = currentDot.previousElementSibling; 
   moveToslide(track, currentSlide, prevSlide);
   updateDots(currentDot, prevDot);
});



/* When I move right, move slide to the right */
nextButton.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const currentHidden = track.querySelector('.hidden');
   const nextSlide = currentSlide.nextElementSibling;
   const prevSlide = currentSlide.previousElementSibling;
   const currentDot = dotsNav.querySelector('.current-slide');
   const nextDot = currentDot.nextElementSibling; 


   moveToslide(track, currentSlide, nextSlide);
   updateDots(currentDot, nextDot);

});

/* When I click the nav indicator, move to that slide */

dotsNav.addEventListener('click', e => {
   const targetDot = e.target.closest('button');

   if(!targetDot) return;

   const currentSlide = track.querySelector('.current-slide');
   const currentDot = dotsNav.querySelector('.current-slide');
   const targetIndex = dots.findIndex(dot => dot === targetDot);
   const targetSlide = slides[targetIndex];   

   moveToslide(track, currentSlide, targetSlide);
   updateDots(currentDot, targetDot);

});

/* Automatic Reproducer */

