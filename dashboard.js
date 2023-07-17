let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let resturants = JSON.parse(localStorage.getItem("resturantsArray"));
const categoryArr = JSON.parse(localStorage.getItem("categoryArr"));
const activeUser = document.getElementById("activeUser");
const logoutBtn = document.getElementById("logoutBtn");
const body = document.getElementById("body");
activeUser.innerText = currentUser ? "Welcome:" + " " + currentUser[0]?.userName : "";

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    location.href = "./index.html";
});

resturants.forEach(rest => {
    const restBody = document.createElement("h1")

    restBody.setAttribute("onclick", `getRest(${rest.id})`)
    restBody.innerText = rest.userName 
   
    
    restBody.className = "resturant"
    body.appendChild(restBody);
})

const getRest = (id) => {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = `<h1 align="center">Items</h1>`
    categoryArr.forEach((element) => {
        if (element.activeId === id) {
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdPrice = document.createElement("td");
            let tdPic = document.createElement("td");
            let tdAction = document.createElement("td");
            let pic = document.createElement("img")
            pic.setAttribute("src", element.file)
            pic.setAttribute("height", "100px")
            pic.setAttribute("width", "100px")
            tdAction.innerHTML = `
         <button id="add" onclick="addToCart(${id})">Add to cart</button>
         `
            tdName.append(element.category)
            tdPrice.append(element.price + " rs")
            tdPic.appendChild(pic)
            tr.appendChild(tdPic)
            tr.appendChild(tdName)
            tr.appendChild(tdPrice)
            tr.appendChild(tdAction)
            tr.setAttribute("id", "trEdit")
            tdName.setAttribute("id", "tdEdit")
            itemList.appendChild(tr)
        }
    });
}

let total = 0;
const addToCart = (id) => {
    const cart = document.getElementById("cart");
    const cartTable = document.getElementById("cartTable");
    cart.style.display = "block"
    categoryArr.forEach((element) => {
        if (element.activeId === id) {
            total += +element.price
            let tr = document.createElement("tr");
            tr.className = "cartItem"
            let tdName = document.createElement("td");
            tdName.innerText = element.category
            let tdPrice = document.createElement("td");
            tdPrice.innerText = element.price
            tr.append(tdName)
            tr.append(tdPrice)
            cartTable.appendChild(tr)
        }
    })
    let div = document.getElementById("total");
    div.innerText = "Total: " +  total
}