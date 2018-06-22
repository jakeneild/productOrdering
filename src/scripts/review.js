const review = function (obj) {
    console.log("Review data objet: ", obj)
    let frag = document.createDocumentFragment();

    let newSection = document.createElement("section");

    let newP = document.createElement("p");
    newP.textContent = obj.name;
    newSection.appendChild(newP)

    newSection.appendChild(document.createElement("br"));

    let reviewSection = document.createElement("section");
    let newP2 = document.createElement("p");
    newP2.textContent = obj.review;
    reviewSection.appendChild(newP2);

    newSection.appendChild(reviewSection);
    frag.appendChild(newSection);

    return frag;
}

module.exports = review;


