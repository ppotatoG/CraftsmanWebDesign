$(document).ready(function(){
    $('.nav >li, .bg').hover(function(){
        $('.depth, .bg').stop().slideDown()
    }, function(){
        $('.depth, .bg').stop().slideUp()
    })
    
    let slideNum = 0; 

    $('.slide li').eq(0).fadeIn()

    setInterval(function(){
        if(slideNum < 2) slideNum ++
        else slideNum = 0

        $('.slide li').fadeOut()
        $('.slide li').eq(slideNum).fadeIn()

    }, 3000)
})
function openPop(){
    $('.popup').fadeIn()
}

function closePop(){
    $('.popup').fadeOut()
}