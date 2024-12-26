const getCartData = () => {
    const storedCartItems = localStorage.getItem("cart-list");
    if (storedCartItems) {
        const storedList = JSON.parse(storedCartItems);
        return storedList;
    } else {
        return [];
    }
};

import { Bounce, toast } from "react-toastify";

const storedCartList = (id) => {
    const storedList = getCartData();
    if (storedList.includes(id)) {
        console.log(id, "already exits");
        toast.warn('Already exits', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
    } else {
        toast.success('Add to Cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        storedList.push(id);
        const storedCartItems = JSON.stringify(storedList);
        localStorage.setItem("cart-list", storedCartItems);
    }
};

export { storedCartList , getCartData };

// const getCartData = () => {
//     const getShortedData = localStorage.getItem('cart-list')
//     if(getShortedData){
//         const storedDataStr = JSON.parse(getCartData)
//         return storedDataStr;
//     }else{
//         return [];
//     }
// }

// const setCartData = (id) => {
//     const dataStored = getCartData()
//     if(dataStored.includes(id)){
//         console.log('already exist' , id);
//     }else{
//         dataStored.push(id)
//         const storedCartItems = JSON.stringify(dataStored)
//         localStorage.setItem('cart-list' , storedCartItems)
//     }
// }

// export { getCartData , setCartData}