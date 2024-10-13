<?php
ob_start();

session_start();

$likes = 0;
$_SESSION["likes"] = $likes;

var_dump(json_encode($_SESSION["likes"]));
ob_clean();

die();
?>