$(document).ready(function () {
    $('#close-button').click(function () {
        $('#alert').fadeOut(300);
    });

    $('#notification-bell').click(function () {
        if ($('#notifications').css('visibility') == 'hidden') {
            $('#notifications').css('visibility', 'visible');
        } else {
            $('#notifications').fadeToggle(300, 'linear');
        }

        $('#icon-alert').fadeOut(300);
        return false;
    });

    $(document).click(function () {
        $('#notifications').fadeOut(300);
    });

    $('#notifications').click(function () {
        return false;
    });

    $('button#send').click(function (event) {
        event.preventDefault();
        $('#message-form').hide();

        if ($('#user-search').val().length === 0 || $('#message').val().length === 0) {
            $('#message-user').append('<div id="error"><p>Enter a user and a message.</p><button id="try-again">Try Again</button></div>')

            $('#try-again').click(function () {
                $('#error').remove();
                $('#message-form').show();
            });
        }
        else if ($('#user-search').val().length > 0) {
            $('#message-user').append('<div id="confirmation"><p>Message delivered!</p><button id="new-message">Send Message</button></div>')

            $('#new-message').click(function () {
                $('#confirmation').remove();
                $('#message-form')[0].reset();
                $('#message-form').show();
            });
        }
    });

    $('#save').click(function (event) {
        event.preventDefault;
        let timezone = $('#timezone').val();
        localStorage.setItem('myTimeZone', timezone);

        let email = $('#onoffswitch-email').prop('checked');
        localStorage.setItem('myEmailSetting', email);

        let privacy = $('#onoffswitch-privacy').prop('checked');
        localStorage.setItem('myPrivacySetting', privacy);
    });

    $('#timezone').val(localStorage.getItem('myTimeZone'));

    if (localStorage.getItem('myEmailSetting') == 'true') {
        $('#onoffswitch-email').prop('checked', true);
    } else {
        $('#onoffswitch-email').prop('checked', false);
    }

    if (localStorage.getItem('myPrivacySetting') == 'true') {
        $('#onoffswitch-privacy').prop('checked', true);
    } else {
        $('#onoffswitch-privacy').prop('checked', false);
    }

    $('#cancel').click(function (event) {
        event.preventDefault();
        localStorage.clear();
        $('#timezone').val('');
        $('#onoffswitch-email').prop('checked', false);
        $('#onoffswitch-privacy').prop('checked', false);
    });

    $(function () {
        let choices = ['Tracy Gill','Victoria Chambers','Mindy Reynolds','Philip Wheeler',
                        'Dale Byrd','Cora Clayton','Dawn Wood','Rodolfo Aguilar','Dan Oliver'];
        choices.sort();
        $("#user-search").autocomplete({
            source: choices
        });
    });
});