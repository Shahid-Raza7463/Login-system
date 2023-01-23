<?php
//* check method post ya not
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include './dbconnect.php'; //// file include for connection

  $name1 = $_POST["name"];
  $number = $_POST["number"]; //// assign value of form
  $email1 = $_POST["username"];
  $pass = $_POST["password"];
  $cpass = $_POST["cpassword"];
  // todo above complete

  //* Account exists or not in table
  $existsql = "SELECT * FROM `signup` WHERE Email ='$email1'"; ////its query
  $executequery = mysqli_query($conn, $existsql); ////executes of query
  $numExistRows = mysqli_num_rows($executequery); //// fetch rows all in table

  if ($numExistRows > 0) {     //// check exist ya not record here 0 = empty record
    echo "<h1> username already exists </h1>";
  } else {
    //* if not exist then insert record in table
    if ($pass == $cpass) {
      $sql = "INSERT INTO `signup` (`Id`, `Name`,`Mobile`,`Email`, `Password`, `Confirm-Password`) VALUES ('' , '$name1' , '$number' , '$email1', '$pass', '$cpass')";
      $execute_sql = mysqli_query($conn, $sql);

      if ($execute_sql) {
        echo "<h1 style='color:green'>Your account is created Successfully</h1> "; //// data inserted in table
      } else {
        die("error" . mysqli_connect_error()); //// data not inserted in table
      }
    }
  }
} else {
  echo "method must be 'POST' in form tag";
}
