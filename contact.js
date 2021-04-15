function validate(){
    var name = document.getElementById("Fornavn").value;
    var name = document.getElementById("Efternavn").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Telefon").value;
    var error_message = document.getElementById("error_message");

    var text;
  if(name.length < 5){
    text = "Indtast venligst gyldig navn";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Indtast venligst gyldig telefon";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Indtast venligst gyldig email";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}