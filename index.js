function submitEmail() {

  var email = document.getElementById('email');
  var message = document.getElementById('error-message');
  var icon = document.getElementById('error-icon');


  if (email.value === "") {
    message.className = "error-message";
    icon.className = "error-icon";
    email.className = "error-border";

  }
  if (email.value !== "") {
    message.className = "hide";
    icon.className = "hide";
  }
  if (!email.value.includes('@')) {
    message.className = "error-message";
    icon.className = "error-icon";
    email.className = "error-border";
  }
}
