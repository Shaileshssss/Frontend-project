
window.onload = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd; 
    document.getElementById('start-date').min = today;
};

function setMinEndDate() {
    var startDate = document.getElementById('start-date').value;
    document.getElementById('end-date').disabled = false;
    document.getElementById('end-date').min = startDate; 
}

function bookNow() {
    
    let destination = document.getElementById('destination').value;
    let people = document.getElementById('people').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description').value.length;
     
    if (destination && people && startDate && endDate) {
        if(description<50 || description>500){
            alert('Description must be of length 50-500');
        }
        else{
            alert('Booking successful!'); 
            document.getElementById('destination').value = '';
            document.getElementById('people').value = '';
            document.getElementById('start-date').value = '';
            document.getElementById('end-date').value = '';
            document.getElementById('description').value = '';
        }
    } else {
        alert('Please fill in all fields.');
    }    
}

$('.carousel').carousel({
    interval: 2000
  })


 
  document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
  });
  
  document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.getElementById('gender').value;
    if (fullname.trim() === '' || contact.trim() === '' || dob.trim() === '' || email.trim() === '' || password.trim() === '' || gender.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    alert('Registration successful!');
    // Additional logic for registration (e.g., form submission)
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    alert('Login successful!');
    // Additional logic for login (e.g., form submission)
  });
  