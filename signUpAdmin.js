const resturantsArray = JSON.parse(localStorage.getItem("resturantsArray")) || [];

const sform = document.getElementById("sform");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
console.log(resturantsArray);
const passError = document.getElementById("passError");

sform.addEventListener("submit", function(e){
    e.preventDefault();


    let resturantAccount = {
    userName : userName.value,
    email : email.value,
    password : password.value,
    confirmPassword : confirmPassword.value,
    id:Math.floor(Math.random() * 1000)
    }

    if (!(resturantAccount.password === resturantAccount.confirmPassword)) {
        confirmPassword.style.border = "1px solid red";
        passError.style.display = "block";
        confirmPassword.focus();
        return false;
    }
    else if (resturantAccount.password.length < 8) {
        password.style.border = "1px solid red";
        span.style.display = "block";
        password.focus();
        return false;
    }
    else {
        userName.value = ""
        email.value = ""
        password.value = ""
        confirmPassword.value = ""
        password.style.border = "1px solid transparent";
        confirmPassword.style.border = "1px solid transparent";
        span.style.display = "none";
        passError.style.display = "none";
        Swal.fire({
            text: 'Successfully Registered!',
             icon: 'success',  title: 'Tanks',
          
           
           
          cancelButtonColor: '#d33',
             
       })

        
        resturantsArray.push(resturantAccount);
    localStorage.setItem("resturantsArray", JSON.stringify(resturantsArray));
    };
}); 