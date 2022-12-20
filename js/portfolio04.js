$(function () {

    $('.mainVisual .mainSlide').slick({
        // dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });



    $('.mainContent .cont_slide').slick({
        // dots: true,
        arrows: false,

    });

    $('.mainContent .cont>ul>li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainContent .cont_slide').slick('slickGoTo', idx)
    });


    $('.toggle li').on('click', function () {
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab>div').eq(idx).addClass('on').siblings().removeClass('on');
    });










})