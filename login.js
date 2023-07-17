const userArray = JSON.parse(localStorage.getItem("usersArray")) || [];
const lForm = document.getElementById("lForm");

const validation = document.getElementById("validation");
lForm.addEventListener("submit", function (e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const findUser = userArray?.filter(ele => ele.email === email);
    console.log(findUser);
    if(findUser && findUser[0]?.password != password){
        // alert("incorrect password");
        return false;
    }else {
        localStorage.setItem("currentUser", JSON.stringify(findUser))
        // alert("Logged In")
        swal.fire("Success","Logged In")
        location.href = "./dashboard.html";
    }

    // let loginAccount = JSON.parse(localStorage.getItem("usersArray"));

})