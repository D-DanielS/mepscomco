function toggleMenu(){$menu.classList.toggle("menu-show")}function showMenu(){$menu.classList.add("menu-show")}function hideMenu(){$menu.classList.remove("menu-show")}function mediaQuery(){consulta.matches?$burguerButton.addEventListener("click",toggleMenu):$burguerButton.removeEventListener("click",toggleMenu)}var consulta=window.matchMedia("(max-width: 1024px)");consulta.addListener(mediaQuery);var $burguerButton=document.getElementById("iconMenu"),$menu=document.getElementById("menu");mediaQuery(),$("#iconMenu").on("click",function(){$(".menu__movil").toggleClass("click-color")});var $nav=$("nav"),qs=$(".sectionabout"),$qsTop=300,colornav=function(){var e=$(window).scrollTop();e>=$qsTop?$nav.addClass("stiky"):e<=$qsTop&&$nav.removeClass("stiky")};$(window).resize(colornav),$(window).on("scroll",colornav);var consultaFooter=window.matchMedia("(min-width: 1025px)");consulta.addListener(mediaQuery);var $imageSrc=$("#imageFooter");consultaFooter&&$imageSrc.attr("src","./images/bg-footer--web.svg"),$(".menu__animate  ").click(function(e){e.preventDefault(),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},800),$(this).parent().parent().slideToggle(),$(".menu").removeClass("menu-show").addClass("menu-none").removeClass("menu-none")}),$(".menu__animateP").click(function(e){e.preventDefault(),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},800),$(this).parent().parent().slideToggle(),$(".menu").removeClass("menu-show").addClass("menu-none").removeClass("menu-none")}),$(".menu__animateT").click(function(e){e.preventDefault(),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},800),$(this).parent().parent().slideToggle(),$(".menu").removeClass("menu-show").addClass("menu-none").removeClass("menu-none")});