$(document).ready(function(){
    let slideLength = $('.slide ul li').length
    let slideHeight = $('.slide ul li').height()

    $('.slide ul').css({'height' :  slideHeight*slideLength})

    setInterval(() => {
        $('.slide ul').animate({
            top : -slideHeight
        }, 
        slideHeight, 
        
        function(){
            $('.slide ul li').eq(0).appendTo('.slide ul')
            $('.slide ul').css({'top': 0})
        })
    }, 3000);
})

function openPop(el){
    $(el).fadeIn()
}

function closePop(el){
    $(el).fadeOut()
}