const reviewList = require("./reviewList");

const product = function(obj){
    let frag = document.createDocumentFragment();

    //appends obj

    let newSection = document.createElement("section");

    let newHeading = document.createElement("h3");
    newHeading.textContent = obj.name;
    newSection.appendChild(newHeading);

    let newDescription = document.createElement("p");
    newDescription.textContent = obj.description;
    newSection.appendChild(newDescription);

    let newQuantity = document.createElement("p");
    newQuantity.textcontent = obj.quantity;
    newSection.appendChild(newDescription);

    let newPrice = document.createElement("p");
    newPrice.textcontent = obj.price;
    newSection.appendChild(newPrice);

    let newImg = document.createElement("img");
    newImg.src = `${obj.img}`;
    newImg.style.height = "350px"
    newImg.style.width = "auto"
    newSection.appendChild(newImg);

    newSection.appendChild(reviewList());

    frag.appendChild(newSection);

    return frag;
}

module.exports = product;