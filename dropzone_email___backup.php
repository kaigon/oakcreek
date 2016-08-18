<?php
$phone = $_POST['ubizphone'];
$company = $_POST["ubizname"];
$message = $_POST["ubizmessage"];

$fileupload = "The following files were uploaded: \r\n";

foreach($_POST["file-to-upload"] as $k => $v){
    $val = rawurlencode($v);
    $fileupload.="*  http://oakcreek.ljssupport.com/uploads/".$val." \r\n";
}

$subjectline = 'Files were uploaded to Oakcreek Printing!';
$recipient = 'jparks@journalstar.com';

$empty = "none provided \r\n";


$emailbody = $fileupload;
$emailbody.= "\r\n";
$emailbody.= "Submitted by:\r\n";
($company ? $emailbody .= "Business: " . $company . "\r\n" : $emailbody .= "Company: ".$empty);
($phone ? $emailbody .= "Phone: " . $phone . "\r\n" : $emailbody .= "Phone: ".$empty);
($message ? $emailbody .= "Message: \r\n" . $message . "\r\n" : $emailbody .= "Message: \r\n".$empty);
$email_headers = "From: Oakcreek Printing <oakcreek@oakcreek.com>";

mail($recipient, $subjectline, $emailbody, $email_headers);


?>
