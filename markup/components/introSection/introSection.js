var $introSlider = $(".introSlider__slider");

$introSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    draggable: false,
    touchMove: false,
    prevArrow: ".introSlider__control-prev",
    nextArrow: ".introSlider__control-next"
});
