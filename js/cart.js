let cartL = JSON.parse(localStorage.getItem("cartList")) || [];

const checkOut = ()=> {
    
    const btn = document.querySelector('#checkout')
    btn.addEventListener('click', ()=> {
        Swal.fire({
            title: 'Muchas gracias por tu compra!',
            text: "Vuelve pronto!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar con la compra!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location="form.html";
            };
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
    
    if (cartL != 0){
        table.innerHTML = ` <h1 class="title">Servicios agregados al carrito:</h1>
                            <div>
                                <td><h3 class="p">Nombre</h3></td>
                                <td><h3 class="p">Cantidad</h3></td>
                                <td><h3 class="p">Precio</h3></td>
                                <td><h3 class="p">Subtotal</h3></td>`;
        for (const serv of cart){
            table.innerHTML += `<td><h4 class="p text-start">${serv.name}</h4></td>
                                <td><h4 class="p">${serv.quantity}</h4></td>
                                <td><h4 class="p">$${serv.price}</h4></td>
                                <td><h4 class="p">$${serv.price*serv.quantity}</h4></td>
                                <td><button class="btnDelete" id="${serv.id}"><img id="${serv.id}" src="../resources/icons/trash.png"></img></button></td>`;
        }
        
        table.innerHTML += `    <td><h3 class="p">Total:</h3></td>
                                <td><h3 class="p">${totalQ}</h3></td>
                                <td><h3 class="p">-</h3></td>
                                <td><h3 class="p">$${totalP}</h3></td>
                            </div>`;
        
        table.innerHTML += `<div>
                                <br>
                                <br>
                                <button class="btnsCart btnEmpty" id="btnEmpty">Vaciar carrito</button>
                                <button class="btnsCart" id="checkout">Finalizar compra</button>
                            </div>`;
    }else{
        table.innerHTML = ` <h1 class="title">No has seleccionado ningún producto</h1>
                            <div>
                                <br>
                                <br>
                                <a class="a" href="../index.html">
                                    <button class="btnsCart">Volver</button>
                                </a>
                            </div>`;
    }
    cartContainer.appendChild(table);
}

updateCart(cartL);
setQuantity();
checkOut();

const btnDeleteItem = document.querySelectorAll('.btnDelete');   
    for (const btn of btnDeleteItem){
        btn.addEventListener('click', ()=>{
            let newCart = cartL.filter(service => service.id !== parseInt(btn.id));
            if(newCart){
                updateCart(newCart);
                localStorage.setItem("cartList", JSON.stringify(newCart));
            }
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
                window.location="../index.html";
            };
        })
    }

const btnEmptyCart = document.querySelector('.btnEmpty');
btnEmptyCart.addEventListener('click', emptyCart);