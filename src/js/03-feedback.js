import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");

// Load
document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
        const { email, message } = JSON.parse(storedData);
        emailInput.value = email;
        messageInput.value = message;
        console.log(storedData);
    }
});

// Tracking
const saveToLocalStorage = throttle(() => {
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    const formData = {
        email: emailValue,
        message: messageValue,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveToLocalStorage);

// Remove
form.addEventListener('submit', event => {
    event.preventDefault();
    // Log form data
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    console.log({
        email: emailValue,
        message: messageValue,
    });
    localStorage.removeItem('feedback-form-state');
    console.log('Clear localStorage');
    form.reset();
});