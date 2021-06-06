$(document).ready(function(){
    $('.nav >li').hover(function(){
        $(this).children('.depth').stop().slideDown()
        if($(this).children('.depth').hover()){
            $(this).children('a').addClass('on')
        }
    }, function(){
        $(this).children('.depth').stop().slideUp()
        $(this).children('a').removeClass('on')
    })

    let slideNum = 0

    $('.slide li').eq(slideNum).fadeIn()

    setInterval(() => {

        if(slideNum < 2) slideNum++
        else slideNum = 0      
        
        $('.slide li').fadeOut()
        $('.slide li').eq(slideNum).fadeIn()

    }, 3000);

    $('.tab li').on('click', function(){
        let thisType = $(this).data('type')

        $('.tab li').removeClass('on')
        $('.tab .cont >div').removeClass('on')

        $(this).addClass('on')
        $('.'+thisType).addClass('on')
    })
})
function openPop(el){
    $(el).fadeIn()
}
function closePop(el){
    $(el).fadeOut()
}