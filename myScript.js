$(document).ready(function() {
     $(".container").click(function() {
         $(this).each(function(index) {
             if ($(this).index() % 2 === 0) {

                 $(this).addClass("right");
             } else {

                 $(this).addClass("left");
             }
         });
         $(this).children().css({
             "visibility": "visible"
         });
     });
 });


 /*
 Steps: 
 1. Remove the left and right classes from the containers in the HTML. This prevents the triangles from showing up when the page is loaded.
 2. Add an if statement in the jQuery to detect whether the left or right class should be added to the container when it is clicked. This 
    can be done using the index() method (children are numbered with indices starting at 0) and checking if the index is even or odd 
	using modulo.
 3. Add the appropriate class to the container by using the addClass() method.
 */
 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

