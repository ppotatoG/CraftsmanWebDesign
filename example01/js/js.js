$(document).ready(function(){
    setInterval(function(){
        $('.slide ul').animate({
            top: '-300px'
        },function(){
            $('.slide ul li').eq(0).appendTo('.slide ul');
            $('.slide ul').css({
                top:0
            });
        });
        
    },3000);
});