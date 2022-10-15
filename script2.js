const Services = [];
let cart = JSON.parse(localStorage.getItem("cartList")) || [];


const loadEvents = ()=>{
/*     let oldCart = JSON.parse(localStorage.getItem("cartList"))
    if (oldCart){
        cart = oldCart
        //cart.push(oldCart);
    }*/
/*     updateCart(cart); */

    let btns = document.querySelectorAll('.btn');
    for (const btn of btns){
        btn.addEventListener('click', ()=>{
            let serv = cart.find (service => service.id == btn.id);
            if(serv){
                serv.quantity++;
/*                 localStorage.setItem("cartList", JSON.stringify("cartList")); */
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
/*                     localStorage.setItem("cartList", JSON.stringify("cartList")); */
                }
            }
/*             updateCart(cart); */
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El servicio ha sido agregado al carrito',
                showConfirmButton: false,
                timer: 800
            })

            const saveLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
            saveLocal("cartList", JSON.stringify(cart));
        })
    }
}

const loadServices = (Services)=>{
    let container = document.querySelector('#container');
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

const getData = async () => {
    try{
        const response = await fetch("services.json");
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