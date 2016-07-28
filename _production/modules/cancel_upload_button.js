
$(document).on('click', '.btn.cancel', function() {

    var target = $(this).data('input-associated');
    var tar = target.substring(1);
    
    $('.associated-with--'+tar).remove();

    $(target).val('');
    $('.label-upload').attr('for',tar);
    $('h2 label').attr('for',tar);

    if($('.modal--upload_files-container').hasClass('maxfiles-reached')){
    	$('.modal--upload_files-container').removeClass('maxfiles-reached');
    }

});
