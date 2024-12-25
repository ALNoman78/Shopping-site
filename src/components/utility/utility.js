const getCartData = () => {
    const storedCartItems = localStorage.getItem("cart-list");
    if (storedCartItems) {
        const storedList = JSON.parse(storedCartItems);
        return storedList;
    } else {
        return [];
    }
};

const storedCartList = (id) => {
    const storedList = getCartData();
    if (storedList.includes(id)) {
        console.log(id, "already exits");
    } else {
        storedList.push(id);
        const storedCartItems = JSON.stringify(storedList);
        localStorage.setItem("cart-list", storedCartItems);
    }
};

export { storedCartList , getCartData };
