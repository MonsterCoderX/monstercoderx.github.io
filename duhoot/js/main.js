$(document).ready(function(){
        var preloader = $(".preloader");
        setTimeout(function(){
            preloader.fadeOut();
        },1000)
    
    var mixer = mixitup('#container__post');
    
/* Filter element active */
    $(".filter-left__item").on("click",function(){
        if($(this).hasClass(".filter-left__item--active")) {
            $(this).removeClass("filter-left__item--active");
        }else {
            $(this).addClass("filter-left__item--active");
            $(this).siblings().removeClass("filter-left__item--active");  
        }
    });
    
    
    $(".filter-right__item").on("click",function(){
        if(!$(this).hasClass(".filter-right__item--active")) {
            $(this).addClass("filter-right__item--active");  
            $(this).siblings().removeClass("filter-right__item--active");
        }
    });
    /* FIlter center select */
    
    $(".filter-center__select").change(function(){
        var filterVal = Number($(this).val());
        
        switch(filterVal) {
            case 0:
                $(this).parent().find(".filter-left__item--all").trigger("click");
            break;
            case 1:
                $(this).parent().find(".filter-left__item--dubai").trigger("click");
            break;
            case 2:
                $(this).parent().find(".filter-left__item--egypt").trigger("click");    
            break;
            case 3:
                $(this).parent().find(".filter-left__item--turkey").trigger("click");
            break;
            default:
            break;
        }
                    
    });
    
/* Offer tab */
    var offerTab = $(".offer-tab__content-list");
    offerTab.hide();
    offerTab.filter(":first").show();
    
    $(".offer-tab__link").on("click",function(e){
        var tabLink = $(this).attr("href");
        e.preventDefault();
        offerTab.hide();  
        offerTab.filter(this.hash).show();
        history.pushState('', document.title, window.location.pathname);
        
        
        if(!$(this).hasClass("offer-tab__link--active")) {
            $(this).addClass("offer-tab__link--active");
            $(this).closest(".offer-tab__item").siblings().find("a").removeClass("offer-tab__link--active");    
        }
    });
   
    /* Mobile menu */
    
    $(".mobile-menu__btn").on("click",function(){
        var mobileMenu = $(".mobile-menu");
        if(!$(".mobile-menu__btn").hasClass("mobile-menu__btn--active")) {
            $(this).addClass("mobile-menu__btn--active");
            mobileMenu.addClass("mobile-menu--active");
        }else {
            $(this).removeClass("mobile-menu__btn--active");  
            mobileMenu.removeClass("mobile-menu--active");
        }
    });
    
    /* Sizing */
    
    $(".mobile-filter__btn").on("click",function(e){
        e.preventDefault();
        if ($(".mobile-filter__content").is(":hidden")) {
            $(".mobile-filter__content").slideDown(300);  
        }else {
            $(".mobile-filter__content").slideUp(300);   
        }
    });
    
    $(document).on("click",function(e){
        if (!$(e.target).closest(".header").length) {
            $(".mobile-menu").removeClass("mobile-menu--active");
            $(".mobile-menu__btn").removeClass("mobile-menu__btn--active");
        }
          e.stopPropagation();
    });
    
/* Select plugin */
    
    $(".header-offer__form-country").styler();
    $(".header-offer__form-education").styler();
});
