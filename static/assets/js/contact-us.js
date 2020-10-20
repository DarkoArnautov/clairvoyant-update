$(document).ready(function() {
    function clearForm() {
        ["firstName", "lastName", "email", "message"].map( (elem) =>{ 
            document.getElementById(elem).value = "";
        });
    }
    $('#contactform').on('submit', function(e) {
        e.preventDefault();

        //get the first name field value
        var firstName = $('#firstName').val();
        //get the last name field value
        var lastName = $('#lastName').val();
        //get the email field value
        var email = $('#email').val();
        //get the company field value
        var companyName = $('#companyName').val();
        //get the message
        var message = $('#message').val();
        var target = $('#_target').val();
        var subject = $('#_subject').val();

        console.log(target);

        //send to formspree
        $.ajax({
            url:'https://formspree.io/' + target,
            method:'POST',
            data:{
                firstName:firstName,
                lastName:lastName,
                companyName: companyName,
                _replyto:email,
                message:message,
                _subject:subject
            },
            dataType:"json",
            success:function() {
                $('#submitBtn').hide();
                $('#thanksBtn').show();
                clearForm();
            },
            error: function() {
                console.log('form failure');
            }
        });

    });

});