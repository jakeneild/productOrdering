const nav = require ("./nav")

const productList = require("./productList");

document.querySelector("body").padding = "0"
document.querySelector("body").margin = "0"
let a = document.querySelectorAll("section");

for(let i = 0; i < a.length; i++){
    a[i].style.marginLeft = "20px"
    a[i].style.marginRight = "15px"
}

nav();
productList();

