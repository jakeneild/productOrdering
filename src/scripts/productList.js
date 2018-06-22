const product = require("./product");
const productData = require("./productData");

const productList = function(){
    for(item in productData){
        document.querySelector("body").appendChild(product(productData[item]));
    }
}

module.exports = productList;