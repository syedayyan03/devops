function submitForm(){
  event.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();

  if(name && email && phone){
    document.getElementById("status").textContent= "Registration Successful "+ name;
  }
  else{
    alert("Enter details");
  }
}