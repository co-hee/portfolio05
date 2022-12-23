$(function () {

    $('.mainVisual .mainSlide').slick({
        // dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });


    $('.mainContent .cont .tab>div').slick({
        autoplay: false,
        slidesToShow: 3,
        arrows: false,

    });

    $('.mainContent .cont .tab>div').eq(0).slick('slickPlay');
    $('.mainContent .menu_gnb li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainContent .cont .tab>div').eq(idx).addClass('on').siblings().removeClass('on');
        $('.mainContent .cont .tab>div').slick('slickPause');
        $('.mainContent .cont .tab>div').eq(idx).slick('slickPlay');
    })



})

