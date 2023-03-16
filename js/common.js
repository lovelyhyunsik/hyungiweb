$(function(){
    $('.gnb_menu>li').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
    })//gnb 클릭 on 스크립트

    var arrowChange = 0;
    $('.brand_gnb').click(function(){
        $(this).children('.sub_wrapper').toggleClass('show')
        $(this).siblings('li').children('.sub_wrapper').removeClass('show')
        if(arrowChange === 0){
            $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-up-20.png")
            arrowChange = 1;
        }else{
            $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-down-20.png")
            arrowChange = 0;
        }
    })/* gnb BRAND 클릭 show toggleClass */

    $('.big_gnb').click(function(){
        $(this).children('.sub_wrapper').toggleClass('show')
        $(this).siblings('li').children('.sub_wrapper').removeClass('show')
    })

    $('.brand_slide_gnb > ul > li').click(function(){
        $('.brand_slide_gnb > ul > li').removeClass('on')
        $(this).addClass('on')
    })

    
    $('.top_icon').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });//스크롤 탑 버튼 기능

})