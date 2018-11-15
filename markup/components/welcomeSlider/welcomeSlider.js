$(document).ready(function(){
    var $welcomeSlider = $(".textSlider");
    var sliderCounter_top = $(".welcomeSlider__counter-top");
    var sliderCounter_bottom = $(".welcomeSlider__counter-bottom");
    var arrowsWrap = $(".welcomeSlider__arrowsWrap");

    if ($welcomeSlider.children(".textSlider__slide").length > 1) {
        $(sliderCounter_top).removeClass("welcomeSlider__counter-hide");
        $(sliderCounter_bottom).removeClass("welcomeSlider__counter-hide");
        $(arrowsWrap).removeClass("welcomeSlider__arrowsWrap-hide");

        var currentSlide;
        var slidesCount;
        var nextSlide;
      
        var updateSliderCounter = function(slick, currentSlide) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            nextSlide = currentSlide + 1;

            if (currentSlide < 10) {
                $(sliderCounter_top).text("0" + currentSlide);
            } else {
                $(sliderCounter_top).text(currentSlide);
            }
            

            if (currentSlide < slidesCount) {
                if ($(sliderCounter_bottom).hasClass("welcomeSlider__counter-hide")) {
                    $(sliderCounter_bottom).removeClass("welcomeSlider__counter-hide");
                }

                if (nextSlide < 10) {
                    $(sliderCounter_bottom).text("0" + nextSlide);
                } else {
                    $(sliderCounter_bottom).text(nextSlide);
                }
            } else {
                $(sliderCounter_bottom).addClass("welcomeSlider__counter-hide");
            }
        };
    
        $welcomeSlider.on('init', function(event, slick) {
            updateSliderCounter(slick);
        });
    
        $welcomeSlider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });
        
        $welcomeSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            vertical: true,
            verticalSwiping: true,
            draggable: false,
            touchMove: false,
            prevArrow: ".welcomeSlider__arrow-up",
            nextArrow: ".welcomeSlider__arrow-down"
        });

        if (slidesCount < 2) {
            $(sliderCounter_top).addClass("welcomeSlider__counter-hide");
            $(sliderCounter_bottom).addClass("welcomeSlider__counter-hide");
        }
    }

    var $anchorLink = $(".welcomeSlider__anchorLink");

    $anchorLink.on("click", function(event){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 400);
        event.preventDefault();
        return false;
    });
});


