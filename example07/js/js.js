$(document).ready(function(){
    $('.nav >li').hover(function(){
        $(this).children('.depth').stop().slideDown()
    }, function(){
        $(this).children('.depth').stop().slideUp()
    })
})