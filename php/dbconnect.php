<?php
$server = "localhost";
$username = "root"; //default is root   
$password = "";
$dbname = "loginsystem"; //my database name 

//connection database 
$conn = mysqli_connect($server, $username, $password, $dbname);
//check database connect ya not
if (!$conn) {
    //     echo "connection successful";
    // } else {
    die(" connection error" . mysqli_connect_error());
}
