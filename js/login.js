function form_validation() {
  //*Validation of email id
  var userid = document.getElementById("userid").value;
  var at = userid.indexOf("@");
  var dot = userid.lastIndexOf(".");

  if (userid == "") {
    alert("Please Fill The Userid");
    document.getElementById("userid").focus();
    return false;
  } else if (at < 1 || dot >= userid.length) {
    alert("Invalid @ Position Or Dot Position");
    document.getElementById("userid").focus();
    return false;
  } else if (dot - at < 6 || dot - at > 15) {
    alert("Charecter Must be Between 6 And 15 In Between @ And Dot");
    document.getElementById("userid").focus();
    return false;
  }

  //*Validation of password all
  var password = document.getElementById("password").value;

  if (password == "") {
    alert("Please Fill The Password");
    document.getElementById("password").focus();
    return false;
  } else if (password.length < 3 || password.length > 18) {
    alert("Password Must Be Between 3 And 15");
    document.getElementById("password").focus();
    return false;
  }
}
