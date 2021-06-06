$(document).ready(function(){
    let num = 0

    $('.slide ul li').eq(num).fadeIn()

    setInterval(function(){
        if(num < 2) {
            num ++
        } else {
            num = 0
        }

        $('.slide ul li').fadeOut()
        $('.slide ul li').eq(num).fadeIn()

    }, 3000)

    $('.tab li').on('click', function(){

        $('.tab li').removeClass('on')
        $('.tab .inner >div').removeClass('on')

        let thisType = $(this).data('cont')

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