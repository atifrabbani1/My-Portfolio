$(document).ready(function () {
    $("#profile").show();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $('.images').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
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
$(".tabs").tabs('swipeable', true);
