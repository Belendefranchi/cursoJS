const loadEvents = ()=>{
    const btns = document.querySelectorAll('.btn');
    for (const btn of btns){
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
    }
}

/* const filterPrice = ()=> {
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
} */

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
                            <label class="">Cantidad:</label>
                            <input class="form-control" type="number" value="${1}">
                            <button class="btn" id="${service.id}">Agregar</button>
                        </div>`;
        container.appendChild(div);
    }
    setQuantity();
    loadEvents();
}

const getData = async () => {
    try{
        const response = await fetch("/bbdd/services.json");
        const data = await response.json();
        console.log(data);
        loadServices(data);
        Services.push(...data);
    } catch (e){
        console.log(e);
    }
}

getData();

/* loadServices(Services); */


/* agregar boton de comprar, que saque un cartel o lleve a otra pagina
deonde se agradece la compra y se vacie el carrito */