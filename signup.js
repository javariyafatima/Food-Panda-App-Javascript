const usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];

const sform = document.getElementById("sform");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
console.log(usersArray);
const passError = document.getElementById("passError");

sform.addEventListener("submit", function(e){
    e.preventDefault();


    let account = {
    userName : userName.value,
    email : email.value,
    password : password.value,
    confirmPassword : confirmPassword.value,
    id:Math.floor(Math.random() * 1000)
    }

    if (!(account.password === account.confirmPassword)) {
        confirmPassword.style.border = "1px solid red";
        passError.style.display = "block";
        confirmPassword.focus();
        return false;
    }
    else if (account.password.length < 8) {
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

        
    usersArray.push(account);
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
    };
}); 