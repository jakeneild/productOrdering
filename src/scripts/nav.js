const nav = function(){
    let nav = document.createElement("div");
    nav.style.width = "100%";
    nav.style.height = "75px";
    nav.style.display = "flex";
    nav.style.backgroundColor = "orange"

    let categories = document.createElement("a");
    categories.textContent = "Categories";
    categories.style.marginRight = "10px"
    nav.appendChild(categories);

    let orders = document.createElement("a");
    orders.textContent = "Orders";
    orders.style.marginRight = "10px"
    nav.appendChild(orders);

    let logOut = document.createElement("a");
    logOut.textContent = "Log Out"
    nav.appendChild(logOut);

    document.querySelector("header").appendChild(nav)
}

module.exports = nav;