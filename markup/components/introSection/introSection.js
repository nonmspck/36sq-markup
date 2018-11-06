var $introSlider = $(".introSlider__slider");

$introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    // cssEase: 'linear',
    draggable: false,
    infinite: false,
    prevArrow: ".introSlider__control-prev",
    nextArrow: ".introSlider__control-next"
});
