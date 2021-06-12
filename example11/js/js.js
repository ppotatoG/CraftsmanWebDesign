$(document).ready(function(){
    let slideLength = $('.slide ul li').length
    let slideWidth = $('.slide').width()

    $('.slide ul').width(slideLength*slideWidth+'px')

    setInterval(() => {
        $('.slide ul').animate({
            left : -slideWidth
        }, 
        
        slideWidth, 
        
        function(){
            $('.slide ul li').eq(0).appendTo('.slide ul')
            $('.slide ul').css('left', 0)
        })
    }, 3000);
})

function openPop(el){
    $(el).fadeIn()
}

function closePop(el){
    $(el).fadeOut()
}