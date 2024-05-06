function submitfun() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("Password").value;

    fetch("http://localhost:8080/admin/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => {
        if (!response.ok) {
            document.getElementById("msg").innerText = "Invalid credentials. Please try again.";
            throw new Error('Network response was not ok');
        }
        return response;
    })
    .then(response => {
        if (response.status === 200) {
            console.log("Valid user");
            // Redirect to another page if the user is valid
            window.location.href = 'admin.html';
        } else {
            console.error('Invalid user');
            document.getElementById("msg").innerText = "Invalid credentials. Please try again.";

            // Handle invalid user (e.g., display an error message)
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        // Handle any errors (e.g., display an error message to the user)
    });
}
