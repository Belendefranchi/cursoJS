let Services = [
    {
        id:1,
        name: 'Lanza Papeles',
        description: '',
        price: '1000',
        image: 'resources/images/lanza.jpg'
    },
    {
        id:2,
        name: 'Bola espejada',
        description: '',
        price: '1100',
        image: 'resources/images/bola.jpg'
    },
    {
        id:3,
        name: 'Pantalla Led',
        description: '',
        price: '1200',
        image: 'resources/images/pantalla.jpg'
    },
    {
        id:4,
        name: 'Tubos Led',
        description: '',
        price: '1300',
        image: 'resources/images/tubos.jpg'
    },
    {
        id:5,
        name: 'Iluminación Beam 7R',
        description: '',
        price: '1400',
        image: 'resources/images/beam.jpg'
    },
    {
        id:6,
        name: 'Pixel Ball',
        description: '',
        price: '1500',
        image: 'resources/images/pixel.jpg'
    },
]

let cart = [];

const updateCart = ()=>{
    //leemos la seccion cart que contendrá los servicios cargados al carrito
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
            updateCart(cart);

            const saveLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
            saveLocal("cartList", JSON.stringify(cart));

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El servicio ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }
}

const loadServices = (Services)=>{
    /* debugger */
    let container = document.querySelector('#container');
    for (const service of Services){
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
                        <img class="img" src="${service.image}" alt="${service.name}">
                        <h4>$${service.price}</h4>
                        <h5 style="padding-bottom: 2rem">${service.id}. ${service.name}</h5>
                        <p>${service.description}</p>
                        <button class="btn" id="${service.id}">Agregar al carrito</button>
                        `;
        container.appendChild(div);
    }
    loadEvents();
}

loadServices(Services);


const emptyCart = ()=>{
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

const btnEmptyCart = document.querySelector('#btnEmpty');
btnEmptyCart.addEventListener('click', emptyCart);


/* const deleteBtn = ()=>{
    debugger
    let btnsDel = document.querySelectorAll('.btnDelete');
    for (const btn of btnsDel){
        btn.addEventListener('click', ()=>{
            let idDel = cart.find (service => service.id == btn.id);
            let del = cart.indexOf(idDel,0);
            cart.splice(del,1);
            let rowDel = document.getElementById(btn.id);
            console.log(rowDel);
            rowDel.remove();
            localStorage.setItem("cartList", JSON.stringify(cart));
        })
    }
}

const btnDeleteItem = document.querySelector('#btnDelete');
btnDeleteItem.addEventListener('click', deleteBtn); */

