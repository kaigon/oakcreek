<?php

error_reporting(E_ALL);

// we first include the upload class, as we will need it here to deal with the uploaded file
include('src/class.upload.php');

// set variables
$dir_dest = (isset($_GET['dir']) ? $_GET['dir'] : 'tmp');
$dir_pics = (isset($_GET['pics']) ? $_GET['pics'] : $dir_dest);

$fileupload = '<label>Files:</label><br>';


// we have three forms on the test page, so we redirect accordingly
if ((isset($_POST['action']) ? $_POST['action'] : (isset($_GET['action']) ? $_GET['action'] : '')) == 'xhr') {

    // ---------- MULTIPLE UPLOADS ----------

    // as it is multiple uploads, we will parse the $_FILES array to reorganize it into $files
    $files = array();
    foreach ($_FILES['my_field'] as $k => $l) {
        foreach ($l as $i => $v) {
            if (!array_key_exists($i, $files))
                $files[$i] = array();
            $files[$i][$k] = $v;
            
        }
    }

    // now we can loop through $files, and feed each element to the class
    foreach ($files as $file) {

        // we instanciate the class for each element of $file
        $handle = new Upload($file);

        // then we check if the file has been uploaded properly
        // in its *temporary* location in the server (often, it is /tmp)
        if ($handle->uploaded) {

            // now, we start the upload 'process'. That is, to copy the uploaded file
            // from its temporary location to the wanted location
            // It could be something like $handle->Process('/home/www/my_uploads/');
            $handle->Process($dir_dest);

            // we check if everything went OK
            if ($handle->processed) {
                $fileupload .= '<p><a href="'.$dir_pics.'/' . $handle->file_dst_name . '">' . $handle->file_dst_name . '</a></p>';
                // everything was fine !
                /*
                echo '<p class="result">';
                echo '  <b>File uploaded with success</b><br />';
                echo '  File: <a href="'.$dir_pics.'/' . $handle->file_dst_name . '">' . $handle->file_dst_name . '</a>';
                echo '   (' . round(filesize($handle->file_dst_pathname)/256)/4 . 'KB)';
                echo '</p>';
                */
            } else {
                // one error occured
                /*
                echo '<p class="result">';
                echo '  <b>File not uploaded to the wanted location</b><br />';
                echo '  Error: ' . $handle->error . '';
                echo '</p>';
                */
            }
            /*
            if (isset($handle)) {
                echo '<pre>';
                echo($handle->log);
                echo '</pre>';
            }
            */

        } else {
            // if we're here, the upload file failed for some reasons
            // i.e. the server didn't receive the file
            /*
            echo '<p class="result">';
            echo '  <b>File not uploaded on the server</b><br />';
            echo '  Error: ' . $handle->error . '';
            echo '</p>';
            */
        }
    }


    $subjectline = 'Files were uploaded to Oakcreek Printing!';
    $my_email = 'jparks@journalstar.com';

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        //$name = strip_tags(trim($_POST["ubizname"]));
                //$name = str_replace(array("\r","\n"),array(" "," "),$name);
        //$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = preg_replace('/[^0-9]/', '', $_POST['ubizphone']);
        $company = trim($_POST["ubizname"]);
        $message = trim($_POST["ubizmessage"]);

        // Check that data was sent to the mailer.
        /*
        if ( empty($phone) ) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            //echo "[name] = ".$name." and [message] = ".$message." and [email] = ".$email;
            exit;
        }
        */

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = $my_email;

        // Set the email subject.
        $subject = $subjectline;

        // Build the email content.
        $email_content = '';
        if($company){ $email_content .= "Business: $company\n"; }
        if($phone){ $email_content .= "Phone: $phone\n";}
        if($message){ $email_content .= "\nMessage:\n$message\n"; }
        $email_content .= $fileupload;

        // Build the email headers.
        //$email_headers = "From: $name <$email>";
        $email_headers = '';

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent. We will be in touch!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

}
//echo '<h2>Thank you!</h2>';
//echo 'Your files have been uploaded and someone should be in touch with you shortly';



?>
