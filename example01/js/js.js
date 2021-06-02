$(document).ready(function(){
    // setInterval(function(){
    //     $('.slide ul').animate({
    //         top: '-300px'
    //     },function(){
    //         $('.slide ul li').eq(0).appendTo('.slide ul');
    //         $('.slide ul').css({
    //             top:0
    //         });
    //     });
        
    // },3000);

    
});
$('.board .list a').on('click', function(){
    $(this).parent().parent().children().removeClass('on')
    $(this).parent().addClass('on')

    var contType = $(this).data('type')

    $('.'+contType).parent().children().removeClass('on')
    $('.'+contType).addClass('on')
});

function closepop(el){
    $(el).hide()
}

function openpop(el){
    $(el).show()
}