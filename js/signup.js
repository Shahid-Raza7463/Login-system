function form_validation() {
  //*Validation of full name
  var fullname = document.getElementById("fname").value;

  if (fullname == "") {
    alert("please fill the name");
    document.getElementById("fname").focus();
    return false;
  } else if (fullname.length < 3 || fullname.length > 15) {
    alert(" the name charecter must be between 3 and 15");
    document.getElementById("fname").focus();
    return false;
  }

  //*Validation of mobile number
  var phone = document.getElementById("mobile").value;

  if (phone == "") {
    alert("please fill the phone number");
    document.getElementById("mobile").focus();
    return false;
  } else if (isNaN(phone)) {
    alert("mobile number must be only digit");
    document.getElementById("mobile").focus();
    return false;
  } else if (phone.length < 10 || phone.length > 10) {
    alert("mobile number must be 10 digit");
    document.getElementById("mobile").focus();
    return false;
  }

  //*Validation of email id
  var emailid = document.getElementById("email").value;
  var at = emailid.indexOf("@");
  var dot = emailid.lastIndexOf(".");

  if (emailid == "") {
    alert("please fill the email id");
    document.getElementById("email").focus();
    return false;
  } else if (at < 1 || dot >= emailid.length) {
    alert("invalid @ position or dot position");
    document.getElementById("email").focus();
    return false;
  } else if (dot - at < 6 || dot - at > 15) {
    alert("charecter must be between 6 and 15 in between @ and dot(.)");
    document.getElementById("email").focus();
    return false;
  }

  //*Validation of password all
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("cpassword").value;

  if (pass1 == "") {
    alert("please fill the password");
    document.getElementById("password").focus();
    return false;
  } else if (pass2 == "") {
    alert("please fill the conform password");
    document.getElementById("cpassword").focus();
    return false;
  } else if (pass1 != pass2) {
    alert("conform password must be same");
    document.getElementById("cpassword").focus();
    return false;
  }
}
