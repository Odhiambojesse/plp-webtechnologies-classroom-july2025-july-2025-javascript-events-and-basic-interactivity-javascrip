const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});

const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => {
    hoverText.style.color = 'red';
});

const nameInput = document.getElementById('nameInput');
const displayName = document.getElementById('displayName');
nameInput.addEventListener('input', () => {
    displayName.textContent = `Hello, ${nameInput.value}!`;
}); 

const slider = document.getElementById('fontSlider');
const text = document.getElementById('SliderText');
slider.oninput = function() {
    text.style.fontSize = `${slider.value}px`;       
};

const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

const form = document.getElementById('myForm');
const email = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
form.onsubmit = function (e) {
    if (!email.value) {
        e.preventDefault();
        errorMessage.textContent = 'Email is required!';
    }
};

const username = document.getElementById('username'); 
username.oninput = function() {
    if (username.value.length < 5) {
        username.setCustomValidity('Username must be at least 5 characters long.');
    } else {
        username.setCustomValidity('');
    }
    };   