$('.product_slider_content').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    centerMode: false,
    rows: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: false,
            },
        },
    ],
});