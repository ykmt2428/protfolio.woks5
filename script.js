$(function(){
    $('.hanbager').click(function(){
        if($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('.hanbager').click(function(){
        if($('#header').hasClass('open')){
            $('.main-left').css('opacity','0');
            $('.main-left').css('opacity','0');
            $('.S-container').css('opacity','0');
            $('.main-right').css('z-index','-10');
            $('.S-container').css('z-index','-10');
            $('.main-right').css('z-index','-10');
        } else {
            $('.main-left').css('opacity','1');
            $('.S-container').css('opacity','1');
            $('.main-right').css('opacity','1');
            $('.main-left').css('z-index','0');
            $('.S-container').css('z-index','0');
            $('.main-right').css('z-index','0');
        }
    });
    $('#mask').click(function(){
        $('#header').removeClass('open');
        if($('#header').hasClass('open')){
            $('.main-left').css('opacity','0');
            $('.S-container').css('opacity','0');
            $('.main-right').css('opacity','0');
            $('.main-right').css('z-index','-10');
            $('.S-container').css('z-index','-10');
            $('.main-right').css('z-index','-10');
        } else {
            $('.main-left').css('opacity','1');
            $('.S-container').css('opacity','1');
            $('.main-right').css('opacity','1');
            $('.main-left').css('z-index','0');
            $('.S-container').css('z-index','0');
            $('.main-right').css('z-index','0');
        }
    });
    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
          $(this).stop().addClass("is-show");
        }
    });
    $('a[href^="#"]').click(function(){
        var speed = 800,
            href = $(this).attr("href"),
            target = $(href === "#" || href === "" ? 'html' : href),
             position = target.offset().top;
         $("html, body").animate({scrollTop:position}, speed, "swing");
         return false;
});
});