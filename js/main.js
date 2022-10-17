const Services = [];
let cart = JSON.parse(localStorage.getItem("cartList")) || [];

const setQuantity = () => {
    const label = document.querySelector('#cartQuantity')
    const totalQ = cart.reduce ((acc, item) => acc + item.quantity, 0)
    label.innerText = totalQ;
}

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

const loadServices = (Services)=>{
    const container = document.querySelector('#container');
    for (const service of Services){
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
                        <img class="img" src="${service.image}" alt="${service.name}">
                        <h4>$${service.price}</h4>
                        <h5 style="padding-bottom: 2rem">${service.id}. ${service.name}</h5>
                        <p>${service.description}</p>
                        <div class="d-flex" style="background-color: red;">
                            <input class="form-control" type="number" value="${service.quantity}"></input>
                            <button class="btn" id="${service.id}">Agregar al carrito</button>
                        </div>
                        `;
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