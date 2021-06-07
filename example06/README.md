# B-2 대한투어
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example06/)

작업시간 : 기억안남

헤더가 왔다리 갔다리 하는데 왜그러는지 원인 아시는 분 공유 부탁드립니다 (￣(ｴ)￣)ﾉ

Jquery
```
// 세로 슬라이드
$(document).ready(function(){
    setInterval(() => {
        $('.slide ul').animate({
            top: '-300px'
        }, function(){
            $('.slide ul li').eq(0).appendTo('.slide ul')
            $('.slide ul').css({top :0})
        })        
    }, 3000);
})
```
```
// header
$(document).ready(function(){
    $('.nav >li').hover(function(){
        $('.depth, .bg').stop().slideDown()
    },function(){
        $('.depth, .bg').stop().slideUp()
    })
})
```