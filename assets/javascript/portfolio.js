$(document).ready(function () {
    $("#profile").show();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $('.modal').modal();
});
$("#profile-btn").on("click", function () {
    event.preventDefault();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#profile").fadeIn(2000);
})
$("#resume-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#resume").fadeIn(2000);
    
})
$("#portfolio-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#contact").hide();
    $("#portfolio").fadeIn(2000);
})
$("#contact-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").fadeIn(2000);
})
//$(".tabs").tabs('swipeable', true);

var slideIndex = 0;
showSlides1();


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}