$(document).on('click', '[data-modal]', function(e) {
    e.preventDefault();
    var target = $(this).data('modal');
    //var scrollbars = measure_scrollbars();




    setTimeout(function() {
        $('#' + target).addClass('on');
        //$('.modal').addClass('on');
        setTimeout(function() {
            $('body').addClass('modalOn');
        }, 300);
    }, 100);


});
