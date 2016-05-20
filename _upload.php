<?php

error_reporting(E_ALL);

// we first include the upload class, as we will need it here to deal with the uploaded file
include('src/class.upload.php');

// set variables
$dir_dest = $_GET['dir'] : 'tmp';
//$dir_pics = $_GET['pics'] : $dir_dest;


$files = array();
foreach ($_FILES['my_field'] as $k => $l) {
    foreach ($l as $i => $v) {
        if (!array_key_exists($i, $files))
            $files[$i] = array();
        $files[$i][$k] = $v;
    }
}

// now we can loop through $files, and feed each element to the class
foreach ($files as $file):

    $handle = new upload($file);
    if ($handle->uploaded) {

        $file_ext = $handle->file_src_name_ext;
        $file_name = $handle->file_src_name;
        $file_mime = $handle->file_src_mime;
        $file_size = $handle->file_src_size;
        $file_error = $handle->file_src_error;

        $handle->file_safe_name = true;
        $handle->file_max_size = '20000'; // 1KB
        $handle->allowed = array(
            'application/pdf',
            'application/ai',
            'application/eps',
            'application/psd',
            'application/zip',
            'application/rar',
            'image/png',
            'image/tif',
            'image/jpg'
        );
        $handle->mime_check = true;
        //$handle->file_new_name_body   = 'image_resized';
        //$handle->image_resize         = true;
        //$handle->image_x              = 100;
        //$handle->image_ratio_y        = true;
        $handle->process($dir_dest);
        if ($handle->processed) {
            //echo 'image resized';
            echo $file_name.'.'.$file_ext.' uploaded.';
            echo 'Thank you! someone will begin processing your file shortly. If we need anything further we will be in touch.';
            //$handle->clean();
        } else {
            echo 'error : ' . $handle->error;
        }
    }
endforeach;


echo '<p class="result"><a href="index.html">do another test</a></p>';

if (isset($handle)) {
    echo '<pre>';
    echo($handle->log);
    echo '</pre>';
}
?>
