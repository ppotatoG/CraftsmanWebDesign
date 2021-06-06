$(document).ready(function(){
    $('.nav >li').hover(function(){
        $('.depth, .bg').stop().slideDown()
    }, function(){
        $('.depth, .bg').stop().slideUp()
    })

    let width = 1200
    let length = $('.slide ul li').length

    $('.slide ul').width(width*length+'px')

    setInterval(() => {
        $('.slide ul').animate({left:-width}, width, function(){
            $('.slide li').eq(0).appendTo('.slide ul')
            $('.slide ul').css('left', 0)
        })
    }, 3000);

    $('.tab li').on('click',function(){
        let thisType = $(this).data('type')

        $('.tab li').removeClass('on')
        $('.cont >div').removeClass('on')

        $(this).addClass('on')
        $('.'+thisType).addClass('on')

    })
})
function openPop(){
    $('.popup').fadeIn()
}
function closePop(){
    $('.popup').fadeOut()
}