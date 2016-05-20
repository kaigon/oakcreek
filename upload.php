<?php

error_reporting(E_ALL);

// we first include the upload class, as we will need it here to deal with the uploaded file
include('src/class.upload.php');

// set variables
$dir_dest = (isset($_GET['dir']) ? $_GET['dir'] : 'tmp');
$dir_pics = (isset($_GET['pics']) ? $_GET['pics'] : $dir_dest);




// we have three forms on the test page, so we redirect accordingly
if ((isset($_POST['action']) ? $_POST['action'] : (isset($_GET['action']) ? $_GET['action'] : '')) == 'multiple') {

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
                // everything was fine !
                echo '<p class="result">';
                echo '  <b>File uploaded with success</b><br />';
                echo '  File: <a href="'.$dir_pics.'/' . $handle->file_dst_name . '">' . $handle->file_dst_name . '</a>';
                echo '   (' . round(filesize($handle->file_dst_pathname)/256)/4 . 'KB)';
                echo '</p>';
            } else {
                // one error occured
                echo '<p class="result">';
                echo '  <b>File not uploaded to the wanted location</b><br />';
                echo '  Error: ' . $handle->error . '';
                echo '</p>';
            }

        } else {
            // if we're here, the upload file failed for some reasons
            // i.e. the server didn't receive the file
            echo '<p class="result">';
            echo '  <b>File not uploaded on the server</b><br />';
            echo '  Error: ' . $handle->error . '';
            echo '</p>';
        }
    }

} else if ((isset($_POST['action']) ? $_POST['action'] : (isset($_GET['action']) ? $_GET['action'] : '')) == 'local' || isset($_GET['file'])) {

    // ---------- LOCAL PROCESSING ----------


    //error_reporting(E_ALL ^ (E_NOTICE | E_USER_NOTICE | E_WARNING | E_USER_WARNING));
    ini_set("max_execution_time",0);

    // we don't upload, we just send a local filename (image)
    $handle = new Upload((isset($_POST['my_field']) ? $_POST['my_field'] : (isset($_GET['file']) ? $_GET['file'] : '')));

    // then we check if the file has been "uploaded" properly
    // in our case, it means if the file is present on the local file system
    if ($handle->uploaded) {

        // now, we start a serie of processes, with different parameters
        // we use a little function TestProcess() to avoid repeting the same code too many times
        function TestProcess(&$handle, $title = 'test', $details='') {
            global $dir_pics, $dir_dest;

            $handle->Process($dir_dest);

            if ($handle->processed) {
                echo '<fieldset class="classuploadphp">';
                echo '  <legend>' . $title . '</legend>';
                echo '  <div class="classuploadphppic"><img src="'.$dir_pics.'/' . $handle->file_dst_name . '" />';
                $info = getimagesize($handle->file_dst_pathname);
                echo '  <p>' . $info['mime'] . ' &nbsp;-&nbsp; ' . $info[0] . ' x ' . $info[1] .' &nbsp;-&nbsp; ' . round(filesize($handle->file_dst_pathname)/256)/4 . 'KB</p></div>';
                if ($details) echo '  <pre class="code php">' . htmlentities($details) . '</pre>';
                echo '</fieldset>';
            } else {
                echo '<fieldset class="classuploadphp">';
                echo '  <legend>' . $title . '</legend>';
                echo '  Error: ' . $handle->error . '';
                if ($details) echo '  <pre class="code php">' . htmlentities($details) . '</pre>';
                echo '</fieldset>';
            }
        }
        if (!file_exists($dir_dest)) mkdir($dir_dest);
    

    } else {
        // if we are here, the local file failed for some reasons
        echo '<b>local file error</b><br />';
        echo 'Error: ' . $handle->error . '';
    }
}

echo '<p class="result"><a href="index.html">do another test</a></p>';

if (isset($handle)) {
    echo '<pre>';
    echo($handle->log);
    echo '</pre>';
}
?>