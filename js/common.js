$(document).on('ready', function () {
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        pager:false,
    });

    $(function() {
        $('#information-block .delay-load').each(function(n) {
            $(this).delay(n*900).fadeTo(1500, 1).css('display', 'block');
        })

        $('.delay-load').each(function(n) {
            $(this).delay(n*900).fadeTo(1500, 1);
        })
    })
});