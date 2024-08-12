document.getElementById('return-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get form values
    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    const orderId = document.getElementById('order-id').value;
    const reason = document.getElementById('return-reason').value;

    // Simple validation (can be enhanced)
    if (!name || !email || !orderId || !reason) {
        displayMessage('Please fill in all fields.', 'error');
        return;
    }

    // Simulate form submission
    setTimeout(function() {
        displayMessage('Your return request has been submitted successfully.', 'success');
    }, 500);

    // Clear form fields
    document.getElementById('return-form').reset();
});

function displayMessage(message, type) {
    const responseMessageElement = document.getElementById('response-message');
    responseMessageElement.textContent = message;
    responseMessageElement.style.color = type === 'success' ? 'green' : 'red';
}
