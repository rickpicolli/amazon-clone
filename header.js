
function getCartItems() {
    db.collection("cart-items").get().then((querySnapshot) => {
        let totalCount = 0;
        querySnapshot.forEach((doc) => {
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