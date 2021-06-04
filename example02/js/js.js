$(document).ready(function(){
    $('.nav, .depth_bg').hover(function(){
        $('.depth, .depth_bg').stop().slideDown()	
    }, function(){
        $('.depth, .depth_bg').stop().slideUp()	
    })
})