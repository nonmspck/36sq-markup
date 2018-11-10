var $descrNavSlider = $(".navSlider__slider");

$descrNavSlider.slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    asNavFor: ".weSlider",
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1
            }
        }
    ]
});

var $weSlider = $(".weSlider");

$weSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    draggable: false,
    touchMove: false,
    asNavFor: ".navSlider__slider",
    adaptiveHeight: true,
    prevArrow: ".navSlider__btn-prev",
    nextArrow: ".navSlider__btn-next"
});
