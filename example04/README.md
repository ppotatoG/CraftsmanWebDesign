# A-4 유진건설
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example04/)

작업시간 : 1시간

Jquery
```
// fadeIn 슬라이드
$(document).ready(function(){
    let slideNum = 0; 

    $('.slide li').eq(0).fadeIn()

    setInterval(function(){
        if(slideNum < 2) slideNum ++
        else slideNum = 0

        $('.slide li').fadeOut()
        $('.slide li').eq(slideNum).fadeIn()

    }, 3000)  
});
```
```
// header
$(document).ready(function(){
    $('.nav >li, .bg').hover(function(){
        $('.depth, .bg').stop().slideDown()
    }, function(){
        $('.depth, .bg').stop().slideUp()
    }) 
});
```