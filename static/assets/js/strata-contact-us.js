$(document).ready(function() {

    $('#strataContactForm').on('submit', function(e) {
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

        //validation can ge here

        //send to formspree
        $.ajax({
            url:'https://formspree.io/xgaejwgx',
            method:'POST',
            data:{
                firstName:firstName,
                lastName:lastName,
                companyName: companyName,
                _replyto: email,
                message: message,
                _subject:'Strata Interest Submission',
            },
            dataType:"json",
            success:function() {
                console.log('form submission success');
                $('#submitBtn').hide();
                $('#thanksBtn').show();
            }

        });

    });


});