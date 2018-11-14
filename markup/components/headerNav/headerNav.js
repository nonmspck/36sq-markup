$(document).ready(function() {
    $(".headerMenu__btn-open").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-open").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-close").removeClass("headerMenu__btn-jsHide");
        $(".headerMenu__wrap").removeClass("headerMenu__wrap-jsHide");
        $(".socials").removeClass("socials-jsHide");
    });

    $(".headerMenu__btn-close").click(function(event) {

        // close button

        event.preventDefault();

        var closeBtn_hide = function() {
            $(".headerMenu__btn-close").addClass("headerMenu__btn-jsHide");
            $(".headerMenu__btn-open").removeClass("headerMenu__btn-jsHide");
        };

        if (!$(".headerMenu__wrap").hasClass("headerMenu__wrap-jsHide")) {

            // navigation popup

            closeBtn_hide();
            $(".headerMenu__wrap").addClass("headerMenu__wrap-jsHide");
            $(".socials").addClass("socials-jsHide");

        } else if (!$(".tourPopupSection").hasClass("tourPopupSection-jsHide")) {

            // tour form popup

            closeBtn_hide();
            $(".tourPopupSection").addClass("tourPopupSection-jsHide");
        } else if (!$(".videoPopupSection").hasClass("videoPopupSection-jsHide")) {

            // video popup

            closeBtn_hide();
            $(".videoPopupSection").addClass("videoPopupSection-jsHide");

        } else if (!$(".featuresPopupSection").hasClass("featuresPopupSection-jsHide")) {

            // features popup

            closeBtn_hide();
            $(".featuresPopupSection").addClass("featuresPopupSection-jsHide");
            
        }
    });
});
