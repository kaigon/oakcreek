$(function() {

    var acceptable = ['ai', 'psd', 'eps', 'pdf', 'tif', 'zip', 'rar', 'jpeg', 'jpg', 'png'];
    var maxSize = 20000000;
    var exists, oops;



    //'use strict';
    // Change this to the location of your server-side upload handler:
    var url = window.location.hostname === 'localhost:8080' ?
        '//oakcreek/' : 'files/uploaded/';
    $('#fileupload').fileupload({
            url: url,
            dataType: 'json',
            //autoUpload: false,
            acceptFileTypes: /(\.|\/)(ai|psd|eps|pdf|tif|zip|rar|jpe?g|png)$/i,
            maxFileSize: 20000000,
            dragover: function(e, data) {
                $('#upload_files').addClass('dragging');
            },
            dragleave: function(e, data) {
                $('#upload_files').removeClass('dragging');
            },
            drop: function(e, data) {
                $('#upload_files').removeClass('dragging');
            },
            add: function(e, data) {
                //var uploadErrors = [];
                var ext = data.originalFiles[0].name.split('.').pop().toLowerCase();
                if ($.inArray(ext, acceptable) === -1) {
                    // file is wrong extension. throw errors
                    exists = $('#upload_files .alert-filetype');
                    if (!exists.length) {
                        // alert doesn't exist yet. create it
                        oops = createAlert('alert-filetype', 'Invalid file type.');
                        $('#files').before(oops);
                    } else {
                        $('#upload_files .alert-filetype').addClass('alert-reminder').delay(300).queue(function() {
                            $('#upload_files .alert-filetype').removeClass('alert-reminder').dequeue();
                        });
                    }
                } else if (data.originalFiles[0].size > maxSize) { //20 MB
                    // file is too big. Throw errors
                    exists = $('#upload_files .alert-toobig');
                    if (!exists.length) {
                        // alert doesn't exist yet. create it
                        oops = createAlert('alert-toobig', 'File size cannot exceed 20mb');
                        $('#files').before(oops);
                    } else {
                        $('#upload_files .alert-toobig').addClass('alert-reminder').delay(300).queue(function() {
                            $('#upload_files .alert-toobig').removeClass('alert-reminder').dequeue();
                        });
                    }
                } else {
                    // no errors / files are acceptable. proceed
                    $.each(data.files, function(index, file) {
                        var name = file.name;

                        var li = '<li>';
                        li += '<i class="icon-u-' + ext + '"></i>';
                        li += '<span class="box">';
                        li += file.name;
                        li += '<small style="display:block;">' + formatFileSize(file.size) + '</small>';
                        li += '</span>';
                        li += '<button class="close-button btn-trans btn cancel" data-file-modified="' + file.lastModified + '" data-file-name="' + file.name + '" data-file-size="' + file.size + '" type="button"></button>';
                        li += '</li>';
                        $('#files').append(li);

                    });

                    exists = $('#upload_files .alert-filetype');
                    if (exists.length) { exists.remove(); }
                    exists = $('#upload_files .alert-toobig');
                    if (exists.length) { exists.remove(); }
                    exists = $('#upload_files .alert-files');
                    if (exists.length) { exists.remove(); }
                }

            },
            formData: function(form) {
                return form.serializeArray();
            },
            done: function(e, data) {
                data.context.text('Upload finished.');
                $('.modal_upload > .box').addClass('slide-4').removeClass('slide-3');
                $('.modal_upload .radials').remove();
            },
            progressall: function(e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('.progress-bar').css(
                    'width',
                    progress + '%'
                );
            }
        })
        .bind('fileuploadprocessfail', function(e, data) {
        })
        .prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');


    
    $(document).on('click', 'button.cancel', function() {
        
            $(this).parent().remove();
            
        });

});
