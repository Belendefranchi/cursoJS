let cartP = JSON.parse(localStorage.getItem("cartList"));

console.table(cartP);

setQuantity();

const btnEnviar = document.querySelector('#btnPurchase');
btnEnviar.addEventListener('click', ()=>{
    /* debugger */
    Form.push(new fillForm(inputName, inputLastName, inputEmail, inputPhone, inputAddress, inputAddress2, inputCity, inputState, inputZip))
    const saveLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    saveLocal("purchaseForm", JSON.stringify(Form));

    Swal.fire({
        title: 'Tu compra ha sido registrada',
        text: "Cuanto antes nos comunicaremos para acordar el método de pago y el envío",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Finalizar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location="../index.html";
            localStorage.removeItem('cartList');
        };
    })
})

const purchaseCart = (cart)=>{
    const container = document.querySelector('#purchase');
    let table = document.createElement('table');
    table.setAttribute('class', 'purchase')
    for (const serv of cart){
        table.innerHTML += `<td><h4 class="p text-start">${serv.name}</h4></td>
                            <td><h4 class="p text-center">${serv.quantity}</h4></td>
                            <td><h4 class="p text-center">$${serv.price*serv.quantity}</h4></td>`;
        
        container.appendChild(table);
    }
    table.innerHTML += `<td><h3 class="p thead text-start">Total:</h3></td>
                        <td><h3 class="p thead">${totalQ}</h3></td>
                        <td><h3 class="p thead">$${totalP}</h3></td>`;
    
    container.appendChild(table);
}

purchaseCart(cartP);

const Form = [];

const inputName = document.querySelector('#inputName').value;
const inputLastName = document.querySelector('#inputLastName').value;
const inputEmail = document.querySelector('#inputEmail').value;
const inputPhone = document.querySelector('#inputPhone').value;
const inputAddress = document.querySelector('#inputAddress').value;
const inputAddress2 = document.querySelector('#inputAddress2').value;
const inputCity = document.querySelector('#inputCity').value;
const inputState = document.querySelector('#inputState').value;
const inputZip = document.querySelector('#inputZip').value;


class fillForm {
    constructor(name, lastName, email, phone, address, address2, city, state, zip){
        this.name = name
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.address = address
        this.address2 = address2
        this.city = city
        this.state = state
        this.zip = zip
    }
    saveForm(){
        const Form = [
            {
                name:this.name,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                address: this.address,
                address2: this.address2,
                city: this.city,
                state: this.state,
                zip: this.zip,
            }
        ];
        console.table(Form);
    }
}

/* localStorage.removeItem('cartList'); */