(function($){$(document).on('click', '[data-type="close"]:not(.cancel)', function() {
    var target = $(this).data('target');
    var bodyClass = $(this).data('bodyclass');
    //console.log('target = '+target);
    //console.log('bodyClass = '+bodyClass);

    $(target).removeClass('on');
    $('body').removeClass(bodyClass);

});

    // set year
    var currentYear = new Date();
    $('time').html(currentYear.getFullYear());


    
$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('.form-messages');
	var formText = $('.form-messages-content');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// validate email field
		var eaddy = $('#email').val();
		var valid = validateEmail(eaddy);
		//console.log(valid);
		if(valid === false){
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
			$(formText).text('Oops! The email provided does not appear to be valid. Please try again.');
			$('#email').addClass('missing');
			return;
		} else {
			$('#email').removeClass('missing');
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			$(formText).text('');
		}

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			$(form).addClass('submitted');

			//console.log('response = '+response);

			// Set the message text.
			if (response !== '') {
				$(formText).text(response);
			} else {
				$('.content__message').text('Thank you! We will be in touch!');
			}
			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#phone').val('');
			$('#company').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formText).text(data.responseText);
			} else {
				$(formText).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
function createAlert(className,value) {
    var oops = '<div class="alert '+className+'">';
    oops += '<div class="alert-col alert-pre">';
    oops += '<p>!</p>';
    oops += '</div>';
    oops += '<div class="alert-col alert-body">';
    oops += '<p>'+value+'</p>';
    oops += '</div>';
    oops += '</div>';
    return oops;
}


function formatFileSize(bytes) {
  var val = bytes / 1024,
    suffix;
  if (val < 1000) {
    suffix = 'KB';
  } else {
    val = val / 1024;
    if (val < 1000) {
      suffix = 'MB';
    } else {
      val = val / 1024;
      if (val < 1000) {
        suffix = 'GB';
      } else {
        val = val / 1024;
        suffix = 'TB';
      }
    }
  }
  //return numericFormatters.round(val, 2) + suffix;
  return parseFloat(val).toFixed(2) + suffix;
}
function validateEmail(value) {
  var input = document.createElement('input');

  input.type = 'email';
  input.value = value;

  return typeof input.checkValidity == 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
}
function getValidNumber(value) {
    value = $.trim(value).replace(/\D/g, '');
    if (value.substring(0, 1) == '1') {
        value = value.substring(1);
    }
    if (value.length == 10) {
        return value;
    }
    return false;
}

$(document).on('focus', 'input[type="tel"]', function() {
	//$(this).attr('placeholder','X (XXX) XXX-XXXX');
    $(this).formatter({
        //'pattern': '{{9}} ({{999}}) {{999}}-{{9999}}',
        'pattern': '({{999}}) {{999}}-{{9999}}',
        'persistent': false
    });
});

    // json load
    var guidelines_json;
    function load_json(json_file) {
        $.ajax({
            'async': false,
            'global': false,
            'url': 'files/data/'+json_file,
            'dataType': "json",
            'success': function(data) {
                guidelines_json = data;
            }
        });
        return guidelines_json;
    }

    function initial_guidelines() {
        load_json('guidelines.json');
        var type = 'Fonts';
        var deets = '';
        $.each(guidelines_json, function(k, v) {
            if (v[0] === type) {
                deets = v[1];
            }
        });

        var content = '<h4><strong>' + type + '</strong></h4>' + deets + '';
        $('.guidelines_articles').html('<article data-guidelines="' + type + '" style="display:block;">' + content + '</article>');
        $('button[data-guidelines-toggle]').eq(0).addClass('active');

    }

    initial_guidelines();



    $('button[data-guidelines-toggle]').click(function() {

        //guidelines_json();
        //json;


        var type = $(this).find('.btn__text').html();
        var deets = '';
        $.each(guidelines_json, function(k, v) {
            if (v[0] === type) {
                deets = v[1];
            }
        });

        var content = '<h4><strong>' + type + '</strong></h4>' + deets + '';

        if ($('.guidelines_articles').is(':visible')) {
            var exists = $('.guidelines_articles article');
            if (exists.length) {
                if ($(exists).data('guidelines') !== type) {
                    $(exists).slideUp(400, function() {
                        $('.guidelines article').data('guidelines', type).html(content);
                    }).slideDown();
                }
            } else {
                $('.guidelines_articles').html('<article data-guidelines="' + type + '">' + content + '</article>');
                $('.guidelines_articles article').slideDown();
            }
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings('button').removeClass('active');
            }
        } else {
            var well = $(this).next('article');
            if ($(well).length && $(well).is(':visible')) {
                $(well).slideUp();
            } else if ($(well).length) {
                $(well).slideDown();
            } else {
                $(this).after('<article>' + content + '</article>');
                $(this).next('article').slideDown();
            }
            if ($(this).hasClass('expanded')) {
                $(this).removeClass('expanded');
            } else {
                $(this).addClass('expanded');
            }
        }




    });
function measure_scrollbars() {
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    document.body.appendChild(scrollDiv);

    //var scrollDiv = '<div style="width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;';
    //$('body').append(scrollDiv);

    // Get the scrollbar width
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    // Delete the DIV 
    document.body.removeChild(scrollDiv);
    return scrollbarWidth; 
   
}
$(document).on('click', '.nav-menu', function() {
    //console.log('clicked');
    var target = $('.nav-popout');
    if(target.hasClass('open')){
    	target.removeClass('open');
    }else{
    	target.addClass('open');
    }

});
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

function removeclasses(controlClass, classPrefix) {
    var classes = $(controlClass).attr("class").split(" ");
    $.each(classes, function(index) {
        if (classes[index].indexOf(classPrefix) === 0) {
            $(controlClass).removeClass(classes[index]);
        }
    });
}

/*
$(document).one('change', '#g-recaptcha-response', function() {
    alert('found it!');
});
*/


$(document).on('click', '[modal-slide-button]:not(".disabled"):not(".active")', function() {

    var target = $(this).data('target');
    var slide = $(this).data('slideto');

    var oops = '';
    var exists = '';

    var phone = $(target).find('#ubizphone').val();
    num = getValidNumber(phone);



    if (num === false) {
        // invalid
        exists = $(target + ' .alert-phone').length;
        if (!exists) {
            // alert doesn't exist yet. create it
            oops = createAlert('alert-phone', 'Whoops! Phone number appears to be invalid. Please try again.');
            $('#ubizphone').after(oops);
        } else {
            $(target + ' .alert-phone').addClass('alert-reminder').delay(300).queue(function() {
                $(target + ' .alert-phone').removeClass('alert-reminder').dequeue();
            });
        }
        return false;
    } else {
        exists = $(target + ' .alert-phone');
        if (exists.length) { exists.remove(); }
    }
    

    
    if ($(this).data(recaptcha)) {
        var response = grecaptcha.getResponse();


        if (response.length === 0) {
            //reCaptcha not verified
            exists = $(target + ' .alert-recaptcha').length;
            if (!exists) {
                // alert doesn't exist yet. create it
                oops = createAlert('alert-recaptcha', "Whoops! Please complete the reCAPTCHA field above to continue to the next screen.");
                $(this).before(oops);
            } else {
                // flash the alert as a reminder that they still need to verify
                $(target + ' .alert-recaptcha').addClass('alert-reminder').delay(300).queue(function() {
                    $(target + ' .alert-recaptcha').removeClass('alert-reminder').dequeue();
                });
            }

        } else {
            //reCaptch verified
            $('.alert').remove();
            removeclasses(target, "slide");
            $(target).addClass('slide-' + slide);
            $('[modal-slide-button].active').removeClass('active');
            $('[data-slideto=' + slide + ']').addClass('active').removeClass('disabled');
        }

    }




    var box2 = $(this).parent();
    //$(box2).addClass('THIS-IS-BOX2');
    if (box2.hasClass('box-2')) {
        //console.log('current slide is "box-2"');
        if (!$('#files').html().length) {
            exists = $(target + ' .alert-files').length;
            if (!exists) {
                // alert doesn't exist yet. create it
                oops = createAlert('alert-files', 'Whoops! You need to select a file to upload in order to proceed.');
                $(this).after(oops);
            } else {
                $(target + ' .alert-files').addClass('alert-reminder').delay(300).queue(function() {
                    $(target + ' .alert-files').removeClass('alert-reminder').dequeue();
                });
            }
            return false;
        }
    }

    // delete this and uncomment the above when ready re-enable captcha
    /*
    $('.alert').remove();
    removeclasses(target, "slide");
    $(target).addClass('slide-' + slide);
    $('[modal-slide-button].active').removeClass('active');
    $('[data-slideto=' + slide + ']').addClass('active').removeClass('disabled');
    */


});

var u = new Url();
//console.log(u);
if(u.query.section){
	$('html,body').animate({
        scrollTop: $('.' + u.query.section).offset().top
    }, 0);
}


// smooth scroll navigation
$('[data-scrollto]').click(function() {
    var target = $(this).data('scrollto');
    var mobile = $('.nav-popout');
    if (mobile.hasClass('open')) {
        $(mobile).removeClass('open');
    }
    $('html,body').animate({
        scrollTop: $('.' + target).offset().top
    }, 1000);

    window.history.pushState(null, null, '?section='+target);

});

// add classes to body based on elements' locations
// uses the waypoints.js vendor plugin
var waypoints = $('section').waypoint(function(direction) {
    var target = this.element.className;
    if (direction === "up") {
        var previous = $('.' + target).prev('section').attr('class');
        $('body').attr('data-viewing', previous);
    } else if (direction === "down") {
        $('body').attr('data-viewing', target);
    }
}, {
    offset: '44'
});


// detects when <header> is gone from view and enables menu button
// also uses the waypoints.js vendor plugin
var waypoints = $('.header').waypoint(function(direction) {

    if (direction === "up") {
        $('.nav-popout').addClass('full').removeClass('open');
    } else if (direction === "down") {
        $('.nav-popout').removeClass('full');
    }
}, {
    offset: function() {
        return -this.element.clientHeight;
    }
});

function modal_upload_files() {
	var s = '';
	//s+='<div class="row">';
	//s+='<div class="col-xs-12">';
	s+='<div class="modal_upload">';
	s+='<h1><span>Upload your project files</span></h1>';
	s+='<h4>We accept the following file formats:</h4>';
	s+='<ul class="tags ul-inline">';
	s+='<li>.ai</li>';
	s+='<li>.psd</li>';
	s+='<li>.eps</li>';
	s+='<li>.pdf</li>';
	s+='<li>.jpg</li>';
	s+='<li>.png</li>';
	s+='<li>.zip</li>';
	s+='<li>.rar</li>';
	s+='</ul>';
	s+='<article>';
	
	s+='<label class="icon-upload" for="fileupload">';
	s+='<input id="fileupload" type="file" name="files[]" multiple>';
	s+='</label>';
	
	s+='<div id="progress" class="progress">';
	s+='<div class="progress-bar progress-bar-success"></div>';
	s+='</div>'; // end #progress
	s+='<div id="files" class="files"></div>';
	s+='</article>';
	s+='<h2><small>Drag & drop or <label for="fileupload">click</label> to upload</small></h2>';
	s+='<p><small>Maximum allowable file size is 20mb. Please contact us for info regarding submitting larger files.</small></p>';
	s+='</div>';
	//s+='</div>'; // end col-xs-12
	//s+='</div>'; // end row
	return s;
}



        
        
        
        
    
    
    
    
        
    
    
    })(jQuery);