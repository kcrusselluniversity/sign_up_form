// Select DOM required elements
const pw = document.querySelector("#password");
const confirm_pw = document.querySelector("#confirm_password");
const confirm_pw_container = document.querySelector('#confirm_pw_container');
const site_form = document.getElementById('site_form');
const password_match_container = document.querySelector('#password_match_container');

// Add event listeners
const pw_event = pw.addEventListener('input', checkPassword);
const pw_confirm_event = confirm_pw.addEventListener('input', checkPassword);

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
