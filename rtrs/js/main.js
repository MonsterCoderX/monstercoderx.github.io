var complectSliderSettings1 = {
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay:false,
				arrows:true,
				dots:false,
				prevArrow: "<button type='button' class='slider-arrow prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
				nextArrow: "<button type='button' class='slider-arrow next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
				responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},{
					breakpoint: 880,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
						// variableWidth: true,
					}
				},{
                    breakpoint: 468,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
                        arrows: false
						// variableWidth: true,
					}    
                }]
			}
    $('.complects-slider1').on("init",getInfoTovar).slick(complectSliderSettings1);
    
            var filtered1 = false;
			function filterPacks(sortBy) {
				var slider = $('.complects-slider1')
				
				if (sortBy != 'all') {
					if (filtered1) {
						slider.slick('slickUnfilter')
					}
					slider.slick('slickFilter','[category*="'+sortBy+'"]')
					filtered1 = true;
				} else {
					slider.slick('slickUnfilter')
					filtered1 = false;
				}
			}
			$('.slider-mobile-antenna .package-filter1 .btn').click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                $(".equipment__modal-img").html("");
                $(".equipment__modal-value").html("");
				var filter = $(this).find('input').attr('filter')
				filterPacks(filter)
            });
    
    var filter = $(".package-filter2").find('option:selected').attr('filter');
				filterPacks(filter);

    $(".package-filter2").change(function () {
				var filter = $(this).find('option:selected').attr('filter');
                $(".equipment__modal-img").html("");
                $(".equipment__modal-value").html("");
				filterPacks(filter)
			})


function getInfoTovar() {
    $(".add-item").on("click",function(){
        var eqImgVal = $(this).data("img");
        var eqImg = document.createElement("img");
        eqImg.setAttribute("src",eqImgVal);
        var eqVal = $(this).data("title");
        
        $(".equipment__modal-value").html(eqVal);
        $(".equipment__modal-img").html(eqImg);
        
    });
}
getInfoTovar();   
    
$(document).ready(function(){ 
    $("#fakeLoader").fakeLoader();
    /* Scroll logo */
    
    $(".logo__main").on("click",function(e){
        e.preventDefault();
        $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
    });
    $(".header__nav-item-start").on("click",function(e){
        e.preventDefault();
        $("body,html").animate({
                scrollTop:0
            }, 800);
            return false;
    });
    
    $(".top__banner-wrap-btn a").on("click",function(){
        var bannerH = $(this).attr("href");
        var header = $("header").height();
        
        $("html,body").animate({scrollTop: $(bannerH).offset().top - header},1000);
    });
    
     $(".top__banner-btn").on("click",function(){
        var bannerH = $(this).attr("href");
        var header = $("header").height();
        
        $("html,body").animate({scrollTop: $(bannerH).offset().top - header},1000);
    });
    
    /* Показать seo-слайд Как это работает*/
    
//    $(".how__slide-link").on("click",function(e){
//        var hMain = $(".how").find(".link__m").attr("href");
//        var hInner = $(this).attr("href");
//        window.history.pushState("","",hMain + "/" + hInner);
//        $(this).closest(".how__slide1").addClass("animated fadeOutLeft");
//        $(".how__slide2").addClass("animated fadeInRight").css("visibility","visible");
//        e.preventDefault();
//   }); 
//    $(".how__slide-close").on("click",function(e){
//        var how = $(this).attr("href");
//        window.history.pushState("","",how);
//        $(this).closest(".how__slide2").removeClass("animated fadeInRight");
//        $(this).closest(".how__slide2").addClass("animated fadeOutRight");
//        $(".how__slide1").removeClass("animated fadeOutLeft");
//        $(".how__slide1").addClass("animated fadeInLeft");
//        
//        setTimeout(function(){
//            $(".how__slide1").removeClass("animated fadeInLeft"); 
//            $(".how__slide1").removeAttr("style"); 
//            $(".how__slide2").removeClass("animated fadeOutRight"); 
//            $(".how__slide2").removeAttr("style"); 
//        },1000);
//        e.preventDefault();
//   });
    
//    $(window).on("load",function(){
//        window.history.pushState("","",window.location.pathname);
//    });
    
    /* Каналы*/
//    $(".channel__slide-link").on("click",function(e){
//        var chMain = $(".channel").find(".link__m").attr("href");
//        var chInner = $(this).attr("href");
//        window.history.pushState("","",chMain + "/" + chInner);
//       $(this).closest(".channel__slide1").addClass("animated fadeOutLeft");
//        $(".channel__slide2").addClass("animated fadeInRight").css("visibility","visible");
//        e.preventDefault();
//   }); 
//    $(".channel__slide-close").on("click",function(e){
//        var ch = $(this).attr("href");
//        window.history.pushState("","",ch);
//        $(this).closest(".channel__slide2").removeClass("animated fadeInRight");
//        $(this).closest(".channel__slide2").addClass("animated fadeOutRight");
//        $(".channel__slide1").removeClass("animated fadeOutLeft");
//        $(".channel__slide1").addClass("animated fadeInLeft");
//         setTimeout(function(){
//            $(".channel__slide1").removeClass("animated fadeInLeft"); 
//            $(".channel__slide1").removeAttr("style"); 
//            $(".channel__slide2").removeClass("animated fadeOutRight"); 
//            $(".channel__slide2").removeAttr("style"); 
//        },1000);
//        e.preventDefault();
//   }); 
    
    /* Преимущества */
//    $(".advantage__slide-link").on("click",function(e){
//        var adMain = $(".advantage").find(".link__m").attr("href");
//        var adInner = $(this).attr("href");
//        window.history.pushState("","",adMain + "/" + adInner);
//        $(this).closest(".advantage__slide1").addClass("animated fadeOutLeft");
//        $(".advantage__slide2").addClass("animated fadeInRight").css("visibility","visible");
//        e.preventDefault();
//   }); 
//    $(".advantage__slide-close").on("click",function(e){
//        e.preventDefault();
//        var adMain = $(this).attr("href");
//        window.history.pushState("","",adMain);
//        $(this).closest(".advantage__slide2").removeClass("animated fadeInRight");
//        $(this).closest(".advantage__slide2").addClass("animated fadeOutRight");
//        $(".advantage__slide1").removeClass("animated fadeOutLeft");
//        $(".advantage__slide1").addClass("animated fadeInLeft");
//        
//        setTimeout(function(){
//            $(".advantage__slide1").removeClass("animated fadeInLeft"); 
//            $(".advantage__slide1").removeAttr("style"); 
//            $(".advantage__slide2").removeClass("animated fadeOutRight"); 
//            $(".advantage__slide2").removeAttr("style"); 
//        },1000);
//   }); 
    
    //    $(".cart__close").bind("click",function(e){
      $(".cart__close").click(function(){

        console.log("КЛИК");
//        $(this).parents(".jqcart-layout").remove();
    });

    /* Scroll down */
    
    
    $('.how .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
    
    /* Accordion */
    
    $(".question__accordion-item").on("click",function(e){
        e.preventDefault();
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).find(".question__accordion-item-text").slideUp();
        }else {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(this).siblings().find(".question__accordion-item-text").slideUp();
            $(this).find(".question__accordion-item-text").slideDown();
        }
    });
    
    $(document).on("click",function(e){
        if($(e.target).closest(".question__accordion-list").length)
            return;
        $(".question__accordion-item").find(".question__accordion-item-text").slideUp();
        $(".question__accordion-item").find("i").removeClass("active");
    });
    
    
     /* Init mixit up */
    
    $("#container").mixItUp();
    
    var $container = $("#equipment__antenna-container");
    
    $('.equipment__antenna-btn button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  
          itemSelector: '.item', 
          filter: selector
      });
      return false;
    });  
    /* Filter equipment */
    
    $(".equipment__console-roller").change(function(){
        var eqVal = Number($(this).val());
        console.log(eqVal);
        switch(eqVal) {
            
            case 1:
                $(".equipment__console-btn-all").click();
                break;
            case 2:
                $(".equipment__console-btn-middle").click(); 
                break;
            case 3:
                $(".equipment__console-btn-good").click(); 
                break;
            case 4:
                $(".equipment__console-btn-excellent").click(); 
                break;
            default:
                break;
        };
    });
    
    $(".equipment__console-slider-item").on("click",function(){
        var eqSlide = $(this).data("filter");
        
        switch(eqSlide) {
            case "all":
                $(".equipment__console-roller").val(1);
                break;
            case ".middle":
                $(".equipment__console-roller").val(2);
                break;
            case ".good":
                $(".equipment__console-roller").val(3);
                break;
            case ".excellent":
                $(".equipment__console-roller").val(4);
                break;
            }
    });
    
     /* Cart equipment*/
    // инициализация плагина
        $.jqCart({
            buttons: '.add-item',        // селектор кнопок, аля "Добавить в корзину"
            handler: '/php/handler.php', // путь к обработчику
            visibleLabel: false,         // показывать/скрывать ярлык при пустой корзине (по умолчанию: false)
            openByAdding: false,         // автоматически открывать корзину при добавлении товара (по умолчанию: false)
            currency: 'руб.',          // валюта: строковое значение, мнемоники (по умолчанию "$")
            cartLabel: '.label-place'    /* селектор элемента, где будет размещен ярлык, 
                                            он же - "кнопка" для открытия корзины */
        });
    
     $('#open').click(function(){
		$.jqCart('openCart'); 
         
        var jcHeight = $(".jqcart-layout").height();
        var jChHeight = $(".jqcart-checkout").height();
         
        if(jChHeight > jcHeight) {
            $(".jqcart-layout").addClass("active");
        }else {
            $(".jqcart-layout").removeClass("active");    
        }
	});
    
    $("#equipment__item-console-btn").fancybox();
    /* Equipment modal */
    $(".add-item").on("click",function(){
        var eqImgVal = $(this).data("img");
        var eqImg = document.createElement("img");
        eqImg.setAttribute("src",eqImgVal);
        var eqVal = $(this).data("title");
        
        $(".equipment__modal-value").html(eqVal);
        $(".equipment__modal-img").html(eqImg);
        
    });
    
    $(".owl-carousel").owlCarousel({});
    
    
   /* Feedback modal*/
    
    
    
    $(".equipment__antenna-btn button").on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    
    
    $(".cart__close .fa").on("click",function(){
        $(".form__send").find("input[type='reset']").click();   
    });
    
    
    
    $(".equipment__modal-cont").on("click",function(e){
        e.preventDefault();  
        $(this).closest(".equipment__modal").find(".fancybox-close-small").click();
    });
    
    $(".equipment__modal-go").on("click",function(e){
        e.preventDefault();  
        $(this).closest(".equipment__modal").find(".fancybox-close-small").click();
        $("#open").click();
    });
    
    
    
    /* Filter mobile */
    
    $(".slider-mobile-console-list .owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
    
    /*$(".cart__close").on("click",function(){
        $(".jqcart-layout").trigger("click");    
    });*/
    function hideScroll() {
        if($(".jqcart-layout").is(":hidden")) {
            $("body").css("overflow-y","scroll");    
        }else {
            $("body").css("overflow-y","hidden");    
        }
    };
    
    /* Console */
    var complectSliderSettings = {
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				autoplay:false,
				arrows:true,
				dots:false,
				prevArrow: "<button type='button' class='slider-arrow prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
				nextArrow: "<button type='button' class='slider-arrow next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
				responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},{
					breakpoint: 880,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
						// variableWidth: true,
					}
				},{
                    breakpoint: 468,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots:true,
                        arrows: false
						// variableWidth: true,
					}    
                }]
			}
    $('.complects-slider').slick(complectSliderSettings);
    
    
    var filtered = false;
			function filterPacks(sortBy) {
				var slider = $('.complects-slider')
				
				if (sortBy != 'all') {
					if (filtered) {
						slider.slick('slickUnfilter')
					}
					slider.slick('slickFilter','[category*="'+sortBy+'"]')
					filtered = true;
				} else {
					slider.slick('slickUnfilter')
					filtered = false;
				}
			}
			$('.slider-mobile-console .package-filter .btn').click(function () {
				var filter1 = $(this).find('input').attr('filter')
				filterPacks(filter1)
			});
    
    $(".equipment__console-roller-mob").change(function(){
        var rollerMob = Number($(this).val());
        
        switch(rollerMob) {
            case 1: 
                $(this).closest(".slider-mobile-console").find(".slider__mob-all").click();
                break;
            case 2: 
               $(this).closest(".slider-mobile-console").find(".slider__mob-middle").click(); 
                break;
            case 3: 
               $(this).closest(".slider-mobile-console").find(".slider__mob-good").click(); 
                break;
            case 4: 
               $(this).closest(".slider-mobile-console").find(".slider__mob-excellent").click(); 
                break;
            };
    });
    
    /* Cart scroll */
    
    $(window).scroll(function(){
        var eqTop = $(".equipment").offset().top;
        var quTop = $(".question").offset().top;
        var cartPos = $(".equipment__cart").position().top;
        
        if($(window).scrollTop() > eqTop - cartPos) {
            $(".equipment__cart").css("opacity","1");
            $(".equipment__cart").css("visibility","visible");
        }else {
            $(".equipment__cart").css("opacity","0");
            $(".equipment__cart").css("visibility","hidden");   
        }
    });
    
    $(window).scroll(function(){
        var eqTop = $(".equipment").offset().top;
        var eqH = $(".equipment").height();
        var cartPos = $(".equipment__cart").position().top;
        
        if($(window).scrollTop() > eqTop + (eqH - cartPos+200)) {
            $(".equipment__cart").css("opacity","0");
            $(".equipment__cart").css("visibility","hidden");
        }else {
            
        }
    });
    
    
    
   /* Remove animate class modal */ 
    
   $(".fancybox-close-small").bind("click",function(){
       $(this).closest(".fancybox-container").find(".result").removeClass("animated bounceInLeft");
       console.log("Ok");
   });
    
//    $(".equipment__cart").on("click",function(){
//        $("body").addClass("body__lock");
//    });
    
    $(".result__close").on('click',function() {
        setTimeout(function(){
            $.fancybox.close();    
        },1000);

    });
    
    $(".feedback__modal-btn").on("click",function(e){
      e.preventDefault();  
    });
    
    $(".feedback__modal-close").on("click",function(e){
        e.preventDefault();
        $(this).closest(".feedback__modal").find(".fancybox-close-small").click();
    });
    
    $(".cart__modal-btn").on("click",function(e){
      e.preventDefault();  
    });
    
    $(".cart__modal-close").on("click",function(e){
        e.preventDefault();
        $(this).closest(".cart__modal").find(".fancybox-close-small").click();
    });

//    function isScrolledIntoView(elem)
//{
//    var $elem = $(elem);
//    var $window = $(window);
//
//    var docViewTop = $window.scrollTop();
//    var docViewBottom = docViewTop + $window.height();
//
//    var elemTop = $elem.offset().top;
//    var elemBottom = elemTop + $elem.height();
//
//    return ((elemBottom = docViewTop));
//}
//
//$(window).scroll(function() {
//    if (isScrolledIntoView(".advantage")) { window.history.pushState("state", "title", "/advantage"); return; }
//    if (isScrolledIntoView(".channel")) { window.history.pushState("state", "title", "/channel"); return; }
//    if (isScrolledIntoView(".how")) { window.history.pushState("state", "title", "/how"); return; }
//    if (isScrolledIntoView(".equipment")) { window.history.pushState("state", "title", "/equipment"); return; }
//}); 
    var headerH = $("header").height();
    
    var waypoint = new Waypoint({
        element: document.getElementById('advantage'),
        handler: function(direction) {
            var advH = $(".advantage").find(".link__m").attr("href");
            if(direction === "down") {
                window.history.pushState("", "", "/rtrs2017/" + advH);   
            }
        },
        offset: headerH
    });
    
    var waypoint = new Waypoint({
        element: document.getElementById('channel'),
        handler: function(direction) {
            var advH = $(".advantage").find(".link__m").attr("href");
            var chH = $(".channel").find(".link__m").attr("href");
            if(direction === "down") {
                window.history.pushState("", "", "/rtrs2017/" + chH); 
            }else {
                window.history.pushState("", "", "/rtrs2017/" + advH);    
            }
        },
        offset: headerH
    });
    
    var waypoint = new Waypoint({
        element: document.getElementById('how'),
        handler: function(direction) {
            var chH = $(".channel").find(".link__m").attr("href");
            var howH = $(".how").find(".link__m").attr("href");
            if(direction === "down") {
                window.history.pushState("", "", "/rtrs2017/" + howH);
            }else {
                window.history.pushState("", "", "/rtrs2017/" + chH);    
            }
        },
        offset: headerH
    });
    
     var waypoint = new Waypoint({
        element: document.getElementById('equipment'),
        handler: function(direction) {
            var eqH = $(".equipment").find(".link__m").attr("href");
            var howH = $(".how").find(".link__m").attr("href");
            if(direction === "down") {
                window.history.pushState("", "", "/rtrs2017/" + eqH);
            }else {
                window.history.pushState("", "", "/rtrs2017/" + howH);    
            }
        },
         offset: headerH
    });
    
    var waypoint = new Waypoint({
        element: document.getElementById('question'),
        handler: function(direction) {
            var eqH = $(".equipment").find(".link__m").attr("href");
            var quH = $(".question").find(".link__m").attr("href");
            if(direction === "down") {
                window.history.pushState("", "", "/rtrs2017/" + quH);
            }else {
                window.history.pushState("", "", "/rtrs2017/" + eqH);    
            }
        },
        offset: headerH
    });
    
    
    
    window.onload = function () {
        
//         setTimeout(function(){
//                $('#preloader').fadeOut(500);
//             $("body").removeClass("body__lock");
//        },1000); 
        
        var w = window.location.hash;  
        var headerH = $("header").height();
        
        switch(w) {
            case "#kanaly":
                $('html, body').animate({
                    scrollTop: $('#channel').offset().top - headerH
                }, 2000);      
            break;
            case "#kak_eto_rabotaet":
                $('html, body').animate({
                    scrollTop: $('#how').offset().top - headerH
                }, 2000);      
            break;
            case "#preimushchestva_besplatnogo_efirnogo_televideniya":
                $('html, body').animate({
                    scrollTop: $('#advantage').offset().top - headerH
                }, 2000)     
            break;
            case "#preimushchestva_besplatnogo_efirnogo_televideniya/besplatnoye_tsifrovoye-televideniye":
                $('html, body').animate({
                    scrollTop: $('#advantage').offset().top - headerH
                }, 2000,function(){
                    $(".advantage__slide-link").click();   
                    window.location.pushState("","","#preimushchestva_besplatnogo_efirnogo_televideniya/besplatnoye_tsifrovoye-televideniye");
                });  
            break;
                case "#kanaly/kanaly_tsifrovogo_televideniya":
                $('html, body').animate({
                    scrollTop: $('#channel').offset().top - headerH
                }, 2000,function(){
                    $(".channel__slide-link").click();   
                    window.location.pushState("","","kanaly/kanaly_tsifrovogo_televideniya");
                });  
            break;
                case "#kak_eto_rabotaet/kak_rabotaet_tsifrovoe_televideniya":
                $('html, body').animate({
                    scrollTop: $('#how').offset().top - headerH
                }, 2000,function(){
                    $(".how__slide-link").click();   
                    window.location.pushState("","","#kak_eto_rabotaet/kak_rabotaet_tsifrovoe_televideniya");
                });  
            break;
            case "#oborudovaniye":
                $('html, body').animate({
                    scrollTop: $('#equipment').offset().top - headerH 
                }, 2000)     
            break;
            case "#zaday_vopros":
                $('html, body').animate({
                    scrollTop: $('#question').offset().top - headerH 
                }, 2000)
//                var wid = $(window).width();
//                if(wid < 1366) {
//                var equiH = $('#equipment').height();
//                $('html, body').animate({
//                    scrollTop: $('#equipment').offset().top + (equiH + 10)
//                }, 1000)     
//                }else if(wid < 768) {
//                    var equiH = $('#equipment').height();
//                    $('html, body').animate({
//                        scrollTop: $('#question').offset().top 
//                }, 1000)    
 
                break;
            }
        
        $(".header__nav-item a").on("click",function(e){
            e.preventDefault();
            var headerH = $("header").height();
            var el1 = $(this).attr("href");
            $("html,body").animate({scrollTop: $(el1).offset().top - headerH},1000);
        
            return false;
    });
//        setTimeout(function(){
//            window.history.pushState("","",window.location.pathname);    
//        },1000);
   };
    
    $(".form__send input[type='submit']").on("click",function(e){
        e.preventDefault();   
    });
    
//    $(".header__modal a").on("click",function(e){
//        e.preventDefault();   
//    });
//    
//    $(".feedback__checkbox a").on("click",function(e){
//        e.preventDefault();   
//    });
//    window.onbeforeunload = function() {
//        window.history.pushState("","",window.location.pathname);        
//    };
//    var links,
//        updateState,
//        contentEl,
//        navEl;
//    
//    
//    navEl = document.querySelector(".link");
//    
//    updateState = function(state) {
//        if(!state) return;
//    };
//    
//    window.addEventListener("popstate",function(e){
//        updateState(e.state);
//    });
//    
//    
//    navEl = addEventListener("click",function(e){
//        var state;
//        
//        if(e.target.tagName !== "a") return;
//        
//        state = {page: e.target.getAttribute("href")};
//        
//        history.pushState(state,"",state.page);
//        updateState(state);
//        
//        e.preventDefault();
//        
//        $(".channel__slide1").addClass("animated fadeOutLeft");
//        $(".channel__slide2").addClass("animated fadeInRight").css("visibility","visible");
//    });

    $(".equipment__console-slider-item-mobile").on("click",function(){
        var eqMobile = $(this).data("f");
        
        switch(eqMobile) {
            case ".all":
                $(".slider-mobile-console").find(".slider__mob-all").click();
                $(".equipment__console-roller-mob").val(1);
                break;
            case ".middle":
                $(".slider-mobile-console").find(".slider__mob-middle").click();  
                $(".equipment__console-roller-mob").val(2);
                break;
            case ".good":
                $(".slider-mobile-console").find(".slider__mob-good").click();  
                $(".equipment__console-roller-mob").val(3);
                break;
            case ".excellent":
                $(".slider-mobile-console").find(".slider__mob-excellent").click(); 
                $(".equipment__console-roller-mob").val(4);
                break;
            }
    });
    
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
