

document.forms.contactForm.addEventListener("submit", function(event){
    event.preventDefault();
      
       var user_email = document.forms.contactForm.userEmail.value;
       if(user_email.length == 0){
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("emailError").style.color = "#E96931" ;
        document.getElementById("emailError").innerHTML = "This field is required";
    }

}); 




