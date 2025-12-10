const API = "http://localhost:3000/api";

async function registerUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();
    alert(result.message);

    if (response.ok) {
        window.location.href = "index.html";
    }
}

async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (!response.ok) {
        alert(result.message);
        return;
    }

    localStorage.setItem("token", result.token);
    window.location.href = "upload.html";
}
