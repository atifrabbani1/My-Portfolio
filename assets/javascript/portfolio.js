$(document).ready(function () {
    $("#profile").show();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $('.images').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
    $('.modal').modal();
});
$("#profile-btn").on("click", function () {
    event.preventDefault();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#profile").fadeIn(3000);
})
$("#resume-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#resume").fadeIn(3000);
})
$("#portfolio-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#contact").hide();
    $("#portfolio").fadeIn(3000);
})
$("#contact-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").fadeIn(3000);
})
$(".tabs").tabs('swipeable', true);
