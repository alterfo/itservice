<?php
$order = $_POST['order'];
$fio =  substr(htmlspecialchars(trim($order['fio'])), 0, 1000);
$phone =  substr(htmlspecialchars(trim($order['phone'])), 0, 1000000);
$comment =  substr(htmlspecialchars(trim($order['comment'])), 0, 30);
$mess = '
Имя отправителя:'.$fio.'
Контактный телефон:'.$phone.'

Сообщение:'.$comment;
if (mail('kalinon7@gmail.com', $fio, $mess, "From:tlturmarket@yandex.ru")) {
	return true;
} else {
	return false;
}
?>