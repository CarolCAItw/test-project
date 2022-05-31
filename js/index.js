$(document).ready(function() {
    $('.er-remove1').hide();
    $('.er-remove2').hide();

    //評價
    $('.dot-js1').click(function(event){
        $('.er-js1').fadeIn();
        $('.er-js2').fadeIn();
        $('.er-js3').fadeIn();
        $('.er-remove1').hide();
        $('.er-remove2').hide();
        $('.dot1').addClass('dot-color'); 
        $('.dot2').removeClass('dot-color'); 
        $('.dot3').removeClass('dot-color');
    });

    $('.dot-js2').click(function(event){
        $('.er-js1').hide();
        $('.er-js2').fadeIn();
        $('.er-js3').fadeIn();
        $('.er-remove1').fadeIn();
        $('.er-remove2').hide();
        $('.dot1').removeClass('dot-color'); 
        $('.dot2').addClass('dot-color'); 
        $('.dot3').removeClass('dot-color');
    });

    $('.dot-js3').click(function(event){
        $('.er-js1').hide();
        $('.er-js2').hide();
        $('.er-js3').fadeIn();
        $('.er-remove1').fadeIn();
        $('.er-remove2').fadeIn();
        $('.dot1').removeClass('dot-color'); 
        $('.dot2').removeClass('dot-color'); 
        $('.dot3').addClass('dot-color');
    });

    //回到最上方
    $('.topimg').click(function(event){
    //window.document.body.scrollTop = 0;
    window.document.documentElement.scrollTop = 0;
    });  
    
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('.topimg').fadeIn();
        } else {
            $('.topimg').fadeOut();
        }
    });
});