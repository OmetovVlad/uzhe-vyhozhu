// используется только для демонстрации верстки!!!!

// ПОДПИСКА ОФОРМЛЕНА
$('.subscribe button').click(function (event) {
    event.preventDefault();
    $(this).parents('.subscribe').addClass('sended');
});

// ПОДСКАЗКИ В ПОИСКЕ
$('.search-form input[name="search"]').bind('keyup change',function(){
    if(this.value.length > 0){
      $('.search-form .search_result').addClass('open');
    }
    else {
      $('.search-form .search_result').removeClass('open');
    }
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".search-form .search_result");
    if (div.hasClass('open')){
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.search-form .search_result').toggleClass('open');
      }
    }
  });
});
// END

// 


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

AOS.init();

// INSTAGRAM виджет
(function ($) {
    $(window).on('load', function () {
        $.instagramFeed({
            'username': 'uzhe_vyhozhu', //Имя пользователя
            'container': "#instafeed", //Контейнер для изображений
            'styling': false,
            'display_profile': false, //Отображение профиля
            'display_biography': false, //Отображение биографии
            'display_gallery': true, //Отображение галереи
            'styling': true, //Стандартные стили библиотеки
            'items': 4, //Количество изображений в галереи
            'items_per_row': 4, //Количество изображений в ряд
            'margin': 0.5 //Отступ между изображениями
        });
    });
})(jQuery);
//

// выпадающие списка
$(".select_list").click(function () {
    if( $(this).hasClass('open') ){
        $(".select_list").removeClass("open");
    }else{
        $(".select_list").removeClass("open");
	    $(this).toggleClass("open");   
    }
});

$(".select_list .list label span").click(function () {
	$(".select_list").removeClass("open");
	name = $(this).text();
	$(this).parents('.select_list').find('.header').find('span').text(name);
});

$(document).mouseup(function (e){
	select_list = $(".select_list");
	if (!select_list.is(e.target) && select_list.has(e.target).length === 0) {
		$(".select_list").removeClass('open');
	}
});
// end

// +/- счетчик
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
//end

// Remove item
$('.item .del').click(function () {
    $(this).parents('.item').remove();
});
//end

//right modals
$('.open-right-modal').click(function (event) {
	event.preventDefault();
    $(".right-modal").removeClass('open');
    $("#" + $(this).data('id') +".right-modal").addClass('open');
    $('.overflow').addClass('open');
    $('body').addClass('ovh');
});

$('.right-modal .close').click(function () {
    $('.right-modal').removeClass('open');
    $('.overflow').removeClass('open');
    $('body').removeClass('ovh');
});
//

// filter
$('.filter .head').click(function () {
    $(this).parent().toggleClass('open');
});
//

// Drop Down text
$('.dropdown_list .dropdown .head').click(function () {
    $(this).parent().toggleClass('open');
    $(this).parent().find('.content').slideToggle()
});
//end

$('.open-search').click(function () {
    $(this).toggleClass('open');
    $('header.header .menu').toggleClass('hide');
    $('header.header .search-form').toggleClass('open');
});

$('.overflow').click(function () {
    $('.right-modal').removeClass('open');
    $('.overflow').removeClass('open');
    $('body').removeClass('ovh');
});


// SLIDERS
$('.photo_list_mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});

$('.recommend-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: $('#prev-slide'),
    nextArrow: $('#next-slide'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToScroll: 3,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 330,
            settings: {
                arrows: false,
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});
// end

// cookie
if ( $.cookie('use_cookie') != 'yes' ) {
    $('.cookie').removeClass('hide');
}

$('.cookie .close').click(function () {
    $.cookie('use_cookie', 'yes');
    $('.cookie').addClass('hide');
});

if ( $.cookie('use_cookie') == 'yes' ) {
    $('.cookie').addClass('hide');
}
// end






$('[required]').each(function() {
    $(this).prop('required', false).attr('data-required', 'true');
}).click(function() {
    $(this).removeClass('not-valid');
});

$('[data-regexp-input]').keypress(function(e) {
    if(e.key || [46, 8, 37, 38, 39, 40].indexOf(e.keyCode) == -1) { 
      if(!new RegExp($(this).data('regexp-input'), "g").test(e.key)) {
        e.preventDefault();
        return false;
      }  
    }
});
  
$('[data-regexp-block]').keypress(function(e) {
    if(new RegExp($(this).data('regexp-block'), "g").test(e.key)) {
      e.preventDefault();
      return false;
    }  
});

function checkRegexp(o, e) {
      var $this = $(o);
      $this.removeClass('not-valid'); 
      if($this.data('regexp') && $this.data('regexp') != '') {
        if($this.parent().find('span.error-message').length == 0) {
          $this.parent().append('');
        }
        if($this.val() == '' && $this.data('required')) {
            $this.removeClass('not-red');
            $this.addClass('not-valid');
            if($this.val() == ''){
                $this.addClass('not-red');
            }
        } else {
          if(!new RegExp('^' + $this.data('regexp') + '$', 'g').test($this.val())) {
              $this.removeClass('not-red');
              $this.addClass('not-valid');
              if($this.val() == ''){
                    $this.addClass('not-red');
                }
          }
        }
      }
      $this.closest('form').find('[type="submit"]').prop('disabled', $this.closest('form').find('input.not-valid').length != 0);
      $this.closest('form').find('button').prop('disabled', $this.closest('form').find('input.not-valid').length != 0);
}

$('input[data-regexp]').click(function() {
      $(this).removeClass('not-valid');
}).keyup(function(e) {
      checkRegexp(this, e);
}).blur(function(e) {
      checkRegexp(this, e);
});





















