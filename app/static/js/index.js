$(window).load(function(){
    $('.header-text').addClass('is-showing');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // Animando las cajas de nosotros
    if(wScroll > $('#nosotros').offset().top - 300){
        $('.nosotros-div').addClass('is-showing');
    }

    // Animando la caja con la direccion del sitio
    if(wScroll > $('.grandia-details').offset().top - 300){
        $('.grandia-donde-box').addClass('is-showing');
    }
});
