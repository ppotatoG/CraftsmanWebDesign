# B-1 대한은행
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example05/)

작업시간 : 80분

Jquery
```
// 가로 슬라이드
$(document).ready(function(){
    let width = 1200
    let length = $('.slide ul li').length

    $('.slide ul').width(width*length+'px')

    setInterval(() => {
        $('.slide ul').animate({left:-width}, width, function(){
            $('.slide li').eq(0).appendTo('.slide ul')
            $('.slide ul').css('left', 0)
        })
    }, 3000);
})
```
```
// header
$(document).ready(function(){
    $('.nav >li').hover(function(){
        $('.depth, .bg').stop().slideDown()
    }, function(){
        $('.depth, .bg').stop().slideUp()
    })
})
```
```
// tab
$(document).ready(function(){
    $('.tab li').on('click',function(){
        let thisType = $(this).data('type')

        $('.tab li').removeClass('on')
        $('.cont >div').removeClass('on')

        $(this).addClass('on')
        $('.'+thisType).addClass('on')

    })
})
```