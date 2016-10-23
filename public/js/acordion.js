$('.acordeon').on('click','.acordeon__contenedor__title',function(){
    var t = $(this);
    var tp = t.next();
    var items = $('.acordeon__contenedor__item');
    if(tp[0].classList[(tp[0].classList.length - 1)] === 'active'){
        tp.slideToggle();
        tp[0].classList.remove('active');
    }else{
        tp.addClass('active');
        items.slideUp();
        tp.slideToggle();  
    }
}); 