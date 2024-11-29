document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, passwordd: password }),
        });

        if (res.ok) {
            window.location.href = "/1_inicio/index.html"; // Redirige a la página de inicio
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
        alert("Ocurrió un error. Intente nuevamente.");
    }
});