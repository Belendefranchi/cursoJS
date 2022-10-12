const container = document.querySelector(".container")
const URL = "services.json"
let services = []
let cart = []
let contentHTML = ""

const updateCart = (cart)=>{
    let cartContainer = document.querySelector('#cart');
    let container = document.querySelector('#cartContainer');
    if (container){
        container.parentNode.removeChild(container);
    }
    
    let table = document.createElement('table');
    table.setAttribute('id', 'cartContainer');
    table.setAttribute('class', 'cart')
    table.innerHTML = ` <h2 class="title">Servicios agregados al carrito:</h2>
                        <td><h3 class="p thead">Nombre</h3></td>
                        <td><h3 class="p thead">Cantidad</h3></td>
                        <td><h3 class="p thead">Precio</h3></td>
                        <td><h3 class="p thead">Total</h3></td>
                        <td><button class="btnsCart btnEmpty" id="btnEmpty">Vaciar carrito</button></td>
                    `;
    for (const serv of cart){
        table.innerHTML += `
                            <td><h4 class="p tbody">${serv.name}</h4></td>
                            <td><h4 class="p">${serv.quantity}</h4></td>
                            <td><h4 class="p">$${serv.price}</h4></td>
                            <td><h4 class="p">$${serv.price*serv.quantity}</h4></td>
                            <td><button class="btnsCart btnDelete" id="${serv.id}">Eliminar</button></td>
                        `;
    }
    cartContainer.appendChild(table);
}

const loadEvents = ()=>{
    let oldCart = JSON.parse(localStorage.getItem("cartList"))
    if (oldCart){
        cart = oldCart
    }
    updateCart(cart);

    let btns = document.querySelectorAll('.btn');
    for (const btn of btns){
        btn.addEventListener('click', ()=>{
            let serv = cart.find (service => service.id == btn.id);
            if(serv){
                serv.quantity++;
            }else{
                let serv = services.find (service => service.id == btn.id);
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
            updateCart(cart);
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El servicio ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })

            const saveLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
            saveLocal("cartList", JSON.stringify(cart));
            
            location.reload();
        })
    }
}

const showCard = (content)=> {
    const {id, name, price, image} = content
    return `<div class="card">
                <img class="img" src="${image}" alt="${name}">
                <h4>$${price}</h4>
                <h5 style="padding-bottom: 2rem">${id}. ${name}</h5>
                <button class="btn" id="${id}">Agregar al carrito</button>
            </div>`
}

const loadContent = async ()=> {
    try {
        const response = await fetch(URL)
        const data = await response.json()
            console.table(data)
            services = data
            services.forEach(element => contentHTML += showCard(element))
    } catch(error) {
        console.error("Se ha producido un error", error)
    } finally {
        container.innerHTML = contentHTML
        loadEvents()
    }
}

loadContent();


const deleteItem = ()=>{
    let btnDeleteItem = document.querySelectorAll('.btnDelete');
    for (const btn of btnDeleteItem){
        btn.addEventListener('click', ()=>{
            cart = cart.filter(service => service.id !== btn.id);
            updateCart(cart);
            localStorage.setItem("cartList", JSON.stringify(cart));
        })
    }
}

const emptyCart = ()=>{
    debugger
    Swal.fire({
        title: 'Estas seguro de querer vaciar el carrito?',
        text: "Si te arrepientes no podrás deshacerlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar el carrito!'
    }).then((result) => {
        if (result.isConfirmed) {
            cart = [];
            updateCart(cart);
            localStorage.removeItem('cartList');
            Swal.fire(
                'Vaciado!',
                'Tu carrito ahora esta vacío',
                'success'
            )
        }
    })
}

const btnEmptyCart = document.querySelector('.btnEmpty');
btnEmptyCart.addEventListener('click', emptyCart);