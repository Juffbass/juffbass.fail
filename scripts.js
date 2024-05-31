document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if(name && email && message) {
        alert('Message sent successfully!');
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
