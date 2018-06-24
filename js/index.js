$(function (){
    $('#zl_nav ul li.active a').after('<p class="line-top hidden-xs"></p>');
    $('#zl_score .alltitle>h1').after('<p class="line line-big"></p>');
    $('#zl_good .alltitle>h1').after('<p class="line line-big"></p>');
    $('#zl_serve .alltitle>h1').after('<p class="line line-big"></p>');
    $('#zl_custom .alltitle>h1').after('<p class="line line-big"></p>');
    $('#zl_our .alltitle>h1').after('<p class="line line-big"></p>');


    $('.card-item').mouseenter(function() {
        $(this).siblings().removeClass("card-active")
        $(this).addClass("card-active")
    })
   
    show($('#slider-chat'));
    function show(a) {
        $("a").mouseenter(function() {
              $(this).siblings().css('display','block')
       })
       $("a").mouseleave(function() {
              $(this).siblings().css('display','none')
       })
    }  
})
