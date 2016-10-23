var consulta = window.matchMedia('(max-width: 1024px)');

consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById('iconMenu');
var $menu = document.getElementById('menu');

function toggleMenu(){
    $menu.classList.toggle('menu-show');
}

function showMenu(){
    $menu.classList.add('menu-show');
}


function hideMenu(){
    $menu.classList.remove('menu-show');
}


function mediaQuery() {
    if(consulta.matches){
        $burguerButton.addEventListener('click', toggleMenu);
    }else{
        $burguerButton.removeEventListener('click', toggleMenu);
    }
}

mediaQuery();
// touchstart


$('#iconMenu').on('click', function(){
   $('.menu__movil').toggleClass('click-color');
});

/*  Stiky Menu*/

var $nav = $('nav');
var qs = $('.sectionabout');
// var $qsTop = qs.offset().top;
// console.log($qsTop);

var $qsTop = 300;

var colornav = function () {
	var $scrollTop = $(window).scrollTop();
	if ($scrollTop >= $qsTop ) {
		$nav.addClass('stiky');

	}else if($scrollTop <= $qsTop){
        $nav.removeClass('stiky');
    }

};
$(window).resize(colornav);
$(window).on('scroll',colornav);



// Footer


var consultaFooter = window.matchMedia('(min-width: 1025px)');
consulta.addListener(mediaQuery);

var $imageSrc = $('#imageFooter');

if(consultaFooter){
    $imageSrc.attr('src', './images/bg-footer--web.svg');
}


$('.menu__animate  ').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 800);
	$(this).parent().parent().slideToggle();
	$('.menu').removeClass('menu-show').addClass('menu-none').removeClass('menu-none');
});


$('.menu__animateP').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 800);
	$(this).parent().parent().slideToggle();
	$('.menu').removeClass('menu-show').addClass('menu-none').removeClass('menu-none');
});




$('.menu__animateT').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 800);
	$(this).parent().parent().slideToggle();
	$('.menu').removeClass('menu-show').addClass('menu-none').removeClass('menu-none');
});


