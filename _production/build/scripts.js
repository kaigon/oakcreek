(function($){
$(document).on('click', '.close-button:not(.cancel)', function() {
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
	var formMessages = $('#form-messages');
	var formText = $('#form-messages-content');

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
				$(formText).text('Thank you! We will be in touch!');
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

        var content = '<h2><strong>' + type + '</strong></h2>' + deets + '';
        $('.guidelines_articles').html('<article data-guidelines="' + type + '" style="display:block;">' + content + '</article>');
        $('button[data-guidelines-toggle]').eq(0).addClass('active');

    }

    initial_guidelines();



    $('button[data-guidelines-toggle]').click(function() {

        //guidelines_json();
        //json;


        var type = $(this).html();
        var deets = '';
        $.each(guidelines_json, function(k, v) {
            if (v[0] === type) {
                deets = v[1];
            }
        });

        var content = '<h2><strong>' + type + '</strong></h2>' + deets + '';

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


    /*
    
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
    }


        if ($(this).data(recaptcha)) {
            var response = grecaptcha.getResponse();

            
            if (response.length === 0) {
                //reCaptcha not verified
                exists = $(target+' .alert-recaptcha').length;
                if (!exists) {
                    // alert doesn't exist yet. create it
                    oops = createAlert('alert-recaptcha','Whoops! Please complete all fields above to continue to the next screen.');
                    $(this).before(oops);
                } else {
                    // flash the alert as a reminder that they still need to verify
                    $(target+' .alert-recaptcha').addClass('alert-reminder').delay(300).queue(function() {
                        $(target+' .alert-recaptcha').removeClass('alert-reminder').dequeue();
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
            */

    var box2 = $(this).parent().parent();
    if (box2.hasClass('box-2')) {
        //console.log('true!');
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
    $('.alert').remove();
    removeclasses(target, "slide");
    $(target).addClass('slide-' + slide);
    $('[modal-slide-button].active').removeClass('active');
    $('[data-slideto=' + slide + ']').addClass('active').removeClass('disabled');

});

var u = new Url();
console.log(u);
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