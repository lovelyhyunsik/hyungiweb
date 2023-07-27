$(function () {
  $('.gnb_menu>li').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    
  })//gnb 클릭 on 스크립트
  
  $('html').click(function(e) {   
    if(!$(e.target).hasClass("gnb_menu")) {
      $('.sub_wrapper').removeClass('show')
          console.log("나머지 영역입니다")
          $('.gnb_menu>li').removeClass('on')
          $('.brand_gnb').find('.arrow_change').attr("src","./img/arrow_icon/ic-arrow-down-20.png")
    }

    $('.pro_menu > li.off').attr('class', 'on');
  });


  var arrowChange = 0;
  $('.brand_gnb').click(function () {
    $(this).children('.sub_wrapper').toggleClass('show')
    $(this).siblings('li').children('.sub_wrapper').removeClass('show')
    if (arrowChange === 0) {
      $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-up-20.png")
      arrowChange = 1;
    } else {
      $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-down-20.png")
      arrowChange = 0;
    }

    if($(this).hasClass('on')){
      $('.pro_menu > li.on').attr('class', 'off');
    }else{
      $('.pro_menu > li.off').attr('class', 'on');
    }

  })/* gnb BRAND 클릭 show toggleClass */
  
  $('.big_gnb').click(function () {
    $(this).children('.sub_wrapper').toggleClass('show');
    $(this).siblings('li').children('.sub_wrapper').removeClass('show');

    if($(this).hasClass('on')){
      $('.pro_menu > li.on').attr('class', 'off');
    }else{
      $('.pro_menu > li.off').attr('class', 'on');
    }

  })

  
  $('.brand_slide_gnb > ul > li').click(function () {
    $('.brand_slide_gnb > ul > li').removeClass('on')
    $(this).addClass('on')
  })


  $('.top_icon').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });//스크롤 탑 버튼 기능


  var arrowChange = 0;
  $('.footer_top > .footer_top_right > .link_wrap > .link_wrap_btn_wrap').click(function () {
    $(this).children('ul').toggleClass('on')
    if (arrowChange === 0) {
      $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-up-20.png")
      arrowChange = 1;
    } else {
      $(this).find('.arrow_change').attr("src", "./img/arrow_icon/ic-arrow-down-20.png")
      arrowChange = 0;
    }
  })/* footer에 링크 모음집 */

  //input 안에 삭제버튼 나타내기
  $('.text_input').on('input', function () {
    if ($(this).val() == '') {
      $(this).siblings('.input_text_delete').css("display", "none");
      $('.search_text').css("display", "flex")
      $('.search_relaton_wrap').css("display", "none")
    } else {
      $(this).siblings('.input_text_delete').css("display", "block");
      $('.search_text').css("display", "none")
      $('.search_relaton_wrap').css("display", "block")
    }
  });

  //input 안에 삭제버튼 누르면 input텍스트 제거
  $('.input_text_delete').click(function () {
    $(this).siblings('input').val('');
    $(this).css("display", "none");
    $('.search_text').css("display", "flex")
    $('.search_relaton_wrap').css("display", "none")
  })

  $('.recent_search>.all_delete').click(function () {
    $('.no_result').css("display", "block")
    $('.result').remove();
  })// 검색창 전체삭제 버튼

  $('.result>li>button').click(function () {
    $(this).parents('li').remove();
    no_result_show();
  })//최근검색어 li들 개별 삭제

  function no_result_show() {
    if ($('.result>li').length === 0) {
      $('.no_result').css("display", "block")
    } else {
      $('.no_result').css("display", "none")
    }
  }//최근검색어 li들 length에 따른 "최근 검색어가 없습니다"노출/비노출

  $('.btn_sch_open').click(function () {
    $(".search_wrap").css("display", "block")
    $('body').addClass('fix')
  })//검색 아이콘 클릭

  $('.search_wrap_close').click(function () {
    $(".search_wrap").css("display", "none")
    $('body').removeClass('fix')
  })//검색close 아이콘 클릭

  $('.three_depth_btn>button').click(function () {
    $('.three_depth_btn>button').removeClass('on')
    $(this).addClass('on')
  })//상품리스트 소분류 뎁스 선택 기능

  $('.brand>ul>li').click(function () {
    $(this).toggleClass('on')
  })//브랜드 토글

  $('.color_check>li').click(function () {
    $(this).toggleClass('on')
  })//색상코드

  $('.input_wrap>div>label>input').focus(function () {
    $(this).siblings('span').css("color", "#222")
    $('.price_range > ul > li:last-child > label > input').prop("checked", true)
  })//인풋안에 텍스트 포커스시 색상변화

  $('.input_wrap>div>label>input').blur(function () {
    $(this).siblings('span').css("color", "#969696")
    /* $('.input_wrap>div>label>input').val("") */
    /* $('.apply_btn').removeClass('on') */
  })//인풋안에 텍스트 블러시 색상변화

  $('.reset>button').click(function () {
    $('.color_check>li').removeClass('on')
    $('.size_check > li > label > input').prop("checked", false)
    $('.price_range > ul > li > label > input').prop("checked", false)
    $('.price_range > ul > li:first-child > label > input').prop("checked", true)
    $('.item_info_check > li > label > input').prop("checked", false)
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

  $('.sort_wrap>li').click(function () {
    $('.sort_wrap>li').removeClass('on')
    $(this).addClass('on')
  });//인기순 최신순 등등 선택


  var likeChange = 0;
  $(".like_change").click(function () {
    if (likeChange == 0) {
      $(this).attr("src", "./img/icon/ic-like-on.png");
      $(this).parents('.hover').siblings('.item_img').children('.fill').attr("src", "./img/icon/ic-like-on.png");
      likeChange = 1;
    } else {
      $(this).attr("src", "./img/icon/ic-like-white.png");
      $(this).parents('.hover').siblings('.item_img').children('.like_change').attr("src", "./img/icon/ic-like.png");
      likeChange = 0;
    }
  });//하트이미지 클릭변경

  var fillLikeChange = 0;
  $(".fill").click(function () {
    if (fillLikeChange == 0) {
      $(this).attr("src", "./img/icon/ic-like-on.png");
      fillLikeChange = 1;
    } else {
      $(this).attr("src", "./img/icon/ic-like.png");
      fillLikeChange = 0;
    }
  });//하트이미지 클릭변경

  var bigLikeChange = 0;
  $(".big").click(function () {
    if (bigLikeChange == 0) {
      $(this).attr("src", "./img/icon/ic-like-on.png");
      bigLikeChange = 1;
    } else {
      $(this).attr("src", "./img/icon/ic-like-gr.png");
      bigLikeChange = 0;
    }
  });//하트이미지 클릭변경

  $('.small_img_slide > ul > .img_list').click(function () {
    $('.small_img_slide > ul > .img_list').removeClass('on')
    $(this).addClass('on')
    first();
    second();
    third();
    fourth();
    fifth();
  })

  $('.next').click(function () {
    if ($('.small_img_slide > ul > li:last-child').hasClass('on')) {

    } else {
      $('.small_img_slide > ul > li.on').next('li').addClass('on')
      $('.small_img_slide > ul > li.on').eq(0).removeClass('on')
    }
  })

  $('.prev').click(function () {
    $('.small_img_slide > ul > li.on').prev('li').addClass('on')
    $('.small_img_slide > ul > li.on').eq(1).removeClass('on')
  })

  $('.small_img_slide > .prev').click(function () {

    first();
    second();
    third();
    fourth();
    fifth();
  })
  $('.small_img_slide > .next').click(function () {
    first();
    second();
    third();
    fourth();
    fifth();
  })

  function first() {
    if ($('.small_img_slide > ul > li').eq(0).hasClass('on')) {
      $('.zoomWindowContainer').css("display", "block")
      $('.main_img > img').css({ "transform": "scale(1)", "top": "0", "left": "0" })
      $('.main_img > img').addClass('on')
    }
  }

  function second() {
    if ($('.small_img_slide > ul > li').eq(1).hasClass('on')) {
      $('.zoomWindowContainer').css("display", "none")
      $('.main_img > img').css({ "transform": "scale(1.8)", "top": "45.45%", "left": '0' })
      $('.main_img > img').removeClass('on')
    }
  }

  function third() {
    if ($('.small_img_slide > ul > li').eq(2).hasClass('on')) {
      $('.zoomWindowContainer').css("display", "none")
      $('.main_img > img').css({ "transform": "scale(2.5)", "top": "62.5%", "left": "45.45%" })
      $('.main_img > img').removeClass('on')
    }
  }

  function fourth() {
    if ($('.small_img_slide > ul > li').eq(3).hasClass('on')) {
      $('.zoomWindowContainer').css("display", "none")
      $('.main_img > img').css({ "transform": "scale(3)", "top": "96.59%", "left": "0" })
      $('.main_img > img').removeClass('on')
    }
  }

  function fifth() {
    if ($('.small_img_slide > ul > li').eq(4).hasClass('on')) {
      $('.zoomWindowContainer').css("display", "none")
      $('.main_img > img').css({ "transform": "scale(2.9)", "top": "17.05%", "left": "0" })
      $('.main_img > img').removeClass('on')
    }
  }


  if ($('.review_wrap > .star_review').hasClass('n0.5')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-0.5.png");
    $('.num_review').text("0.5")
  }//상품상세 별점리뷰 0.5

  if ($('.review_wrap >.star_review').hasClass('n1')) {
    $('.review_wrap > star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.num_review').text("1")
  }//상품상세 별점리뷰 1

  if ($('.review_wrap > star_review').hasClass('n1.5')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(1).attr("src", "./img/icon/star-0.5.png");
    $('.num_review').text("1.5")
  }//상품상세 별점리뷰 1.5

  if ($('.review_wrap > .star_review').hasClass('n2')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(1).attr("src", "./img/icon/star-1.png");
    $('.num_review').text("2")
  }//상품상세 별점리뷰 2

  if ($('.review_wrap > .star_review').hasClass('n2.5')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(1).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(2).attr("src", "./img/icon/star-0.5.png");
    $('.num_review').text("2.5")
  }//상품상세 별점리뷰 2

  if ($('.review_wrap > .star_review').hasClass('n3')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(1).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(2).attr("src", "./img/icon/star-1.png");
    $('.num_review').text("3")
  }//상품상세 별점리뷰 3

  if ($('.review_wrap > .star_review').hasClass('n3.5')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(1).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(2).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(3).attr("src", "./img/icon/star-0.5.png");
    $('.num_review').text("3.5")
  }//상품상세 별점리뷰 3.5

  if ($('.review_wrap > .star_review').hasClass('n4')) {
    $('.review_wrap > .star_review>img').eq(0).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(1).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(2).attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(3).attr("src", "./img/icon/star-1.png");
    $('.num_review').text("4")
  }//상품상세 별점리뷰 4

  if ($('.review_wrap > .star_review').hasClass('n4.5')) {
    $('.review_wrap > .star_review>img').attr("src", "./img/icon/star-1.png");
    $('.review_wrap > .star_review>img').eq(4).attr("src", "./img/icon/star-0.5.png");
    $('.num_review').text("4.5")
  }//상품상세 별점리뷰 4.5

  if ($('.review_wrap > .star_review').hasClass('n5')) {
    $('.review_wrap > .star_review>img').attr("src", "./img/icon/star-1.png");
    $('.num_review').text("5")
  }//상품상세 별점리뷰 5

  $('.item_color > ul > li').on("click", function () {
    $('.item_color > ul > li').removeClass('on')
    $(this).addClass('on')
  })//아이템 상세 컬러 선택

  $('.item_color > ul > li.sold_out').off("click");//품절색상 클릭 off

  $('.item_box > .close_icon > button').click(function () {
    $(this).parents('li').remove();
  });//아이템 박스 삭제버튼


  $('.fold_btn > button').click(function () {
    $('.img_wrap').css("height", "100%")
    $('.fold_btn').css("display", "none ")
  })//상품 펼쳐보기

  $('.good_btn > button').click(function () {

  })


  var goodcChange = 0;
  $(".good_btn > button").click(function () {
    if (goodcChange == 0) {
      $(this).children("img").attr("src", "./img/icon/ic-good-on.png");
      $(this).children('span').css({ "font-weight": "500", "color": "#222" })
      goodcChange = 1;
    } else {
      $(this).children("img").attr("src", "./img/icon/ic-good.png");
      $(this).children('span').css({ "font-weight": "400", "color": "#969696" })
      goodcChange = 0;
    }
  });//하트이미지 클릭변경

  if ($('.answer_tag').hasClass('complete')) {
    $(".complete").text("답변완료");
  }
  if ($('.answer_tag').hasClass('wait')) {
    $(".wait").text("답변대기");
  }

  $(".qa_content > ul > li").click(function () {
    $(this).children('.grey_box').toggleClass('on')
  })

  $('.popup').click(function () {
    $('.popup_wrap').addClass('show')
    $('body').addClass('fix')
    $('.photo_all_popup').css("display","none")
  })//개인리뷰 사진 클릭시 팝업

  $('.all_popup').click(function () {
    $('.popup_wrap').addClass('show')
    $('body').addClass('fix')
    $('.photo_all_popup').css("display","block")
  })//포토리뷰 사진 클릭시 팝업

  $('.photo_all_popup').click(function(){
    $('.all_photo_popup_wrap').addClass('show')
    $('.popup_wrap').removeClass('show')
    $('body').addClass('fix')
  })

  $('.all_photo_popup_wrap .ic-close').click(function(){
    $('.all_photo_popup_wrap').removeClass('show')
    $('body').removeClass('fix')
  })

  $('.popup_wrap .ic-close').click(function () {
    $('.popup_wrap').removeClass('show')
    $('body').removeClass('fix')
  })

  $('.card_popup').click(function () {
    $('.card_popup_wrap').addClass('show')
    $('body').addClass('fix')
  })

  $('.ic-close').click(function () {
    $('.card_popup_wrap').removeClass('show')
    $('body').removeClass('fix')
  })

  $('.pagination > ul > li').click(function () {
    $(this).siblings('li').removeClass('on')
    $(this).addClass('on')
  })

  $('.next_btn').click(function () {
    if ($('.pagination > ul > li:last-child').hasClass('on')) {

    } else {
      $(this).siblings('ul').children('li.on').next('li').addClass('on')
      $(this).siblings('ul').children('li.on').eq(0).removeClass('on')
    }
  })

  $('.prev_btn').click(function () {
    $(this).siblings('ul').children('li.on').prev('li').addClass('on')
    $(this).siblings('ul').children('li.on').eq(1).removeClass('on')
  })

  $('.btn_wrap > button').click(function () {
    $('.btn_wrap > button').removeClass('on')
    $(this).addClass('on')
  })

  var tabnav = $('.item_tabnav > ul > li');
  var contents = $('section');

  tabnav.click(function (event) {
    event.preventDefault();
    var tg = $(this);
    var i = tg.index();
    var section = contents.eq(i);
    var tt = section.offset().top - 181;
    $('html, body').stop().animate({ scrollTop: tt }, 500);
  });//tabnav 클릭시 해당영역 이동


  $(window).scroll(function () {
    let scTop = $(window).scrollTop();
    contents.each(function () {
      let tgs = $(this);
      let idx = tgs.index();
      if (tgs.offset().top - 182 <= scTop) {
        tabnav.removeClass('on');
        tabnav.eq(idx).addClass('on');
      };
    });
  });//페이지이동하면 tab활성화

  $('.member_btn_wrap > button').click(function () {
    $('.member_btn_wrap > button').removeClass('on')
    $(this).addClass('on')
    if ($('.member_btn').hasClass('on')) {
      $('.member_login_container').css("display", "block")
      $('.non_member_login_container').css("display", "none")
    } else {
      $('.member_login_container').css("display", "none")
      $('.non_member_login_container').css("display", "block")
    };
  });

  $('.login_id > input').on('input', function () {
    if ($(this).val() === "" && $('.login_pw > input').val() === "") {
      $('.login_btn').removeClass('on')
    } else {
      $('.login_btn').addClass('on')
    }
  });//회원 로그인 input 값 입력시 로그인 버튼 활성화

  $('.non_member_name > input').on('input', function () {
    if ($(this).val() === "" && $('.non_member_pw > input').val() === "") {
      $('.order_check').removeClass('on')
    } else {
      $('.order_check').addClass('on')
    }
  });//비회원 주문조회 input 값 입력시 주문조회 버튼 활성화

  $('.type_btn_wrap > button').click(function () {
    $('.type_btn_wrap > button').removeClass('on')
    $(this).addClass('on')
  })//아이디 비밀번호 탭기능

  $('.selectBox_type>.label').click(function () {
    $(this).toggleClass('on');
    $(this).siblings('.optionItem_wrap').toggleClass('on')
  })

  $('.selectBox_type>.optionItem_wrap>.optionItem').click(function (e) {
    var text_change = $(this).text()
    $('.selectBox_type>.optionItem_wrap>.optionItem').removeClass('on')
    $(this).addClass('on')
    $(this).parents('.optionItem_wrap').siblings('.label').text(text_change).css("color", "#222")
    /* $('.selectBox_type>.optionItem_wrap>.optionItem').css("background", "none") */
    $(this).css("background", "#f5f5f5")
    $('.selectBox_type>.optionItem_wrap').removeClass('on')
    $('.selectBox_type>.label').removeClass('on')
    $('.selectBox_type_detail').css("display", "block")

    var optionType = e.target.dataset.id;
    //$('.optionList').css("display", "none")
    $(`.optionList.${optionType}`).addClass('on');

    $('.selectBox_type>.optionItem_wrap').removeClass('on');
  })

  $('.selectBox_type>.optionItem_wrap>.optionItem').hover(function(){
    $('.selectBox_type>.optionItem_wrap>.optionItem').css("background","none")
    $(this).css("background","rgb(245,245,245)")
  })

  $('.itemList>ul>li').click(function () {
    $('.itemList>ul>li').find('button').removeClass('on')
    $(this).find('button').toggleClass('on')
  })//셀렉트박스

  $('.fold > span').click(function () {
    $(this).parents('.fold').siblings('.grey_box').css("display", "block")
  })

  var foldGreyBOx = 0;
  $('.fold > span').click(function () {
    if (foldGreyBOx == 0) {
      $(this).children("img").attr("src", "./img/arrow_icon/ic-arrow-up-20.png");
      $(this).parents('.fold').siblings('.grey_box').css("display", "block")
      foldGreyBOx = 1;
    } else {
      $(this).children("img").attr("src", "./img/arrow_icon/ic-arrow-down-20.png");
      $(this).parents('.fold').siblings('.grey_box').css("display", "none")
      foldGreyBOx = 0;
    }
  });//동의 회색박스

  // 체크박스 전체 선택
  $(".all_agree").on("click", "#check_btn", function () {
    var checked = $(this).is(":checked");

    if (checked) {
      $(this).parents(".all_agree").siblings('.agree_container').find('input').prop("checked", true);
    } else {
      $(this).parents(".all_agree").siblings('.agree_container').find('input').prop("checked", false);
    }
  });

  $(".agree_container label").on("click", ".normal", function () {
    var checked = $(this).is(":checked");

    if (!checked) {
      $(".all_agree>label>#check_btn").prop("checked", false);
    }
  });

  // 체크박스 개별 선택
  $(".agree_container label").on("click", ".normal", function () {
    console.log("ddddddd")
    var is_checked = true;

    $(".agree_container label .normal").each(function () {
      is_checked = is_checked && $(this).is(":checked");
    });

    $(".all_agree>label>#check_btn").prop("checked", is_checked);
  });

  // 체크박스 전체 선택
  $(".all_agree").on("click", "#check_btn2", function () {
    var checked = $(this).is(":checked");

    if (checked) {
      $(this).parents(".all_agree").siblings('.agree_container').find('input').prop("checked", true);
    } else {
      $(this).parents(".all_agree").siblings('.agree_container').find('input').prop("checked", false);
    }
  });

  $(".agree_container label").on("click", ".normal", function () {
    var checked = $(this).is(":checked");

    if (!checked) {
      $(".all_agree>label>#check_btn2").prop("checked", false);
    }
  });

  // 체크박스 개별 선택
  $(".agree_container label").on("click", ".normal", function () {
    console.log("ddddddd")
    var is_checked = true;

    $(".agree_container label .normal").each(function () {
      is_checked = is_checked && $(this).is(":checked");
    });

    $(".all_agree>label>#check_btn2").prop("checked", is_checked);
  });


  $('.id_input_container > input').on('input', function () {
    if ($(this).val() === "") {
      $('.id_input_container > .double_check').removeClass('on')
    } else {
      $('.id_input_container > .double_check').addClass('on')
    }
  });//회원가입 아이디 중복확인 버튼 활성화


  function doubleCheckOn() {
    if ($('.e-mail_container > input').val() !== "" && $('.domain_box .optionItem').hasClass('on')) {
      $('.e-mail > .double_check').addClass('on');
      console.log("yes")
    } else {
      $('.e-mail > .double_check').removeClass('on');
      console.log("no")
    }
  };//중복확인 버튼 활성화

  $('.e-mail_container > input').on('input', function () {
    doubleCheckOn();
  });//중복확인 버튼 활성화

  $('.domain_box .optionItem').click(function () {
    doubleCheckOn();
  });//중복확인 버튼 활성화

  function accountCheckOn() {
    if ($('.bank_check .optionItem').hasClass('on') && $('.refund_account_container > input').val() !== "" && $('.account_name > input').val() !== "") {
      $('.account_check').addClass('on')
    } else {
      $('.account_check').removeClass('on')
    }
  };

  $('.bank_check .optionItem').click(function () {
    accountCheckOn();
  });//계좌인증 버튼 활성화

  $('.refund_account_container > input').on('input', function () {
    accountCheckOn();
  });//계좌인증 버튼 활성화

  $('.account_name > input').on('input', function () {
    accountCheckOn();
  });//계좌인증 버튼 활성화

  // 체크박스 전체 선택
  $(".all_check_btn").on("click", "#check_btn", function () {
    var checked = $(this).is(":checked");

    if (checked) {
      $(this).parents(".flex_layout_top").siblings('.flex_layout_middle').find('input').prop("checked", true);
      $('.white_box > a').addClass('on')
    } else {
      $(this).parents(".flex_layout_top").siblings('.flex_layout_middle').find('input').prop("checked", false);
      $('.white_box > a').removeClass('on')
    }
  });

  $(".middle_container").on("click", ".normal", function () {
    var checked = $(this).is(":checked");

    if (!checked) {
      $(".all_check_btn>label>#check_btn").prop("checked", false);
    }
  });

  // 체크박스 개별 선택
  $(".flex_layout_middle").on("click", ".normal", function () {
    var is_checked = true;

    $(".flex_layout_middle .normal").each(function () {
      is_checked = is_checked && $(this).is(":checked");
      $('.white_box > a').addClass('on');
    });

    var checked2 = $(".flex_layout_middle .normal").is(":checked");
    if (checked2) {
      $('.white_box > a').addClass('on')
    } else {
      $('.white_box > a').removeClass('on')
    }

    $(".all_check_btn>label>#check_btn").prop("checked", is_checked);
  });

  $('.pay_method_tabnav > button').click(function () {
    $('.pay_method_tabnav > button').removeClass('on')
    $(this).addClass('on')
  });

  $('.card_btn').click(function () {
    $('.pay_method_tabcontent > div').css("display", "none")
    $('.pay_method_tabcontent > .card').css("display", "block")
  });

  $('.kakaopay_btn').click(function () {
    $('.pay_method_tabcontent > div').css("display", "none")
    $('.pay_method_tabcontent > .kakaopay').css("display", "block")
  })

  $('.naverpay_btn').click(function () {
    $('.pay_method_tabcontent > div').css("display", "none")
    $('.pay_method_tabcontent > .naverpay').css("display", "block")
  })

  $('.samsungpay_btn').click(function () {
    $('.pay_method_tabcontent > div').css("display", "none")
    $('.pay_method_tabcontent > .samsungpay').css("display", "block")
  })

  $('.deposit_btn').click(function () {
    $('.pay_method_tabcontent > div').css("display", "none")
    $('.pay_method_tabcontent > .deposit').css("display", "block")
  })

  $('.list_nav > button').click(function () {
    $('.list_nav > button').removeClass('on')
    $(this).addClass('on')
  })

  $('.tab_btn_wrap > button').click(function () {
    $('.tab_btn_wrap > button').removeClass('on')
    $(this).addClass('on')
  })

  $('.use_possible').click(function () {
    $('.use_possible_wrap').css("display", "block")
    $('.use_impossible_wrap').css("display", "none")
  })

  $('.use_impossible').click(function () {
    $('.use_possible_wrap').css("display", "none")
    $('.use_impossible_wrap').css("display", "block")
  })

  $('.coupon_pop_btn').click(function () {
    $(".coupon_pop_wrap").css("display", "block")
    $('body').addClass('fix')
  })//쿠폰 등록 팝업

  $('.coupon_pop_close').click(function () {
    $(".coupon_pop_wrap").css("display", "none")
    $('body').removeClass('fix')
  })//쿠폰 등록 팝업

  $('.item_choice').click(function () {
    $(".request_item_choice_popup_wrap").css("display", "block")
    $('body').addClass('fix')
  })//쿠폰 등록 팝업

  $('.popup_close').click(function () {
    $(".request_item_choice_popup_wrap").css("display", "none")
    $('body').removeClass('fix')
  })//쿠폰 등록 팝업


  //input 안에 삭제버튼 나타내기
  $('.text_i nput').on('input', function () {
    if ($(this).val() == '') {
      $(this).siblings('.input_text_delete').css("display", "none");
    } else {
      $(this).siblings('.input_text_delete').css("display", "block");
    }
  });

  //input 안에 삭제버튼 누르면 input텍스트 제거
  $('.input_text_delete').click(function () {
    $(this).siblings('input').val('');
    $(this).css("display", "none");
  })

  $(".order_check").click(function () {
    $('.order_check_content').css("display", "block")
    $('.cancel_check_content').css("display", "none")
  })

  $(".cancel_check").click(function () {
    $('.order_check_content').css("display", "none")
    $('.cancel_check_content').css("display", "block")
  })

  if ($('.gr_box').hasClass('new')) {
    $('.class_img > img').attr("src", "./img/icon/membership-new.png")
    $('.class_text').text("NEW")
    $('.member_class_detail > table > tbody > tr:nth-child(7)').remove()
  }

  if ($('.gr_box').hasClass('bronze')) {
    $('.class_img > img').attr("src", "./img/icon/membership-bronze.png")
    $('.class_text').text("BRONZE")
    $('.member_class_detail > table > tbody > tr:nth-child(7)').remove()
  }

  if ($('.gr_box').hasClass('silver')) {
    $('.class_img > img').attr("src", "./img/icon/membership-silver.png")
    $('.class_text').text("SILVER")
    $('.member_class_detail > table > tbody > tr:nth-child(7)').remove()
  }

  if ($('.gr_box').hasClass('gold')) {
    $('.class_img > img').attr("src", "./img/icon/membership-gold.png")
    $('.class_text').text("GOLD")
    $('.member_class_detail > table > tbody > tr:nth-child(7)').remove()
  }

  if ($('.gr_box').hasClass('vip')) {
    $('.class_img > img').attr("src", "./img/icon/membership-vip.png")
    $('.class_text').text("VIP")
    $('.member_class_detail > table > tbody > tr:nth-child(7)').remove()
  }

  if ($('.gr_box').hasClass('family')) {
    $('.class_img > img').attr("src", "./img/icon/membership-family.png")
    $('.class_text').text("FAMILY")
    $('.gr_box_r').remove()
    $('.member_class_detail > table > tbody > tr:nth-child(7)')
  }


$('.optionItem_wrap > .optionItem').eq(0).click(function(){
  $('.gr_box > div').removeClass('on');
  $('.gr_box > div').eq(0).addClass('on');
})

$('.optionItem_wrap > .optionItem').eq(1).click(function(){
  $('.gr_box > div').removeClass('on');
  $('.gr_box > div').eq(1).addClass('on');
})
$('.optionItem_wrap > .optionItem').eq(2).click(function(){
  $('.gr_box > div').removeClass('on');
  $('.gr_box > div').eq(2).addClass('on');
})

$('.optionItem_wrap > .optionItem').eq(3).click(function(){
  $('.gr_box > div').removeClass('on');
  $('.gr_box > div').eq(3).addClass('on');
})

$('.status_btn_wrap > button').click(function(){
  $('.status_btn_wrap > button').removeClass('on')
  $(this).addClass('on')
})

 if($('.answer_type').hasClass('complete')){
  $(".complete").children('span').text("답변완료");
 }

 $('.delete').click(function(){
  $(this).parents('li').remove();
 })

 $('.mypage_item_request_list_wrap .white_box').click(function(){
    $(this).siblings('.gr_box').toggleClass('on')
 })

$('.item_request_btn').click(function () {
 $(".item_request_popup_wrap").css("display", "block")
 $('body').addClass('fix')
})//상품문의하기 팝업

$('.popup_close').click(function () {
  $(".item_request_popup_wrap").css("display", "none")
  $('body').removeClass('fix')
})//상품문의하기 팝업

$('.item_request_popup_wrap .cancel').click(function () {
  $(".item_request_popup_wrap").css("display", "none")
  $('body').removeClass('fix')
})//상품문의하기 팝업

$('.review_write_btn').click(function () {
  $(".review_write_pop_wrap").css("display", "block")
  $('body').addClass('fix')
 })//구매후기 작성 팝업
 
 $('.popup_close').click(function () {
   $(".review_write_pop_wrap").css("display", "none")
   $('body').removeClass('fix')
 })//구매후기 작성 팝업
 
 $('.review_write_pop_wrap .cancel').click(function () {
   $(".review_write_pop_wrap").css("display", "none")
   $('body').removeClass('fix')
 })//구매후기 작성 팝업


$('.write_possible').click(function(){
  $('.write_possible_content_wrap').css("display","block")
  $('.write_complete_content_wrap').css("display","none")
})//구매후기 탭

$('.write_complete').click(function(){
  $('.write_possible_content_wrap').css("display","none")
  $('.write_complete_content_wrap').css("display","block")
})//구매후기 탭

$('.img_remove_btn').click(function(){
  $(this).parents(".upload_img").remove();
})

$('.item_tab').click(function(){
  $('.item_tab_content').css("display","block")
  $('.brand_tab_content').css("display","none")
})//찜 탭

$('.brand_tab').click(function(){
  $('.item_tab_content').css("display","none")
  $('.brand_tab_content').css("display","block")
})//찜 탭

$('.mypage_info_change_detail_wrap  .change').click(function(){
  $('.confirm_pop_wrap').css("display","block")
  $('body').addClass('fix')
})//회원 2단 팝업

$('.confirm_pop .cancel').click(function(){
  $('.confirm_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//회원 2단 팝업

$('.mypage_pay_card_wrap .card_plus').click(function(){
  $('.card_plus_pop_wrap').css("display","block")
  $('body').addClass('fix')
})//카드 등록 팝업

$('.card_plus_pop_wrap .popup_close').click(function(){
  $('.card_plus_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//카드 등록 팝업

$('.card_plus_pop_wrap .cancel').click(function(){
  $('.card_plus_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//카드 등록 팝업

var deleteTargetIndex = null;

$('.card_delete').click(function(){
  deleteTargetIndex = $(this).closest('li').index();
  $('.card_delete_pop_wrap').css("display","block")
  $('body').addClass('fix')
})//등록된 카드 삭제 팝업

$('.card_delete_pop_wrap .ok').click(function(){
  $('.yes_list li').eq(deleteTargetIndex).remove();
  $('.card_delete_pop_wrap').css("display","none");
  $('body').removeClass('fix')
  deleteTargetIndex = null;
})//등록된 카드 삭제 팝업

$('.card_delete_pop_wrap .cancel').click(function(){
  $('.card_delete_pop_wrap').css("display","none")
  $('body').removeClass('fix')
  deleteTargetIndex = null;
})//등록된 카드 삭제 팝업

$('.mypage_shipping_address_wrap .address_plus').click(function(){
  $('.address_plus_pop_wrap').css("display","block")
  $('body').addClass('fix')
})//배송지 추가 팝업

$(".address_plus_pop_wrap .pop_close").click(function(){
  $('.address_plus_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//배송지 추가 팝업

$(".address_plus_pop_wrap .cancel").click(function(){
  $('.address_plus_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//배송지 추가 팝업

$('.address_delete').click(function(){
  $(this).parents('li').remove();
})//배송지 삭제 버튼

$('.mypage_refund_wrap .refund_plus').click(function(){
  $('.refund_address_pop_wrap').css("display","block")
  $('body').addClass('fix')
})//환불계좌 등록 버튼

$('.refund_address_pop_wrap .pop_close').click(function(){
  $('.refund_address_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//환불계좌 등록 버튼

$('.refund_address_pop_wrap .cancel').click(function(){
  $('.refund_address_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//환불계좌 등록 버튼

$('.service_center_wrap .tab_content > li').click(function(){
  $(this).children('.gr_box').toggleClass('on')
})

$('.tab_button_wrap > button').click(function(){
  $('.tab_button_wrap > button').removeClass('on')
  $(this).addClass('on')
})

$('.map_pop_btn').click(function(){
  $('.map_pop_wrap').css("display","block")
  $('body').addClass('fix')
})//배송지 추가 팝업

$(".map_pop_wrap .pop_close").click(function(){
  $('.map_pop_wrap').css("display","none")
  $('body').removeClass('fix')
})//배송지 추가 팝업

$('.coupon_down').click(function(){
  $('.coupon_down_popup_wrap').css("display","block")
  $('body').addClass('fix')
})//배송지 추가 팝업

$(".coupon_down_popup_top .popup_close").click(function(){
  $('.coupon_down_popup_wrap').css("display","none")
  $('body').removeClass('fix')
})//배송지 추가 팝업



$(document).ready(function() {
  $("#datepicker1, #datepicker2").datepicker({
      showOn:"button",
      buttonImage: "./img/icon/ic-date.png",
      buttonImageOnly: true
  });
  
});

//한글적용을 위해 추가
$.datepicker.setDefaults({
  dateFormat: 'yymmdd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년'
});

});
