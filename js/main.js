$(function () {

    /*toggle-btn */
    $(".toggle-btn").on("click", function () {
        ($("#header").toggleClass("open"));
    })


    $("#mask").on("click", function () {
        $("#header").toggleClass("open");
    });

    $("#navi-sp a").on("click", function () {
        $("#header").toggleClass("open");
    });


    /*slick */
    $(".slide-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    // centerMode: true,
                    // centerPadding: "-10px",
                },
            },
        ],
    });

    /*スムーススクロール*/
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - 100;   // ヘッダーの高さに合わせて調整
        $("html, body").animate({ scrollTop: position }, 900, "swing");
        return false;
    });

});