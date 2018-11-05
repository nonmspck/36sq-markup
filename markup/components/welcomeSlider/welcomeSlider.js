$(document).ready(function(){
    var $welcomeSlider = $(".textSlider");
    var sliderCounter = $(".welcomeSlider__counter-top");
    var sliderCounter_bottom = $(".welcomeSlider__counter-bottom");

    if ($welcomeSlider.length) {
        var currentSlide;
        var slidesCount;
        var nextSlide;
      
        var updateSliderCounter = function(slick, currentSlide) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            nextSlide = currentSlide + 1;
            $(sliderCounter).text("0" + currentSlide);

            if (currentSlide < slidesCount) {
                if ($(sliderCounter_bottom).hasClass("welcomeSlider__counter-hide")) {
                    $(sliderCounter_bottom).removeClass("welcomeSlider__counter-hide");
                }

                $(sliderCounter_bottom).text("0" + nextSlide);
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
            vertical: true,
            verticalSwiping: true,
            // fade: true,
            // cssEase: 'linear',
            draggable: false,
            infinite: false,
            prevArrow: ".welcomeSlider__arrow-up",
            nextArrow: ".welcomeSlider__arrow-down"
        });
    } else {
        $(sliderCounter_top).addClass("welcomeSlider__counter-hide");
        $(sliderCounter_bottom).addClass("welcomeSlider__counter-hide");
    }
});


