$(document).ready(function() {
    $('#close').click(function() {
      $('#alert').fadeOut(200);
    });
    $('#bell').click(function() {
      if ($('#notifications').css('visibility') == 'hidden') {
        $('#notifications').css('visibility', 'visible');
      } else {
        $('#notifications').fadeToggle(300, 'linear');
      }
      $('#icon').fadeOut(300);
      return false;
    });
    $(document).click(function() {
      $('#notifications').fadeOut(300);
    });
    $('#notifications').click(function() {
      return false;
    });
    $('button#send').click(function(event) {
      event.preventDefault();
      $('#message-form').hide();
      if ($('#user-search').val().length === 0 || $('#message').val().length === 0) {
        $('#message-user').append('<div id="error"><p>Enter a user and a message.</p><button id="try-again">Try Again</button></div>')
        $('#try-again').click(function() {
          $('#error').remove();
          $('#message-form').show();
        });
      } else if ($('#user-search').val().length > 0) {
        $('#message-user').append('<div id="confirmation"><p>Message delivered!</p><button id="new-message">Send Message</button></div>')
        $('#new-message').click(function() {
          $('#confirmation').remove();
          $('#message-form')[0].reset();
          $('#message-form').show();
        });
      }
    });
    $('#save').click(function(event) {
      event.preventDefault;
      let timezone = $('#timezone').val();
      localStorage.setItem('myTimeZone', timezone);
      let email = $('#email').prop('checked');
      localStorage.setItem('myEmailSetting', email);
      let privacy = $('#profile').prop('checked');
      localStorage.setItem('myPrivacySetting', privacy);
    });
    $('#timezone').val(localStorage.getItem('myTimeZone'));
    if (localStorage.getItem('myEmailSetting') == 'true') {
      $('#email').prop('checked', true);
    } else {
      $('#email').prop('checked', false);
    }
    if (localStorage.getItem('myPrivacySetting') == 'true') {
      $('#profile').prop('checked', true);
    } else {
      $('#profile').prop('checked', false);
    }
    $('#cancel').click(function(event) {
      event.preventDefault();
      localStorage.clear();
      $('#timezone').val('');
      $('#email').prop('checked', false);
      $('#profile').prop('checked', false);
    });
    $(function() {
      let choices = ['Tracy Gill', 'Victoria Chambers', 'Mindy Reynolds', 'Philip Wheeler', 'Dale Byrd', 'Cora Clayton', 'Dawn Wood', 'Rodolfo Aguilar', 'Dan Oliver'];
      choices.sort();
      $("#user-search").autocomplete({
        source: choices
      });
    });
  });