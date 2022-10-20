const filtered = document.getElementsByName("fil")

const loadEvents = ()=>{

    const qtys = document.querySelectorAll('.quantity');
    const btns = document.querySelectorAll('.btn');
    
    for (const qty of qtys){
        qty.addEventListener('click', ()=>{
            console.log(qty.id);
            const qtyId = Services.find (service => service.id == qty.id);
            if(qtyId){
                console.log(qtyId);
                const qtyValue = document.getElementById(qty.id).value;
                console.log(qtyValue);
            }
        })
    }
    for (const btn of btns){
        btn.addEventListener('click', ()=>{
            console.log(btn.id);
            const btnId = cart.find (service => service.id == btn.id);
            if(btnId){
                console.log(btnId);
                btnId.quantity = parseInt(btnId.quantity) + parseInt(qtyValue);
                console.log(btnId.quantity);
            }else{
                const btnId = Services.find (service => service.id == btn.id);
                if(btnId){
                    let newServ = {
                        id: btnId.id,
                        name: btnId.name,
                        description: btnId.description,
                        price: btnId.price,
                        image: btnId.image,
                        quantity: 1,
                    }
                    cart.push(newServ)
                    console.log(newServ);
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
    }

}

            /* const serv = cart.find (service => service.id == btn.id);
                    if(serv){
                        serv.quantity = parseInt(serv.quantity) + parseInt(qty);
                        console.log(serv.quantity);
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
                    */
                
        
    


const filterPricee = ()=> {
    Services.sort((a, b) => {
        if (filteredPrice.value === "lowerPrice") {
            if (a.price > b.price)
                return 1
            if (a.price < b.price)
                return -1
            return 0
        }
        if (filteredPrice.value === "higherPrice") {
            if (a.price > b.price)
                return -1
            if (a.price < b.price)
                return 1
            return 0
        }
    })
    updateCart()
}

const loadServices = (Services)=>{
    const container = document.querySelector('#container');
    for (const service of Services){
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `<img class="img" src="${service.image}" alt="${service.name}">
                        <h4>$${service.price}</h4>
                        <h5>${service.id}. ${service.name}</h5>
                        <p>${service.description}</p>
                        <div class="d-flex justify-content-center align-items-center">
                            <label>Cantidad:</label>
                            <input class="form-control quantity" id="${service.id}" type="number" value="" min="1">
                            <button class="btn" id="${service.id}">Agregar</button>
                        </div>`;
        container.appendChild(div);
    }
    setQuantity();
    loadEvents();
}

// PARA ORDENAR LOS PRECIOS (NUEVO)
const filterPrice = () => {
    Services.sort((a, b) => {
        if (filPrice.value === "loPrice") {
            if (a.price > b.price)
                return 1
            if (a.price < b.price)
                return -1
            return 0
        }
        if (filPrice.value === "hiPrice") {
            if (a.price > b.price)
                return -1
            if (a.price < b.price)
                return 1
            return 0
        }
    }) 
    loadEvents();
}

const getData = async () => {
    try{
        const response = await fetch("bbdd/services.json");
        const data = await response.json();
        console.log(data);
        loadServices(data);
        Services.push(...data);
    } catch (e){
        console.log(e);
    }
}

getData();
