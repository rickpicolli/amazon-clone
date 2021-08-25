
function getCartItems() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let totalCount = 0;
        snapshot.forEach((doc) => {
            totalCount +=  doc.data().quantity;
        })
        setCartCounter(totalCount);
    })
}

function setCartCounter(totalCount) {
    // cart-item-numer
    document.querySelector(".cart-item-number").innerText = totalCount;
}

getCartItems();