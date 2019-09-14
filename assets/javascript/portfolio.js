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
    $("#profile").slideDown("slow");
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").hide();

})
$("#resume-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").slideDown("slow");
    $("#portfolio").hide();
    $("#contact").hide();
})
$("#portfolio-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#portfolio").slideDown("slow");
    $("#contact").hide();
})
$("#contact-btn").on("click", function () {
    event.preventDefault();
    $("#profile").hide();
    $("#resume").hide();
    $("#portfolio").hide();
    $("#contact").slideDown("slow");
})
$(".tabs").tabs('swipeable', true);
