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
