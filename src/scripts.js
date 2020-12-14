(function() {
    emailjs.init('user_5sB8Lh1XA1wKFsqqsWOqx');
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
     event.preventDefault();
     // generate a five digit number for the contact_number variable
     this.contact_number.value = Math.random() * 100000 | 0;
     // these IDs from the previous steps
     emailjs.sendForm('contact_service', 'contact_form', this)
         .then(function() {
             console.log('SUCCESS!');
         }, function(error) {
             console.log('FAILED...', error);
         });
  });
}


document.getElementById("contact-button").addEventListener("click", emailEnviado);

function emailEnviado() {
  const button = document.getElementById("contact-button");
  button.disabled = true;
  const textarea = document.getElementById("contact-textarea");
  textarea.value = 'Thanks for your message!';
  setTimeout(
    function() {
      button.disabled = false;
    }, 5000);
}
