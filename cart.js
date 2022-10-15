let cart = JSON.parse(localStorage.getItem('cartList')) || [];

const checkOut = ()=> {
    const btn = document.querySelector('#checkout')
    btn.addEventListener('click', ()=> {
        localStorage.removeItem('cartList');
/*         alert('Muchas gracias por tu compra!') */
        Swal.fire({
            title: 'Muchas gracias por tu compra!',
            text: "Vuelve pronto!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Acpetar'
        }).then((result) => {
            if (result.isConfirmed) {
            location.reload(true);
            }
        })
    })
}

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
    table.innerHTML += `<button class="btnsCart" id="checkout">Finalizar compra</button>`;
    cartContainer.appendChild(table);
}

const cartL = JSON.parse(localStorage.getItem("cartList")) || [];
updateCart(cartL);
checkOut();


/* const deleteItem = (id)=>{
    let btnDeleteItem = document.querySelectorAll('.btnDelete');
    for (const btn of btnDeleteItem){
        btn.addEventListener('click', ()=>{
            cart = cart.filter(service => service.id !== btn.id);
            updateCart(cart);
            localStorage.setItem("cartList", JSON.stringify(cart));
        })
    }
} */


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

const btnEmptyCart = document.querySelector('.btnEmpty');
btnEmptyCart.addEventListener('click', emptyCart);