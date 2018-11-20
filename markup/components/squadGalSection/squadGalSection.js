$(document).ready(function() {
    $(".squadGalSection__link-video").click(function(event) {
        event.preventDefault();
        $(".headerMenu__btn-open").addClass("headerMenu__btn-jsHide");
        $(".headerMenu__btn-close").removeClass("headerMenu__btn-jsHide");
        $(".videoPopupSection").removeClass("videoPopupSection-jsHide");
    });
    
    $(".headerMenu__btn-close").click(function(event) {

        // close button

        event.preventDefault();

        var closeBtn_hide = function() {
            $(".headerMenu__btn-close").addClass("headerMenu__btn-jsHide");
            $(".headerMenu__btn-open").removeClass("headerMenu__btn-jsHide");
        };

        if (!$(".videoPopupSection").hasClass("videoPopupSection-jsHide")) {

            // video popup

            closeBtn_hide();
            $(".videoPopupSection").addClass("videoPopupSection-jsHide");

        }
    })
});

lightbox.option({
    'disableScrolling': true
})
