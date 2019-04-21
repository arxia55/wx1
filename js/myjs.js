

//header
$(window).scroll(function() {
    if ($(window).scrollTop() >= 28) {
        $('#header').addClass('head-sm');

    } else {
        $('#header').removeClass('head-sm');
    }
});


//main-content
$(function () {
    fn();
    $(window).resize(function () {
        fn()
    });
    function fn() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        if (winWidth <= 640) {
            $('.banner,.banner .swiper-slide').height(winHeight * .7 + 'px');
            $('.main-content').css('margin-top', winHeight * .7 + 'px');
        } else if (winWidth > 640 && winWidth <= 992) {
            $('.banner,.banner .swiper-slide').height(winHeight * .8 + 'px');
            $('.main-content').css('margin-top', winHeight * .8 + 'px');
        } else if (winWidth > 992) {
            $('.banner,.banner .swiper-slide').height(winHeight + 'px');
            $('.main-content').css('margin-top', winHeight + 'px');
        }
    }
});



$('.myDrop li').click(function (e) {
    e.preventDefault();
    $(this).parents('.dropdown').find('.drop-value').text($(this).text())
})



//banner
$(function () {
    var banner = $('.banner').not('#pausePlay').swiper({
        loop: true,
        autoplay:3000
    });
    $('.banner .prev').click(function(){
        banner.swipePrev();
    });
    $('.banner .next').click(function(){
        banner.swipeNext();
    })

});


// 立即预定
$("#reserveBtn").click(function(){
    $("#reservePop").modal({
        backdrop: 'static',
        keyboard: false,
        remote: 'ReservePop.html'
    });

});



$(function(){
    $('.swiper3').each(function () {
        var timer = (Math.random()*3+3)*600;

        var mySwiper = $(this).swiper({
            loop: true,
            autoplay:timer
        });
        $(this).find('.prev').click(function(){
            mySwiper.swipePrev();
        });
        $(this).find('.next').click(function(){
            mySwiper.swipeNext();
        });
    })
});
$(function () {
    $('.swiper4').each(function () {
        var timer = (Math.random() * 5 + 10) * 600;

        var mySwiper = $(this).swiper({
            loop: true,
            autoplay: timer
        });
        $(this).find('.prev').click(function () {
            mySwiper.swipePrev();
        });
        $(this).find('.next').click(function () {
            mySwiper.swipeNext();
        });
    })
});


//
jeDate("#date",{
    minDate: jeDate.nowDate({DD:0}), //最小日期
    maxDate: jeDate.nowDate({DD:"+15"}), //1代表明天，2代表后天，以此类推
    format: "YYYY-MM-DD",
    theme:{bgcolor:"#1f1f1f",pnColor:"#fff"},
    isTime:false,
    onClose:false,
    isClear:false,
    isToday:false
});



//移动端获取小图片
browserGetImg();
function browserGetImg() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        $('.banner .swiper-slide').each(function () {
            var url = $(this).attr('style');
            var url2 = url.replace('.jpg','_750.jpg');
            $(this).attr('style',url2);
        });

        $('.list3-item .swiper-slide img').each(function () {
            var url = $(this).attr('src');
            var url2 = url.replace('.jpg','_750.jpg');
            $(this).attr('src',url2);
        })
    }

}
