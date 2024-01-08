export const convertToJSONAndSave = (data) => {
    localStorage.setItem("MyCart", JSON.stringify(data));
}

export const getCartAndTotal = () => {
    const MyCart = JSON.parse(localStorage.getItem("MyCart"));

    return MyCart;
}

export const getTotal = (cart) => {
    let total = 0;
    cart.forEach(item => {
        total += item.quantity * item.price;
    });

    return total;
}