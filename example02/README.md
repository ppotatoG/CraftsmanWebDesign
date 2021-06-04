# A-2 Green복지재단
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example02/)

작업시간 : 기억안남

Jquery
```
// 가로 슬라이드
$(document).ready(function(){
    let width = $('.slide li').width();
    let elLength = $('.slide li').length;

    $('.slide ul').css('width',width*elLength);

    setInterval(function(){
        $('.slide ul').animate({left:-width},1200,function(){
            $('.slide li').eq(0).appendTo('.slide ul');
            $('.slide ul').css('left',0);	
        });
    },3000);    
});
```
```
// 메뉴
$(document).ready(function(){
    $('.nav, .depth_bg').hover(function(){
        $('.depth, .depth_bg').stop().slideDown()	
    }, function(){
        $('.depth, .depth_bg').stop().slideUp()	
    })
})

```
