
$(function () {
  $(".slider").slick({
    arrow: true,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    dots: true,
    // fade: true,
    slidesToShow: 2,
    speed: 1000,
    variableWidth: true,
    centerMode: true,
    centerPadding: '30%',
    cssEase: 'linear',
  });
});


$(function () {
  $(".item_wrap_pc").slick({
    arrow: true,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    dots: true,
    // fade: true,
    slidesToShow: 2,
    speed: 1000,
    variableWidth: true,
    centerMode: true,
    centerPadding: '30%',
    cssEase: 'linear',
  });
});





$(function(){
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = 0;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }
  });
});


$(function(){
	$(".btn-gnavi").click(function(){
		$(".header-nav").slideToggle(400);
	});
	$(".header-nav li a").click(function(){
		$(".btn-gnavi").css({display:"none"});
	});
});







$(function () {
  var topBtn = $('.footer-center'); // ボタンを指定
  topBtn.hide(); //最初は隠しておく。CSSで隠してもオッケー
 
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) { // 100px以上スクロールしたら出てくる
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
 
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("#footer").innerHeight(); // ここでフッターの高さを取得
    if ( scrollHeight - scrollPosition  <= footHeight ) { // フッター付近まで来たら
      topBtn.css({
        "position":"absolute",
        "bottom": footHeight + 0 // フッターの65px上で止まる
      });
    } else { // それ以外は画面下から20pxの位置に固定
      topBtn.css({
      "position":"fixed",
    });
    }
 
  });
});



$(function () {
  setTimeout('scroll_wrap()'); //アニメーションを実行
});

function scroll_wrap() {
  $('.scroll_wrap span').animate({
      marginTop: '-=10px'
  }, 800).animate({
      marginTop: '+=10px'
  }, 800);
  setTimeout('scroll_wrap()', 1900); //アニメーションを繰り返す間隔
}






$(window).scroll(function (){
  $('.mainvisual_text').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 0){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.main_content_title').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.concept_text').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.menu-wrap h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.menu-wrap img').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('active');
          }
      });
});







$(window).scroll(function (){
  $('.room-wrap h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('active');
          }
      });
});




$(window).scroll(function (){
  $('.concept').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});

$(window).scroll(function (){
  $('.event-content').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.event img').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.gallery-h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.gallery-item').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.gallery_item_pc').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.top_text_block').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.gallery-wrap h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.item').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.item_even').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});






$(window).scroll(function (){
  $('.item h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.item_even h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.item_box').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.item_box_even').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.food_menu h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.food_menu img').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.product').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.food_menu_pc').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});

$(window).scroll(function (){
  $('.drink_menu_pc').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.course_menu_pc').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.drink_menu h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.drink_menu img').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.food_menu img').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});



$(window).scroll(function (){
  $('.course_menu h2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});


$(window).scroll(function (){
  $('.course_menu img').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 40){
            $(this).addClass('active');
          }
      });
});





