<?php
ini_set('display_errors','On');
error_reporting('E_ALL');
$name = $_POST['authorMsg'];
$city = $_POST['cityMsg'];
$email = $_POST['emailMsg'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$city = htmlspecialchars($city);

$name = urldecode($name);
$email = urldecode($email);
$city = urldecode($city);

$name = trim($name);
$email = trim($email);
$city = trim($city);
//echo $fio;
//echo "<br>";
echo $email;
if (mail("d.g.litvinov@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email. ,"From: example2@localhost.com/ \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>