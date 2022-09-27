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
                        `;
    }
    cartContainer.appendChild(table);
}

const loadEvents = ()=>{
    
    let oldCart = JSON.parse(localStorage.getItem("cartList"))
    
    if (oldCart){
        cart = oldCart
    }

    //leemos todos los botones para escuchar el click
    let btns = document.querySelectorAll('.btn');
    console.log (btns);
    //escuchamos el click de cada boton de agregar del array
    for (const btn of btns){
        btn.addEventListener('click', ()=>{
            //comparamos el id del boton con el id del servicio en el array cart
            let serv = cart.find (service => service.id == btn.id);
            //si coincide, significa que el servicio ya estaba agregado al carrito
            if(serv){
                //debemos aumentar la cantidad al servicio seleccionado en una unidad
                serv.quantity++;
            }else{
            //comparamos el id del boton con el id del servicio en el array servicios
                let serv = Services.find (service => service.id == btn.id);
                //si coincide, significa que ese servicio todavia no habia sido agregado al carrito
                if(serv){
                    //creamos nuevamente el servicio, pero agregando la propiedad cantidad, que inicializa en 1 unidad
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
        })
    }
}

const loadServices = (Services)=>{
    //leemos la seccion container, que contiene el array de servicios
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
} */