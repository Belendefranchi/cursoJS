const checkOut = ()=> {
    const btn = document.querySelector('#checkout')
    btn.addEventListener('click', ()=> {
        localStorage.removeItem('cartList');

/*         Swal.fire({
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
        }) */
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
    table.innerHTML = ` <h1 class="title">Servicios agregados al carrito:</h1>
                        <td><h3 class="p thead">Nombre</h3></td>
                        <td><h3 class="p thead">Cantidad</h3></td>
                        <td><h3 class="p thead">Precio</h3></td>
                        <td><h3 class="p thead">Subtotal</h3></td>
                        <td><button class="btnsCart btnEmpty" id="btnEmpty">Vaciar carrito</button></td>`;
    for (const serv of cart){
        table.innerHTML += `<td><h4 class="p tbody">${serv.name}</h4></td>
                            <td><h4 class="p">${serv.quantity}</h4></td>
                            <td><h4 class="p">$${serv.price}</h4></td>
                            <td><h4 class="p">$${serv.price*serv.quantity}</h4></td>
                            <td><button class="btnsCart btnDelete" id="${serv.id}">Eliminar</button></td>`;
    }
    
    table.innerHTML += `<td><h3 class="p thead">Total:</h3></td>
                        <td><h3 class="p thead">${totalQ}</h3></td>
                        <td><h3 class="p thead">-</h3></td>
                        <td><h3 class="p thead">$${totalP}</h3></td>
                        <td><a class="a" href="../pages/form.html"><button class="btnsCart" id="checkout">Finalizar compra</button></a></td>`;
    
    cartContainer.appendChild(table);
}

const cartL = JSON.parse(localStorage.getItem("cartList")) || [];
updateCart(cartL);
setQuantity();
checkOut();


const btnDeleteItem = document.querySelectorAll('.btnDelete');   
    for (const btn of btnDeleteItem){
        btn.addEventListener('click', ()=>{
            console.log("button id: ", btn.id)
            let newCart = cartL.filter(service => service.id !== btn.id);
            localStorage.setItem("cartList", JSON.stringify(newCart));
            location.reload(true);
        })
    }


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
            localStorage.removeItem('cartList');
            Swal.fire({
                title: 'Vaciado!',
                text: 'Tu carrito ahora esta vacío',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Acpetar'
            })
            location.reload(true);
        };
    })
}

const btnEmptyCart = document.querySelector('.btnEmpty');
btnEmptyCart.addEventListener('click', emptyCart);