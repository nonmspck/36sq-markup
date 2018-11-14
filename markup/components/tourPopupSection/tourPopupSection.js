$(document).ready(function() {
    $(".textSlider__btn-takeTour").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-open").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-close").removeClass("headerMenu__btn-jsHide");
        $(".tourPopupSection").removeClass("tourPopupSection-jsHide");
    });
});
