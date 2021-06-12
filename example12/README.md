# C-4 Vallery Festival
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example11/)

작업시간 : 80분 (나름 예쁘게 꾸며봄)

Jquery
```
// 세로 슬라이드
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
```