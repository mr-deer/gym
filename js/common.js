$(document).on('ready', function () {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        pager:false,
    });

    $(function() {
        $('#information-block .delay-load').each(function(n) {
            $(this).delay(n*700).fadeTo(400, 1).css('display', 'block');
        })
        $('.delay-load').each(function(n) {
            $(this).delay(n*400).fadeTo(1000, 1);
        })
    })
});