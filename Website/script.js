function aboutFun()
{ 
    document.getElementById("cockroach").style.display="none"
    document.getElementById("ant").style.display="none";
    document.getElementById("homecon").style.display = "none";
    document.getElementById("contactus").style.display="none";
    document.getElementById("login_Con").style.display="none";
    var about = document.getElementById("about");
    about.style.display = "block";
    
}

function homeFun()
{
    document.getElementById("ant").style.display="none";
    document.getElementById("cockroach").style.display="none"

    document.getElementById("about").style.display="none";
    document.getElementById("contactus").style.display="none";
    document.getElementById("login_Con").style.display="none";
    console.log("in home fun")
    
    var home=document.getElementById("homecon").style.display="block"
    
}

var image = [
    "media/i1.png",
    "media/i2.png",
    "media/i3.png",
    "media/i4.png",
    "media/i5.png"
];

var numberOfImg = image.length;
var imgNumber = 0;
var intervalId; // Variable to store the interval ID

function previousImage() {
    if (imgNumber > 0) {
        imgNumber--;
    } else {
        imgNumber = numberOfImg - 1;
    }
    document.getElementById('slideImage').src = image[imgNumber];
}

function nextImage() {
    if (imgNumber < numberOfImg - 1) {
        imgNumber++;
    } else {
        imgNumber = 0;
    }
    document.getElementById('slideImage').src = image[imgNumber];
}

// Function to start automatic sliding
function startAutoSlide() {
    intervalId = setInterval(nextImage, 2000); // Change the interval time as needed (in milliseconds)
}

// Function to stop automatic sliding
function stopAutoSlide() {
    clearInterval(intervalId);
 }

// Start automatic sliding when the page loads
window.onload = startAutoSlide;



function contactFun()
{
    document.getElementById("ant").style.display="none";
    document.getElementById("cockroach").style.display="none"

    console.log("in contact us")
    document.getElementById("homecon").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("login_Con").style.display="none";
    document.getElementById("contactus").style.display="block";

}


function loginFun()
{
    document.getElementById("homecon").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("contactus").style.display="none"
    document.getElementById("ant").style.display="none";
    document.getElementById("cockroach").style.display="none"

    document.getElementById("login_Con").style.display="block";
}

function antFun()
{
    document.getElementById("homecon").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("contactus").style.display="none"
    document.getElementById("login_Con").style.display="none";
    document.getElementById("cockroach").style.display="none"

    document.getElementById("ant").style.display="block";

}

function cockroachfun()
{
    document.getElementById("homecon").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementById("contactus").style.display="none"
    document.getElementById("login_Con").style.display="none";
    document.getElementById("ant").style.display="none";
    document.getElementById("cockroach").style.display="block"

}

const submit=document.querySelector('#l');

const saveuser =  async() => {

    let uname=document.getElementById("uname").value;
    let uphno=document.getElementById("uphno").value;
    let uloc=document.getElementById("uloc").value;


    let response = await fetch("http://localhost:8080/users/getusers");

    let response2= await fetch("http://localhost:8080/users/save",
                                                                
    {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name:uname,
            phno:uphno,
            loc:uloc
        })
    })
    
    
    
    console.log(response);
    console.log(response2);

    let saveUserSuccess = response2.ok;

    if(saveUserSuccess)
{
    document.getElementById("suc_msg").style.display="block"
}

}


submit.addEventListener("click",saveuser);









