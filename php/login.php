<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include '.\dbconnect.php';

    $userid = $_POST["user"];
    $password = $_POST["pass"];

    $sql = "SELECT * FROM `signup` WHERE Email ='$userid' AND Password='$password'";
    $execute = mysqli_query($conn, $sql) or die("Query failed");
    $num = mysqli_num_rows($execute);
    // if one record found in table where username and password in one line then will be enter in body of if statment 
    if ($num == 1) {
        // data store in form of array that is fetched by $execute
        header("location:..\conformed.html");
    } else {
        echo "<h1 style='color:green'> invalid userid and password </h1>";
        //* echo "<script>  alert('invalid userid and password') ; </script>";
    }
}
