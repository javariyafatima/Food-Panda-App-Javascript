const  resturantsArray = JSON.parse(localStorage.getItem("resturantsArray")) ;
const lForm = document.getElementById("lForm");

const validation = document.getElementById("validation");
lForm.addEventListener("submit", function (e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const findUser = resturantsArray?.filter(ele => ele.email === email);
    console.log(findUser);
    if(findUser && findUser[0]?.password != password){
        alert("incorrect password");
    }else {
        localStorage.setItem("currentResturant", JSON.stringify(findUser))
        Swal.fire({
            title: 'Successfully Registered!',
            text: 'WELCOM',
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
            confirmButtonText: ' Welcome Page!',
         }).then (function(result){
           if (result.isConfirmed) {
             location.assign("./dashboardResturant.html")
           };
         });
    }

    // let loginAccount = JSON.parse(localStorage.getItem("usersArray"));

})
