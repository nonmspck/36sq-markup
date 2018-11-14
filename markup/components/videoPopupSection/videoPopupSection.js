$(document).ready(function() {
    $(".textSlider__btn-videoTour").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-open").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-close").removeClass("headerMenu__btn-jsHide");
        $(".videoPopupSection").removeClass("videoPopupSection-jsHide");
    });

    $(".videoPopupSection__overlay").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-close").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-open").removeClass("headerMenu__btn-jsHide");
        $(".videoPopupSection").addClass("videoPopupSection-jsHide");
    })
});
