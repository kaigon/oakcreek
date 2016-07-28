var acceptable = ['eps', 'pdf', 'tif', 'zip', 'rar', 'jpeg', 'jpg', 'png'];
var maxSize = 40000000;
var exists, oops;
var $module = $('#upload_files');
var $dropzone = $('#drop_area');
var $dropit = $('.label-upload');
var xhr = new XMLHttpRequest();
//var xhr_file = null;
var xhr_file = null;
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

$('#fileupload5').after('<p class="notice hidden">Maximum of ' + maxFiles + ' files per upload.</p>');

function xhr_send(f, e) {
    if (f) {
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                $('#' + e).html(xhr.responseText);
            }
        };
        xhr.open("POST", "upload.php?action=xhr");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", f.name);
        xhr.send(f);
    }
}

function dnd_hover(e) {
    if ($('.modal_upload > .box').hasClass('slide-2')) {
        e.stopPropagation();
        e.preventDefault();
        var t = e.type;
        if (t === 'dragover') {
            $module.addClass('dragging');
            if ($(e.target).hasClass('label-upload')) {
                $dropit.addClass('also_dragging');
            } else {
                $dropit.removeClass('also_dragging');
            }
        } else {
            $module.removeClass('dragging');
        }
    }
}



function xhr_parse(f, e, i) {
    if (f) {
        var ext = f.name.split('.').pop().toLowerCase();
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
        } else if (f.size > maxSize) { //20 MB
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
        } else {
            // no errors / files are acceptable. proceed
            var li = '<li class="associated-with--fileupload' + i + '">';
            li += '<i class="icon-u-' + ext + '"></i>';
            li += '<span class="box">';
            li += f.name;
            li += '<small style="display:block;">' + formatFileSize(f.size) + '</small>';
            li += '</span>';
            li += '<button class="btn-trans btn cancel" data-input-associated="#fileupload' + i + '" data-file-modified="' + f.lastModified + '" data-file-name="' + f.name + '" data-file-size="' + f.size + '" type="button"><i class="icon-x"></i></button>';
            li += '</li>';
            $('#files').append(li);

            exists = $('#upload_files .alert-filetype');
            if (exists.length) { exists.remove(); }
            exists = $('#upload_files .alert-toobig');
            if (exists.length) { exists.remove(); }
            exists = $('#upload_files .alert-files');
            if (exists.length) { exists.remove(); }
            exists = $('#upload_files .alert-max-number');
            if (exists.length) { exists.remove(); }

            var c = $('#files li').length;

            if (c < maxFiles) {
                var ii = i + 1;
                $('label[for^="fileupload"]').attr('for', 'fileupload' + ii);
            } else {
                $('.modal_upload article').addClass('maxfiles-reached');
            }

        }
    } else {
        $(e).html("No file selected!");
    }
}

$('input[name="my_field[]"]').on('change', function() {
    xhr_file = this.files[0];
    num = $(this).index();
    xhr_parse(xhr_file, "#files", num);
});


document.getElementById("upload_files").ondragover = function(e) {
    dnd_hover(e);
};
document.getElementById("upload_files").ondragleave = function(e) {
    dnd_hover(e);
};
document.getElementById("upload_files").ondrop = function(e) {
    dnd_hover(e);

    var files = e.target.files || e.dataTransfer.files;
    dnd_file = files[0];
    xhr_parse(dnd_file, "dnd_status");
};



$(document).on('click', '#upload-button', function(e) {
    e.preventDefault();
    e.stopPropagation();
    xhr_send(xhr_file, "xhr_result");
    $('.modal_upload > .box').addClass('slide-4').removeClass('slide-3');
    $('.modal_upload .radials').remove();
});


