$(document).ready(function() {
    $(".headerMenu__btn-open").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-open").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-close").removeClass("headerMenu__btn-jsHide");
        $(".headerMenu__wrap").removeClass("headerMenu__wrap-jsHide");
        $(".socials").removeClass("socials-jsHide");
    });
    $(".headerMenu__btn-close").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-close").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-open").removeClass("headerMenu__btn-jsHide");
        $(".headerMenu__wrap").addClass("headerMenu__wrap-jsHide");
        $(".socials").addClass("socials-jsHide");
    });
});
