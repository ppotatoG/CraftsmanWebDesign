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

    $('.nav, .depth_bg').hover(function(){
        $('.depth, .depth_bg').stop().slideDown()	
    }, function(){
        $('.depth, .depth_bg').stop().slideUp()	
    })

    $('.tab .list li').on('click', function(){
        let thisType = $(this).data('cont')

        $('.tab .list li').removeClass('on')
        $('.cont >div').removeClass('on')

        $(this).addClass('on')
        $('.'+thisType).addClass('on')
    })
});
