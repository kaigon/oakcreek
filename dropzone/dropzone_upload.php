<?php
date_default_timezone_set('UTC');
ini_set('display_errors', 1);
ini_set('upload_max_filesize', '40M');
ini_set('post_max_size', '250M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);
//echo "dropzone_upload.php called.  Go!<br />";
ERROR_REPORTING("E_ALL");
$ds = DIRECTORY_SEPARATOR;  
$storeFolder = 'uploads';   
if (!empty($_FILES)) {
	//echo "found file, process <br />";
    $tempFile = $_FILES['file']['tmp_name'];                       
    $targetPath = dirname( __FILE__ ) . $ds. $storeFolder . $ds;  
    $targetFile =  $targetPath. $_FILES['file']['name'];  
    move_uploaded_file($tempFile,$targetFile); 
  	//echo "should have moved " . $tempFile . " to " . $targetPath . " from " . $targetFile . "<br />";
}
//echo "dpz_up done<br />";
?>     
