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


    var arrowChange = 0;
    $('.footer_top > .footer_top_right > .link_wrap > .link_wrap_btn_wrap').click(function(){
        $(this).children('ul').toggleClass('on')
        if(arrowChange === 0){
            $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-up-20.png")
            arrowChange = 1;
        }else{
            $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-down-20.png")
            arrowChange = 0;
        }
    })/* footer에 링크 모음집 */

    //input 안에 삭제버튼 나타내기
  $('.text_input').on('input', function () {
    if ($(this).val() == '') {
      $(this).siblings('.input_text_delete').css("display", "none");
      $('.search_text').css("display","flex")
      $('.search_relaton_wrap').css("display","none")
    } else {
      $(this).siblings('.input_text_delete').css("display", "block");
      $('.search_text').css("display","none")
      $('.search_relaton_wrap').css("display","block")
    }
  });

  //input 안에 삭제버튼 누르면 input텍스트 제거
  $('.input_text_delete').click(function () {
    $(this).siblings('input').val('');
    $(this).css("display", "none");
    $('.search_text').css("display","flex")
    $('.search_relaton_wrap').css("display","none")
  })

  $('.recent_search>.all_delete').click(function(){
    $('.no_result').css("display","block")
    $('.result').remove();
  })// 검색창 전체삭제 버튼

  $('.result>li>button').click(function(){
    $(this).parents('li').remove();
    no_result_show();
  })//최근검색어 li들 개별 삭제

  function no_result_show(){
    if($('.result>li').length === 0){
        $('.no_result').css("display","block")
      }else{
        $('.no_result').css("display","none")
      }
  }//최근검색어 li들 length에 따른 "최근 검색어가 없습니다"노출/비노출

  $('.btn_sch_open').click(function(){
    $(".search_wrap").css("display","block")
    $('body').addClass('fix')
  })//검색 아이콘 클릭

  $('.search_wrap_close').click(function(){
    $(".search_wrap").css("display","none")
    $('body').removeClass('fix')
  })//검색클로스 아이콘 클릭

  $('.three_depth_btn>button').click(function(){
    $('.three_depth_btn>button').removeClass('on')
    $(this).addClass('on')
  })//상품리스트 소분류 뎁스 선택 기능

  $('.brand>ul>li').click(function(){
    $(this).toggleClass('on')
  })//브랜드 토글

  $('.color_check>li').click(function(){
    $(this).toggleClass('on')
  })//색상코드

  $('.input_wrap>div>label>input').focus(function(){
    $(this).siblings('span').css("color","#222")
    $('.price_range > ul > li:last-child > label > input').prop("checked", true)
  })//인풋안에 텍스트 포커스시 색상변화

  $('.input_wrap>div>label>input').blur(function(){
    $(this).siblings('span').css("color","#969696")
    /* $('.input_wrap>div>label>input').val("") */
    /* $('.apply_btn').removeClass('on') */
  })//인풋안에 텍스트 블러시 색상변화

  $('.reset>button').click(function(){
    $('.color_check>li').removeClass('on')
    $('.size_check > li > label > input').prop("checked", false)
    $('.price_range > ul > li > label > input').prop("checked", false)
    $('.price_range > ul > li:first-child > label > input').prop("checked", true)
    $('.item_info_check > li > label > input').prop("checked" , false)
    $('.input_wrap>div>label>input').val("")
    $('.apply_btn').removeClass('on')
  })//필터 초기화 버튼
  
  var inputValue1 = "";
  var inputValue2 = "";

  $(".input_wrap>div>label>.input1").on("input", function () {
    const targetValue = $(this).val();
    inputValue1 = targetValue;

    if (inputValue1 && inputValue2) $(".apply_btn").addClass("on");
    else $(".apply_btn").removeClass("on");
  });

  $(".input_wrap>div>label>.input2").on("input", function () {
    const targetValue = $(this).val();
    inputValue2 = targetValue;

    if (inputValue1 && inputValue2) $(".apply_btn").addClass("on");
    else $(".apply_btn").removeClass("on");
  });//필터 적용하기 버튼 on

  $('.sort_wrap>li').click(function(){
    $('.sort_wrap>li').removeClass('on')
    $(this).addClass('on')
  })
})