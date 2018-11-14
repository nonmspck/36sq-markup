$(document).ready(function() {
    $(".matchSection__btn").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-open").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-close").removeClass("headerMenu__btn-jsHide");
        $(".featuresPopupSection").removeClass("featuresPopupSection-jsHide");
    });
});
