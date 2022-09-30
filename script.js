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

const updateCart = (cart)=>{
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
                    `;
    for (const serv of cart){
        table.innerHTML += `
                            <td><h4 class="p tbody">${serv.name}</h4></td>
                            <td><h4 class="p">${serv.quantity}</h4></td>
                            <td><h4 class="p">$${serv.price}</h4></td>
                            <td><h4 class="p">$${serv.price*serv.quantity}</h4></td>
                            <td><button class="btnE" id="btn${serv.id}">Eliminar</button></td>
                        `;
    }
    cartContainer.appendChild(table);
}

const btnEliminar = (id)=>{
    let idE = cart.find(service => service.id == id);
    let eliminar = cart.indexOf(idE,0)
    cart.splice(eliminar,1)
    localStorage.setItem("newCart", JSON.stringify(cart));
    let filaE = document.getElementById(`btn${id}`)
    console.log(filaE)
    /* filaE.remove(); */
}
/* let btnsE = document.querySelectorAll('.btnE');
    for (const btn of btnsE){
        btn.addEventListener('click', ()=>{
            let serv = cart.find (service => service.id == btn.id);
            if(serv){
                serv.quantity--;
            }else{
                let serv = Services.find (service => service.id == btn.id);
                if(serv){
                    let newServ = {
                        id: serv.id,
                        name: serv.name,
                        description: serv.description,
                        price: serv.price,
                        image: serv.image,
                        quantity: serv.quantity,
                    }
                    cart.push(newServ)
                }
            }
            
            console.log(cart);
            updateCart(cart);
        })
    }
} */


const loadEvents = ()=>{
    
    let oldCart = JSON.parse(localStorage.getItem("cartList"))
    
    //operador ternario
    oldCart ? cart = oldCart : cart;

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
            console.log(cart);
        })
    }
    btnEliminar();
}

const loadServices = (Services)=>{
    let container = document.querySelector('#container');
    console.log('container: ', container);
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



/* function buscarServicios() {
    inputBuscar.value = inputBuscar.value.trim().toUpperCase()
    if (inputBuscar.value !== "") {
        const resultado = servicios.filter(servicio => servicio.nombre.includes(inputBuscar.value))
            if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron servicios")
                generarServicios(servicios)
            } else {
                generarServicios(resultado)
            }
    } else {
        generarServicios(servicios)
    }
}

inputBuscar.addEventListener("input", buscarServicios)

function filtrarServicios(){
    let valor = parseInt(prompt("Ingresa el valor máximo que deseas pagar por un servicio:"))
    const valorMax = servicios.filter((servicio) => (servicio.importe*IVA) < valor)
    console.table(valorMax)
}

let btnFiltrar = document.getElementById("filtrar");
btnFiltrar.addEventListener("click", filtrarServicios); */











/* class Servicio {
    constructor(nombre, importe) {
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
} 
*/