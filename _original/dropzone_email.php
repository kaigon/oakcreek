<?php
$subject = 'Files were uploaded to Oakcreek Printing!';
$to = 'jparks@journalstar.com';
$empty = "This field was left blank. \r\n";
$phone = $_POST['ubizphone'];
$company = $_POST["ubizname"];
$message = $_POST["ubizmessage"];

if($company === ""){
    $company = $empty;
}
if($phone === ""){
    $phone = $empty;
}
if($message === ""){
    $message = $empty;
}

$headers = "From: Oakcreek Printing <noreply@oakcreekprinting.com> " . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$body = 
'<table rules="all" border="1" style="border-color:#666;" cellspacing="0" cellpadding="15" width="100%">
    <tr style="background: #eee;">
        <td width="20%"><strong>Submitted by:</strong> </td>
        <td>'.htmlentities($company).'</td>
    </tr>
    <tr>
        <td><strong>Phone #:</strong></td>
        <td>'.strip_tags($phone).'</td>
    </tr>
    <tr>
        <td valign="top"><strong>Message:</strong></td>
        <td>'.htmlentities($message).'</td>
    </tr>
    <tr>
        <td valign="top"><strong>Files uploaded:</strong></td>
        <td valign="top">
            <ul style="margin-top:0;">'; 
                foreach($_POST["file-to-upload"] as $k => $v){ 
                    $val = rawurlencode($v); 
                    $body.='<li style="padding:0;margin-bottom:6px;">';
                    $body.='http://oakcreek.ljssupport.com/uploads/'.$val;
                    $body.='</li>'; 
                }
$body.='    </ul>
        </td>
    </tr>
</table>';


mail($to, $subject, $body, $headers);


?>
