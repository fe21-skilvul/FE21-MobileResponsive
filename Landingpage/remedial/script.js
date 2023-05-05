function isNumber(string) {
    return !isNaN(string);
}

function checkboxIsChecked() {
    return document.getElementById('check').checked;
}

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = checkboxIsChecked();

    return { name, city, email, zipCode, status };
}

function validateFormData(formData) {
    if (!formData) {
        return false;
    }

    const { zipCode, status } = formData;

    if (!isNumber(zipCode)) {
        return false;
    }

    if (!status) {
        return false;
    }

    return true;
}

function submit(event) {
    event.preventDefault();

    const formData = handleGetFormData();

    if (validateFormData(formData)) {
        document.getElementById('warning').innerHTML = '';
        // proses submit form
    } else {
        document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', submit);