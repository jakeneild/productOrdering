const reviewData = require("./reviewData");
const review = require("./review");

const reviewList = function(){
    let frag = document.createDocumentFragment();

    let num = Math.floor(Math.random() * 3) + 1;

    let reviews = [];

    for(let i = 0; i < num; i++){
        reviews[i] = reviewData();
    }

    for(let i = 0; i < reviews.length; i++){
        frag.appendChild(review(reviews[i]));
    }

    return frag;
}

module.exports = reviewList;
