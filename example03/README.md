# A-3 강원천문대
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example03/)

작업시간 : 1시간

Jquery
```
// fadeIn 슬라이드
$(document).ready(function(){
    $('.slide ul li').eq(num).fadeIn()

    setInterval(function(){
        let num = 0

        if(num < 2) {
            num ++
        } else {
            num = 0
        }

        $('.slide ul li').fadeOut()
        $('.slide ul li').eq(num).fadeIn()

    }, 3000)   
});
```