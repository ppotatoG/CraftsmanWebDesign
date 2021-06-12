# C-3 남도맛기행 축제
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example11/)

작업시간 : 35분

Jquery
```
// 가로 슬라이드
$(document).ready(function(){
    let slideLength = $('.slide ul li').length
    let slideWidth = $('.slide').width()

    $('.slide ul').width(slideLength*slideWidth+'px')

    setInterval(() => {
        $('.slide ul').animate({ // -slideWidth 만큼 이동하는 animate 실행
            left : -slideWidth
        }, 
        
        slideWidth,  // 이건 진짜 모르겠는데 그냥 0 이라 생각하고 외움
        
        function(){
            $('.slide ul li').eq(0).appendTo('.slide ul') // il[0]을 ul에 추가
            $('.slide ul').css('left', 0) // 모르겠다 진짜
        })
    }, 3000);
})
```