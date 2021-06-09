# C-2 부여 가을연꽃축제
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example10/)

작업시간 : 기억안남

Jquery
```
// Fade-in 슬라이드
$(document).ready(function(){
    let slideNum = 0

    $('.slide ul li').eq(slideNum).fadeIn()

    setInterval(() => {
        if (slideNum < 2) slideNum ++
        else slideNum = 0

        $('.slide ul li').fadeOut()
        $('.slide ul li').eq(slideNum).fadeIn()

    }, 3000);
})
```
```
// 세로 헤더
$(document).ready(function(){
    $('.nav >li').hover(function(){
        $(this).children('.depth').stop().slideDown()
        $(this).addClass('on')
    }, function(){
        $(this).children('.depth').stop().slideUp()
        $(this).removeClass('on')
    })
})
```