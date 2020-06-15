//Select element function

const selectElement = function (element) {
   return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');


menuToggler.addEventListener('click', function() {
   body.classList.toggle('open');
});

//Scroll paralax

window.addEventListener ('scroll', function() {
   const parallax = document.querySelector('.parallax');
   let scrollPosition = window.pageYOffset;
   
   parallax.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
});