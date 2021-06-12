# 시험 전에 외울 스크립트

```
 $(document).ready(function(){
    // 가로 슬라이드

    let width = 800
    let height = 300
    let length = 3

    $('.slide01 ul').height(height*length)

    setInterval(() => {
        $('.slide01 ul').animate(({
            top : -height
        }), height, function(){
            $('.slide01 ul li').eq(0).appendTo('.slide01 ul')
            $('.slide01 ul').css({'top' : 0})
        })
    }, 3000);

    // 세로 슬라이드

    $('.slide02 ul').width(width*length)

    setInterval(() => {
        $('.slide02 ul').animate(({
            left: -width
        }), width, function(){
            $('.slide02 ul li').eq(0).appendTo('.slide02 ul')
            $('.slide02 ul').css({'left' : 0})
        })
    }, 3000);
})
```