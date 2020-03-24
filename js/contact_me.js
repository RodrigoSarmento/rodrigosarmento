$(document).ready(function() {
   $('#contact-form').submit(function(e) {
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if(name.val() == "" || email.val() == "" || message.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/dave@daveguck.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
  