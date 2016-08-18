var acceptable = ['eps', 'pdf', 'tif', 'zip', 'rar', 'jpeg', 'jpg', 'png'];
var maxSize = 40000000;
var exists, oops;
var dropit = $('.label-upload');
var notify = $('#upload_files .box-5');
var num = 0;
var maxFiles = 5;

var isAdvancedUpload = function() {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

if (isAdvancedUpload) {
    $('body').addClass('has-dnd');
} else {
    $('body').addClass('no-dnd');
}







Dropzone.autoDiscover = false;

var li = '<li>';
li += '<i class="icon-u-jpg"></i>';
li += '<span class="box">';
li += '<strong data-dz-name></strong>';
li += '<small style="display:block;" data-dz-size></small>';
li += '<small><em data-dz-errormessage></em></small>';
li += '</span>';
li += '<button data-dz-remove class="btn-trans btn cancel" type="button">';
li += '<i class="icon-x"></i>';
li += '</button>';
li += '</li>';

var myDropzone = new Dropzone("#upload_files", { // Make the whole body a dropzone
    url: "dropzone_upload.php", // Set the url
    previewsContainer: "#files",
    clickable: "#fileupload1,.drop_area--label",
    autoProcessQueue: false,
    maxFiles: maxFiles,
    parallelUploads: maxFiles,
    previewTemplate: li,
    maxFilesize: (maxSize / 1000000),
    acceptedFiles: ".eps, .pdf, .tif, .zip, .rar, .jpeg, .jpg, .png",
});


myDropzone
    .on("addedfile", function(file) {
        //console.log('file:'+file);
        var ext = file.name.split('.').pop().toLowerCase();
        var nam = file.name;
        var _this = this;
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
            //console.log('wrong extension!');
            stop();
            _this.removeFile(file);
        } else if (file.size > maxSize) { //20 MB
            // file is too big. Throw errors
            var toobig = maxSize / 1000;
            toobig = toobig / 1000;
            exists = $('#upload_files .alert-toobig');
            if (!exists.length) {
                // alert doesn't exist yet. create it
                oops = createAlert('alert-toobig', 'File size cannot exceed ' + toobig + 'mb');
                $('#files').before(oops);
            } else {
                $('#upload_files .alert-toobig').addClass('alert-reminder').delay(300).queue(function() {
                    $('#upload_files .alert-toobig').removeClass('alert-reminder').dequeue();
                });
            }
            //console.log('too big!');
            stop();
            _this.removeFile(file);
        } else {
            // no errors / files are acceptable. proceed
            var new_template = file.previewElement;
            $(new_template).find('.icon-u-jpg').replaceWith('<i class="icon-u-' + ext + '"></i>');
            $(new_template).append('<input type="hidden" class="hidden" name="file-to-upload[]" value="' + nam + '" />');
            $(this.previewsContainer).append(new_template);

            exists = $('#upload_files .alert-filetype');
            if (exists.length) { exists.remove(); }
            exists = $('#upload_files .alert-toobig');
            if (exists.length) { exists.remove(); }
            exists = $('#upload_files .alert-files');
            if (exists.length) { exists.remove(); }
            exists = $('#upload_files .alert-max-number');
            if (exists.length) { exists.remove(); }

        }
    })
    .on("removedfile", function(e) {
        if ($('.modal--upload_files-container').hasClass('maxfiles-reached')) {
            $('.modal--upload_files-container').removeClass('maxfiles-reached');
        }
        exists = $('#upload_files .alert-max-number');
        if (exists.length) { exists.remove(); }
        $('#drop_area ~ .notice').remove();
    })
    .on("maxfilesreached", function(file) {
        $('.modal_upload article').addClass('maxfiles-reached');
        $('#drop_area').after('<div class="notice">Maximum of 5 files allowed.</div>');
    })
    .on("maxfilesexceeded", function(file, e) {
        $('#drop_area ~ .notice').remove();
        exists = $('#upload_files .alert-max-number');
        if (!exists.length) {
            // alert doesn't exist yet. create it
            oops = createAlert('alert-max-number', 'Cannot upload more than ' + maxFiles + ' files at a time.');
            $('#files').before(oops);
            //console.log('alert created');
        } else {
            $('#upload_files .alert-max-number').addClass('alert-reminder').delay(300).queue(function() {
                $('#upload_files .alert-max-number').removeClass('alert-reminder').dequeue();
            });
            //console.log('alert deleted');
        }
    })
    .on("dragleave", function(f) {
        $(dropit).removeClass('also_dragging');
        $('#upload_files').attr('data-dragging', '');
    })
    .on("dragover", function(f) {
        $(dropit)
            .on('dragover', function() {
                $(dropit).addClass('also_dragging');
            })
            .on("dragleave", function(f) {
                $(dropit).removeClass('also_dragging');
            });
        if ($('#upload_files .box.row').hasClass('slide-2')) {
            // on slide 2. use default behavior
        } else {
            // not on slide 2. add class to prevent hover effects
            $('#upload_files').attr('data-dragging', 'not-yet');
        }
    })
    .on("drop", function(f) {
        // make sure to remove classes
        $(dropit).removeClass('also_dragging');
    })
    .on('processing', function(files, response) {
        // fires when all files in the queue have been uploaded
        //console.log('processingmultiple');
        $('.modal_upload > .box').addClass('slide-4').removeClass('slide-3');
        $('.modal_upload .radials').hide();
    })
    .on("totaluploadprogress", function(progress) {
        $('.uploading .uploaded').css({ 'width': progress + '%' });
        //document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
    })
    .on("sending", function() {
        // Gets triggered when the form is actually being sent.
        // Hide the success button or the complete form.
        //console.log('sending multiple');
        $('#upload_files .btn').prop('disabled', true);
    })
    .on('uploadprogress', function(files, response, progress) {
        // fires when all files in the queue have been uploaded
        //console.log('uploadprogress');
        //console.log("File progress", progress);
    })
    .on("success", function(files, response) {
        // Gets triggered when the files have successfully been sent.
        // Redirect user or notify of success.
        //console.log('success sending!');
        $('#upload_files .btn').prop('disabled', false);
        $('.modal_upload > .box').addClass('slide-5').removeClass('slide-4');
        //$('.modal_upload .radials').remove();

        $(notify).find('h1 > span').text('Thank you!');
        $(notify).find('h4').text('Your files have been uploaded successfully!');
        $(notify).find('p').text('A member of our team has been notified and will begin processing the file(s) shortly. If we run into any issues we will contact you.');
    })
    .on("error", function(file, response) {
        var ext = file.name.split('.').pop().toLowerCase();
        var _this = this;
        console.log(file);
        console.log(response);
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
            //console.log('wrong extension!');
            stop();
            _this.removeFile(file);
        } else if (file.size > maxSize) { //20 MB
            // file is too big. Throw errors
            var toobig = maxSize / 1000;
            toobig = toobig / 1000;
            exists = $('#upload_files .alert-toobig');
            if (!exists.length) {
                // alert doesn't exist yet. create it
                oops = createAlert('alert-toobig', 'File size cannot exceed ' + toobig + 'mb');
                $('#files').before(oops);
            } else {
                $('#upload_files .alert-toobig').addClass('alert-reminder').delay(300).queue(function() {
                    $('#upload_files .alert-toobig').removeClass('alert-reminder').dequeue();
                });
            }
            //console.log('too big!');
            stop();
            _this.removeFile(file);
        } else if (response === "You can not upload any more files.") {


            stop();
            _this.removeFile(file);
        } else {
            $('#upload_files .btn').prop('disabled', false);
            $('.modal_upload > .box').addClass('slide-5').removeClass('slide-4');
            //$('.modal_upload .radials').show();

            $(notify).find('h1 > span').text('Uh oh!');
            $(notify).find('h4').text('An error has occurred!');
            $(notify).find('p').text("We're sorry, we could not upload your files at this time. Please contact us directly and we will assist you with delivering your files to our creative team another way.");
            var r = '';
            r += '<ul class="ul-list contact">';
            r += '<li>';
            r += '<i class="icon-phone"></i>';
            r += '<a href="tel:4024737375">402.473.7375</a>';
            r += '</li>';
            r += '<li>';
            r += '<i class="icon-email"></i>';
            r += '<a href="mailto:sales@oakcreekprinting.com" target="_blank">sales@oakcreekprinting.com</a>';
            r += '</li>';
            r += '</ul>';
            $(notify).append(r);
        }

    })
    .on('queuecomplete', function(files, response) {
        // fires when all files in the queue have been uploaded
        var form = $('#modal-upload-form');
        var formData = $(form).serialize();
        $.ajax({
                type: 'POST',
                url: 'dropzone_email.php',
                data: formData
            })
            .done(function(response) {
                // Clear the form.
                console.log(response);
            })
            .fail(function(response) {
                console.log('failed! ' + response);
            }); // end ajax

    });


$('#upload-button').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    myDropzone.processQueue();
});
