$(function () {

    $('.mainVisual .mainSlide').slick({
        // dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });



    $('.mainContent .menu_gnb li').on('click', function () {


        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainContent .cont .tab>div').eq(idx).addClass('on').siblings().removeClass('on');
        $('.mainContent .cont .tab>div').eq(idx).slick({
            autoplay: false,
            slidesToShow: 2,
            arrows: false,
        });

    })



})

