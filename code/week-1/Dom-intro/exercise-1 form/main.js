const nameText = document.getElementById("name");
const salaryText = document.getElementById("salary");
const birthdayText = document.getElementById("birthday");
const phoneText = document.getElementById("phone");
const errorText = document.getElementById("error");
const submitButton = document.getElementById("submit");

function checkName() {
    let res = false;
    if (nameText.value.length < 3) {
        errorText.innerHTML = "Name must be longer than 2 characters";
        res = true;
    }
    if (nameText.value.length === 0) {
        errorText.innerHTML = "Name is missing";
        res = true;
    }
    return res;
}

function checkBirthday() {
    let res = false;
    if (!birthdayText.value) {
        errorText.innerHTML = "Birthday is missing";
        res = true;
    }
    if (birthdayText.value.length === 0) {
        errorText.innerHTML = "Birthday is missing";
        res = true;
    }
    return res;
}

function checkSalary() {
    let res = false;
    if (salaryText.value < 10000 || salaryText.value > 16000) {
        errorText.innerHTML =
            "Salary must be greater than 10,000 but less than 16,000";
        res = true;
    }
    if (salaryText.value.length === 0) {
        errorText.innerHTML = "Salary is missing";
        res = true;
    }
    return res;
}

function checkPhone() {
    let res = false;
    if (phoneText.value.length !== 10) {
        errorText.innerHTML = "Phone must be 10 digits long";
        res = true;
    }
    if (phoneText.value.length === 0) {
        errorText.innerHTML = "Phone is missing";
        res = true;
    }
    return res;
}
function allValidations() {
    if (!checkName()) {
        if (!checkSalary()) {
            if (!checkBirthday()) {
                checkPhone();
            }
        }
    }
}
