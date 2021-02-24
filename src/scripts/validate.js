/*-------------------------Quote Form Validation----*/
const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');

const lastName = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');

const email = document.getElementById('email');
const emailError = document.getElementById('emailError');

const phone = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');

const sizes = document.getElementById('sizes');
const sizesError = document.getElementById('sizesError');

const howLong = document.getElementById('howLong');
const howLongError = document.getElementById('howLongError');

const date = document.getElementById('date');
const dateError = document.getElementById('dateError');

const textRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^[1-9]\d/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const formValidate = (e) => {
    // Validate First Name (Between 3 and 15 letters)
    if (firstName.value.length < 3 || firstName.value.length > 15 || textRegex.test(firstName.value) === false) {
        e.preventDefault();
        firstName.className = ' form-error';
        firstNameError.innerText = 'Enter text between 3 and 15 letters';
    } else {
        firstName.className = '';
        firstNameError.innerText = '';
    }

    // Validate Last Name (Between 3 and 15 letters)
    if (lastName.value.length < 3 || lastName.value.length > 15 || textRegex.test(lastName.value) === false) {
        e.preventDefault();
        lastName.className = ' form-error';
        lastNameError.innerText = 'Enter text between 3 and 15 letters';
    } else {
        lastName.className = '';
        lastNameError.innerText = '';
    }

    // Validate Email (Is an email address and not empty)
    if (emailRegex.test(email.value) === false) {
        e.preventDefault();
        email.className = ' form-error';
        emailError.innerText = 'Enter a valid email address';
    } else {
        email.className = '';
        emailError.innerText = '';
    }

    // Validate Phone (Must be an 11 digit phone number and not empty)
    if (phone.value.length !== 11 || phoneRegex.test(phone.value) === false) {
        e.preventDefault();
        phone.className = ' form-error';
        phoneError.innerText = 'Enter an 11 digit phone number';
    } else {
        phone.className = '';
        phoneError.innerText = '';
    }

    // Validate Size Dropdown (An option must be selected)
    if (sizes.value === "") {
        e.preventDefault();
        sizes.className = ' form-error';
        sizesError.innerText = 'You must choose a size';
    } else {
        sizes.className = '';
        sizesError.innerText = '';
    }

    // Validate How Long Dropdown (An option must be selected)
    if (howLong.value === "") {
        e.preventDefault();
        howLong.className = ' form-error';
        howLongError.innerText = 'You must select a duration';
    } else {
        howLong.className = '';
        howLongError.innerText = '';
    }

    // Validate Date Picker (A valid date must be entered / selected)
    if (dateRegex.test(date.value) === false) {
        e.preventDefault();
        date.className = ' form-error';
        dateError.innerText = 'You must enter or select a valid date';
    } else {
        date.className = '';
        dateError.innerText = '';
    }
};

document.getElementById('quoteForm').addEventListener('submit', formValidate, false);