$(document).on('click', '[data-type="close"]:not(.cancel)', function() {
    var target = $(this).data('target');
    var bodyClass = $(this).data('bodyclass');
    //console.log('target = '+target);
    //console.log('bodyClass = '+bodyClass);

    $(target).removeClass('on');
    $('body').removeClass(bodyClass);

});