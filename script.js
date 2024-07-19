
let form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault();
        var data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            messageSubject: document.getElementById('messageSubject').value,
            message: document.getElementById('message').value,
        };
        console.log('Form Data Submitted: ', data);
    }
    form.classList.add('was-validated');
}, false);


