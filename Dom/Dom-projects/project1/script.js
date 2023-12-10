btn = document.getElementById('login');
btn.addEventListener('click', function() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    
    if ( password.length < 8 ) {
        passwordMessage = document.getElementById('passwordMessage');
        passwordMessage.innerHTML = 'Password too short';
        passwordMessage.style.display = 'block';
        event.preventDefault();
    } else {
        passwordMessage.style.display = 'none';
    }

    if (username.length < 4 ) {
        passwordMessage = document.getElementById('passwordMessage');
        passwordMessage.innerHTML = 'name too short'
        passwordMessage.style.display = 'block';
        event.preventDefault();

    }
})
