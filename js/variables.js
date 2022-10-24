const Services = [];

let cart = JSON.parse(localStorage.getItem("cartList")) || [];

const totalP = cart.reduce ((acc, item) => acc + item.price * item.quantity, 0)
const totalQ = cart.reduce ((acc, item) => acc + item.quantity, 0)

const setQuantity = () => {
    const label = document.querySelector('#cartQuantity')
    const totalQ = cart.reduce ((acc, item) => acc + item.quantity, 0)
    if (totalQ !== 0){
        label.innerText = totalQ;
    }
}