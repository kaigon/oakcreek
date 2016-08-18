<?php
date_default_timezone_set('UTC');
ini_set('display_errors', 1);
ini_set('upload_max_filesize', '40M');
ini_set('post_max_size', '250M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);



ERROR_REPORTING("E_ALL");
$ds          = DIRECTORY_SEPARATOR;  //1
$storeFolder = 'uploads';   //2
 
if (!empty($_FILES)) {
    $tempFile = $_FILES['file']['tmp_name'];          //3             
    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  //4
    $targetFile =  $targetPath. $_FILES['file']['name'];  //5
    move_uploaded_file($tempFile,$targetFile); //6
}


?>
