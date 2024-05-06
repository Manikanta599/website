function submitfun() {
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("Password1").value;
    const password2 = document.getElementById("Password2").value;
    console.log(password1+" "+password2)
    console.log("in password")
    if (password1 == password2) {
      fetch("http://localhost:8080/admin/updateadmin", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: password2 }),
      })
        .then(response => {
          if (response.ok) {
            console.log("SUCCESS");
            window.alert("Password Updated");
            // Redirect to another page if the user is valid
            //window.location.href = 'admin.html';
          } else {
            console.error('NOT SUCCESS');
            // Handle invalid user (e.g., display an error message)
          }
        })
        .catch(error => {
          console.error('Fetch error:', error);
          // Handle any errors (e.g., display an error message to the user)
        });
    } else {
      window.alert("Passwords must match!!");
    }
  }
  