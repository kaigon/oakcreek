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