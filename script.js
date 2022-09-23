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

const cart = [];

const updateCart = (cart)=>{
    let cartContainer = document.querySelector('#cart');
    let container = document.querySelector('#cartContainer');
    if (container){
        container.parentNode.removeChild(container);
    }
    
    let table = document.createElement('table');
    table.setAttribute('id', 'cartContainer');
    table.setAttribute('class', 'cart')
    table.innerHTML = ` 
                        <table>
                            <thead>
                                <tr class="row">
                                    <td><h3 class="p thead">Nombre</h3></td>
                                    <td><h3 class="p thead">Cantidad</h3></td>
                                    <td><h3 class="p thead">Precio</h3></td>
                                    <td><h3 class="p thead">Total</h3></td>
                                </tr>
                            </thead>
                    `;
    for (const serv of cart){
        table.innerHTML += `
                                <tbody>                   
                                    <tr class="row">
                                        <td><h4 class="p tbody">${serv.name}</h4></td>
                                        <td><h4 class="p">${serv.quantity}</h4></td>
                                        <td><h4 class="p">$${serv.price}</h4></td>
                                        <td><h4 class="p">$${serv.price*serv.quantity}</h4></td>
                                    </tr>
                                </tbody>
                            </table>
                        `;
    }
    cartContainer.appendChild(table);
}

const loadEvents = ()=>{
    let btns = document.querySelectorAll('.btn');
    console.log (btns);
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
        })
    }
}

const loadServices = (Services)=>{
    let container = document.querySelector('#container');
    console.log('container: ', container);
    for (const service of Services){
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <img class="img" src="${service.image}" alt="${service.name}">
            <h3>$${service.price}</h3>
            <h4>${service.id}. ${service.name}</h4>
            <p>${service.description}</p>
            <button class="btn" id="${service.id}">Agregar al carrito</button>
        `;
        container.appendChild(div);
    }
    loadEvents();
}

loadServices(Services);















/* class Servicio {
    constructor(nombre, importe) {
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
} */