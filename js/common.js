$(document).on('ready', function () {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        pager:false,
    });

    $(function() {
        $('#information-block .delay-load').each(function(n) {
            $(this).delay(n*700).fadeTo(500, 1).css('display', 'block');
        })
        $('.delay-load').each(function(n) {
            $(this).delay(n*200).fadeTo(300, 1);
        })
    })
});