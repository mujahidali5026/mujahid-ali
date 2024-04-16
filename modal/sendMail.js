
document.getElementById('send_message').addEventListener('click', function () {
    sendMail();
});

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
    } else {
        
        var params = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        const serviceID = "service_bvjl0cj";
        const templateID = "template_achuilp";

        emailjs.send(serviceID, templateID, params)
            .then(
                (res) => {
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('subject').value = "";
                    document.getElementById('message').value = "";
                    console.log(res);
                    alert('Your Message Sent Successfully');
                }
            )
            .catch((error) => console.log(error));
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
