$("a.scroll").click(function(t){t.preventDefault(),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},800)});