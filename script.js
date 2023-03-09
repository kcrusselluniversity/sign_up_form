// Select DOM required elements
const pw = document.querySelector("#password");
const confirm_pw = document.querySelector("#confirm_password");
const confirm_pw_container = document.querySelector('#confirm_pw_container')

// Add event listeners for passwords
const pw_event = pw.addEventListener('input', checkPassword);
const pw_confirm_event = confirm_pw.addEventListener('input', checkPassword);

// Select password_match_container 
const password_match_container = document.querySelector('#password_match_container');

// Functions 
function checkPassword(e){
    // Case 1: the other password field is empty
    if (!confirm_pw.value || !pw.value) {
        return
    } 
    // Case 2: They both have content, so check if the same
    if (pw.value === confirm_pw.value) {
        password_match_container.style.visibility = 'hidden';
    } else {
        // Show 'passwords dont match' element
        password_match_container.style.visibility = 'visible';
    }
}