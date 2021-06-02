# A-1 JUST쇼핑몰
[demo](https://ppotatog.github.io/CraftsmanWebDesign/example01/)

작업시간 : 2시간 30분

Jquery
```
// 세로 슬라이드
$(document).ready(function(){
    setInterval(function(){
        $('.slide ul').animate({
            top: '-300px'
        },function(){
            $('.slide ul li').eq(0).appendTo('.slide ul');
            $('.slide ul').css({
                top:0
            });
        });
        
    },3000);    
});
```
```
//탭 메뉴
$('.board .list a').on('click', function(){
    $(this).parent().parent().children().removeClass('on')
    $(this).parent().addClass('on')

    var contType = $(this).data('type')

    $('.'+contType).parent().children().removeClass('on')
    $('.'+contType).addClass('on')
});
```
```
//팝업
function openpop(el){
    $(el).sow()
}
function closepop(el){
    $(el).hide()
}
```