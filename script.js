function changeRole() {
    let role = document.getElementById("user-role").value;
    let title = document.getElementById("role-title");
    let loginBox = document.querySelector(".login-box");

    switch (role) {
        case "student":
            title.innerText = "Login as Student";
            loginBox.className = "login-box student";
            break;
        case "teacher":
            title.innerText = "Login as Teacher";
            loginBox.className = "login-box teacher";
            break;
        case "parent":
            title.innerText = "Login as Parent";
            loginBox.className = "login-box parent";
            break;
        case "admin":
            title.innerText = "Login as Admin";
            loginBox.className = "login-box admin";
            break;
    }
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("login-message");

    if (username === "" || password === "") {
        message.innerText = "Please enter username and password!";
    } else {
        message.innerText = "Login successful!";
        message.style.color = "green";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        }, 1000);
    }
}
