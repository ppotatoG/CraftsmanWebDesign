$(document).ready(function(){
    setInterval(function(){
        $('.slide ul').animate({
                left : '-1200px'
            },function(){
                $('.slide ul li').eq(0).appendTo('.slide ul')
                $('.slide ul').css({left : 0})
            })
    }, 3000)
    
})