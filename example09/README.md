# C-1 해운대 빛축제
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example09/)

작업시간 : 80분

Jquery
```
// Fade-in 슬라이드
$(document).ready(function(){
    $('.slide li').eq(slideNum).fadeIn()

    setInterval(() => {

        if(slideNum < 2) slideNum++
        else slideNum = 0      
        
        $('.slide li').fadeOut()
        $('.slide li').eq(slideNum).fadeIn()

    }, 3000);
})
```
```
// 세로 헤더
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
})
```
```
// 탭메뉴
$(document).ready(function(){
    $('.tab li').on('click', function(){
        let thisType = $(this).data('type')

        $('.tab li').removeClass('on')
        $('.tab .cont >div').removeClass('on')

        $(this).addClass('on')
        $('.'+thisType).addClass('on')
    })
})
```