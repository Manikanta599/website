function customerList()
{
    console.log("in fun")
    fetch('http://localhost:8080/users/getusers')
  .then(response => response.json())
  .then(data => {
    // Create a table to display the fetched data
    console.log(data)
    var table = "<center> <table border='1' style='margin-top: 30px;'>";
    table += "<tr><th style='width: 100px;'>ID</th><th style='width: 150px;'>Location</th><th style='width: 150px;'>Name</th><th style='width: 150px;'>Phone Number</th></tr>";
    data.forEach(item => {
      table += "<tr>";
      table += "<td style='font-weight:bold'>" + item.id + "</td>";
      table += "<td style='font-weight:bold'>" + item.loc + "</td>";
      table += "<td style='font-weight:bold'>" + item.name + "</td>";
      table += "<td style='font-weight:bold'>" + item.phno + "</td>";
      table += "</tr>";
    });
    table += "</table> </center>";

    // Print the table in the container
    var container = document.getElementById("container");
    container.innerHTML = "<h1 style='margin-left:40vw'>Customer List</h1>"; 
    container.innerHTML+= table;
    // Display the container
    container.style.display = "block";
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


function logout() {
    
    window.location.href = "index.html";
  }



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  