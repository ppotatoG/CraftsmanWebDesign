$(document).ready(function(){
    $('.nav >li').hover(function(){
        $('.depth, .bg').stop().slideDown()
    }, function(){
        $('.depth, .bg').stop().slideUp()
    })
    setInterval(() => {
        $('.slide ul').animate({
            top: '-300px'
        }, function(){
            $('.slide ul li').eq(0).appendTo('.slide ul')
            $('.slide ul').css({top :0})
        })        
    }, 3000);
})

function openPop(el){
    $(el).fadeIn()
}
function clodePop(el){
    $(el).fadeOut()
}