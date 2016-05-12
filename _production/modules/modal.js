$(document).on('click', '[data-modal]', function() {
    var target = $(this).data('modal');
    //var scrollbars = measure_scrollbars();

    var modal = '<div class="modal">';
    modal+='<div class="modal-content">';
    modal+='<div class="container-fluid">';
    modal+='<div class="box">';
    if(target==='upload_files'){
        modal+=modal_upload_files();
    }
    modal+='</div>'; // end box
    modal+='</div>'; // end container-fluid
    modal+='</div>'; // end modal-content
    modal += '</div>'; // end modal


    if (target === 'upload_files') {
        setTimeout(function() {
            $('#'+target).addClass('on');
            setTimeout(function() {
                $('body').addClass('modalOn');
            }, 300);
        }, 100);
    } else {
        $('body').append(modal);

        setTimeout(function() {
            $('.modal').addClass('on');
            setTimeout(function() {
                $('body').addClass('modalOn');
            }, 300);
        }, 100);
    }



});