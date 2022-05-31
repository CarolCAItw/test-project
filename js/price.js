$(document).ready(function() {
    $('li.ut1').addClass('btn-users-js'); 

    $('div.pm-js2').hide();
    $('div.pm-js3').hide();
    $('div.pm-js4').hide();
    $('div.pm-js5').hide();

    $('.qa-remove').hide();
    $('.qa-minus0 ').hide();
    $('.qa-plus0').hide();

//人數按鈕
    $('li.ut1').click(function(){
        $('li.ut1').addClass('btn-users-js');  
        $('li.ut2').removeClass('btn-users-js'); 
        $('li.ut3').removeClass('btn-users-js'); 
        $('li.ut4').removeClass('btn-users-js'); 
        $('li.ut5').removeClass('btn-users-js'); 
    }); 


    $('li.ut2').click(function(){
        $('li.ut1').removeClass('btn-users-js');  
        $('li.ut2').addClass('btn-users-js'); 
        $('li.ut3').removeClass('btn-users-js'); 
        $('li.ut4').removeClass('btn-users-js'); 
        $('li.ut5').removeClass('btn-users-js'); 
    }); 


    $('li.ut3').click(function(){
        $('li.ut1').removeClass('btn-users-js');  
        $('li.ut2').removeClass('btn-users-js'); 
        $('li.ut3').addClass('btn-users-js'); 
        $('li.ut4').removeClass('btn-users-js'); 
        $('li.ut5').removeClass('btn-users-js'); 
    }); 


    $('li.ut4').click(function(){
        $('li.ut1').removeClass('btn-users-js');  
        $('li.ut2').removeClass('btn-users-js'); 
        $('li.ut3').removeClass('btn-users-js'); 
        $('li.ut4').addClass('btn-users-js'); 
        $('li.ut5').removeClass('btn-users-js'); 
    }); 


    $('li.ut5').click(function(){
        $('li.ut1').removeClass('btn-users-js');  
        $('li.ut2').removeClass('btn-users-js'); 
        $('li.ut3').removeClass('btn-users-js'); 
        $('li.ut4').removeClass('btn-users-js'); 
        $('li.ut5').addClass('btn-users-js'); 
    }); 

//方案轉換

    $('li.ut1').click(function(event){
    $('div.pm-js1').fadeIn();  
    $('div.pm-js2').hide();
    $('div.pm-js3').hide();
    $('div.pm-js4').hide();
    $('div.pm-js5').hide();
    }); 


    $('li.ut2').click(function(event){
    $('div.pm-js1').hide();  
    $('div.pm-js2').fadeIn();
    $('div.pm-js3').hide();
    $('div.pm-js4').hide();
    $('div.pm-js5').hide();
    }); 


    $('li.ut3').click(function(event){
    $('div.pm-js1').hide();  
    $('div.pm-js2').hide();
    $('div.pm-js3').fadeIn();
    $('div.pm-js4').hide();
    $('div.pm-js5').hide();
    }); 
});

$(document).ready(function(){

    $('li.ut4').click(function(event){
    $('div.pm-js1').hide();  
    $('div.pm-js2').hide();
    $('div.pm-js3').hide();
    $('div.pm-js4').fadeIn();
    $('div.pm-js5').hide();
    }); 


    $('li.ut5').click(function(event){
    $('div.pm-js1').hide();  
    $('div.pm-js2').hide();
    $('div.pm-js3').hide();
    $('div.pm-js4').hide();
    $('div.pm-js5').fadeIn();
    }); 

//常見問題
    var qatopen1 = false;   
    $('.qa-topen1').click(function(event){
        if(!qatopen1){
        $('.qa-open1').slideDown();
        $(this).find('p.title').addClass('blue'); 
        $(this).find('.qa-plus1').hide();
        $(this).find('.qa-minus0').show();
        qatopen1 = true;
        }else{$('.qa-open1').slideUp();
        $(this).find('p.title').removeClass('blue'); 
        $(this).find('.qa-plus1').show();
        $(this).find('.qa-minus0').hide();
        qatopen1 = false;
        }
    });   

    var qatopen2 = false;  
    $('.qa-topen2').click(function(event){
        if(!qatopen2){
        $('.qa-open2').slideDown();
        $(this).find('p.title').addClass('blue'); 
        $(this).find('.qa-plus1').hide();
        $(this).find('.qa-minus0').show();
        qatopen2 = true;
        }else{$('.qa-open2').slideUp();
        $(this).find('p.title').removeClass('blue'); 
        $(this).find('.qa-plus1').show();
        $(this).find('.qa-minus0').hide();
        qatopen2 = false;
        }
    });   

    var qatopen3 = false;
    $('.qa-topen3').click(function(event){
        if(!qatopen3){
        $('.qa-open3').slideUp();
        $(this).find('p.title').removeClass('blue'); 
        $(this).find('.qa-minus1').hide();
        $(this).find('.qa-plus0').show();
        qatopen3 = true;
        }else{
        $('.qa-open3').slideDown();
        $(this).find('p.title').addClass('blue'); 
        $(this).find('.qa-minus1').show();
        $(this).find('.qa-plus0').hide();
        qatopen3 = false;
        }
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