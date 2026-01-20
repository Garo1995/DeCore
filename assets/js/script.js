window.onscroll = function() {myFunction()};

var nav = document.querySelector("header");
var header = document.querySelector(".for-fixed");

var prt = nav.parentElement;

var sticky = nav.offsetTop+100;
function myFunction() {
    var wdth = window.innerWidth
    if(wdth<257){
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            prt.classList.add('menu-change');
            header.style.paddingTop = '0';

        } else {
            nav.classList.remove("sticky");
            prt.classList.remove('menu-change');
            header.style.paddingTop = '0';
        }
    }else{
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            prt.classList.add('menu-change');
            $('body').css({'margin-top':'172px'})
        } else {
            nav.classList.remove("sticky");
            prt.classList.remove('menu-change');
            $('body').css({'margin-top':'0'})

        }
    }

}


$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu');
                $('.menu-cnt').addClass('transition-menu');
            })
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu')
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '1', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});



$('.soft-furniture__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

});


$('.view-portfolio-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

});


$('.what-customers__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

});



$('.feedback-customers__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }

    ]
});

$('.sidenav ul li ').on('click',function(){
    $(this).toggleClass('sidenav__info')
})



$(document).ready(function () {




    if($('.sidenav ul li').has('sidenav__drop')){
        $('.sidenav__drop').parent().addClass('sidenav__active');
    }
    if($('.menu-down ul li').has('sidenav__drop')){
        $('.menu-down__ap').parent().addClass('menu-down__active');
    }
    





    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info',  'active-href', 'click-reviews');

    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info',  'active-href', 'click-reviews');
    })

    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({ display: 'none', height:0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({ display: 'block', height: 'auto'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({ display: 'block', height: 'auto'});

                }
            })
        }
    }

});



$('.btn-modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({overflow: 'hidden '})
    modal.fadeIn()

})

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')

    setTimeout(function () {
        prt.fadeOut();
    }, 100)
    $('body').css({overflow: 'visible '})
})

$(window).on('click', function (event) {
    $('.modal__min').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content')

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
            $('.drp-seting').css({display: 'none'})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
            $('.drp-seting').css({display: 'none'})

        }
    })
})

$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

