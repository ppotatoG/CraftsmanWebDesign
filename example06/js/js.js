$(document).ready(function(){
    $('.nav >li').hover(function(){
        $('.depth, .bg').stop().slideDown()
    },function(){
        $('.depth, .bg').stop().slideUp()
    })
})