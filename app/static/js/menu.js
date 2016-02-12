$(window).load(function(){

    $('#menu-button').on('click',function(){
        $("#main-menu-list").toggle();
    });

    $('#main-menu-list > li > a').on('click',function(event){
        if($('#menu-button').css('display') != "none"){
            $("#main-menu-list").toggle();
        }

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }

    });

});
