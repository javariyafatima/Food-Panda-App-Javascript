let currentResturant = JSON.parse(localStorage.getItem("currentResturant"));
const activeUser = document.getElementById("activeUser");
const logoutBtn = document.getElementById("logoutBtn");
activeUser.innerText = currentResturant ? "Welcome:" + " " + currentResturant[0]?.userName : "";

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("currentResturant");
  location.href = "./index.html";
});

let dForm = document.getElementById("dForm");
let table = document.getElementById("table");
let activeId = currentResturant?.filter(ele => ele.id);
let categoryArr;

function addCategory() {
  let categoryInp = document.getElementById("categoryInp");
  let priceInp = document.getElementById("priceInp");
  let file = document.getElementById("file");
  let img;
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string and save to localStorage
    img = reader.result;
  }, false);

  if (file.files[0]) {
    reader.readAsDataURL(file.files[0]);
  }
  setTimeout(() => {
    if (!(categoryInp.value === "")) {
      let categories = {
        category: categoryInp.value,
        price: priceInp.value,
        file: img,
        activeId: activeId[0].id
      };
      console.log(file.value)
      const oldDATA = JSON.parse(localStorage.getItem("categoryArr"))
      if (oldDATA) {
        categoryArr = [...oldDATA, categories]
      } else {
        categoryArr = [categories]
      }
      localStorage.setItem("categoryArr", JSON.stringify(categoryArr));
    };
    getCategory()
    categoryInp.value = ""
    priceInp.value = ""
    file.value = ""
  }, 500)
}

function getCategory() {
  categoryArr = JSON.parse(localStorage.getItem("categoryArr"))
  showCategory()
};


function showCategory() {
  if (categoryArr) {
    let table = document.getElementById("table")
    table.innerHTML = ""
    categoryArr.forEach((element, index) => {
      if (element.activeId === currentResturant[0].id) {
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
       <button id="dltBtn" onclick="remove(${index})">Delete</button>
       <button id="editBtn" onclick="edit(${index})">Edit</button>
       `
       tdName.append(element.category)
       tdPrice.append(element.price + " rs")
       tdPic.appendChild(pic)
       tr.appendChild(tdPic)
        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdAction)
        table.appendChild(tr)
        tr.setAttribute("id", "trEdit")
        tdName.setAttribute("id", "tdEdit")
      }
    });
  }
}

addCategory()

let inputs = document.getElementById("inputs");
let blockItemI = document.getElementById("blockItemI");

function blockItem() {
  inputs.style.display = "block";
  blockItemI.style.display = "none";
}
function doneItem() {
  inputs.style.display = "none";
  blockItemI.style.display = "block";

}

function remove(e) {
  let dltItem = categoryArr.filter((data, index) => {
    return index !== e;
  })
  localStorage.setItem("categoryArr", JSON.stringify(dltItem))
  location.reload()
}