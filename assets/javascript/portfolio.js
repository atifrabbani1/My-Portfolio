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
    $("#profile").show();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();

})
$("#resume-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").show();
    $("#portfolio").hide();
    $("#contact").hide();
})
$("#portfolio-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#portfolio").show();
    $("#contact").hide();
})
$("#contact-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").show();
})
$(".tabs").tabs('swipeable', true);
