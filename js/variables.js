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



/* for (const btn of btns){
    btn.addEventListener('click', ()=>{
        const serv = cart.find (service => service.id == btn.id);
        if(serv){
            serv.quantity++;
        }else{
            let serv = Services.find (service => service.id == btn.id);
            if(serv){
                let newServ = {
                    id: serv.id,
                    name: serv.name,
                    description: serv.description,
                    price: serv.price,
                    image: serv.image,
                    quantity: 1,
                }
                cart.push(newServ)
            }
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El servicio ha sido agregado al carrito',
            showConfirmButton: false,
            timer: 800
        })
        setQuantity();
        const saveLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
        saveLocal("cartList", JSON.stringify(cart));
    })
} */