$(document).on('click', '.nav-menu', function() {
    //console.log('clicked');
    var target = $('.nav-popout');
    if(target.hasClass('open')){
    	target.removeClass('open');
    }else{
    	target.addClass('open');
    }

});