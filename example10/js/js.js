$(document).ready(function(){
    $('.nav >li').hover(function(){
        $(this).children('.depth').stop().slideDown()
        $(this).addClass('on')
    }, function(){
        $(this).children('.depth').stop().slideUp()
        $(this).removeClass('on')
    })

    let slideNum = 0

    $('.slide ul li').eq(slideNum).fadeIn()

    setInterval(() => {
        if (slideNum < 2) slideNum ++
        else slideNum = 0

        $('.slide ul li').fadeOut()
        $('.slide ul li').eq(slideNum).fadeIn()

    }, 3000);
})

function openPop(el){
    $(el).fadeIn()
}

function closePop(el){
    $(el).fadeOut()
}