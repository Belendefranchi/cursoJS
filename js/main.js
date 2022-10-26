const getSelectValue = (id) =>{
    const qtys = document.querySelectorAll(".quantity");
    for (const qty of qtys){
        if(qty.id == id && qty.value != "Elegir"){
            return qty.value;
        }
    }
    return false;
}

const loadEvents = ()=>{
    const btns = document.querySelectorAll('.btn');
    for (const btn of btns){
        btn.addEventListener('click', ()=>{
            const select = getSelectValue(btn.id);
            if(select){
                console.log('select value from function: ', select);
                const btnId = cart.find (service => service.id == btn.id);
                if(btnId){
                    console.log("true btn id: " + btn.id);
                    btnId.quantity += parseInt(select);
                }else{
                    const btnId = Services.find (service => service.id == btn.id);
                    if(btnId){
                    console.log("false btn id: " + btn.id);
                    let newServ = {
                        id: btnId.id,
                        name: btnId.name,
                        description: btnId.description,
                        price: btnId.price,
                        image: btnId.image,
                        quantity: parseInt(select),
                    }
                    cart.push(newServ);
                    //location.reload(true);
                    }
                }
                setQuantity();
                const saveLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
                saveLocal("cartList", JSON.stringify(cart));
            }
        })
    }
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
                            <select id="${service.id}" class="form-select quantity select">
                                <option>Elegir</option>
                                <option id="option" value="1">1</option>
                                <option id="option" value="2">2</option>
                                <option id="option" value="3">3</option>
                                <option id="option" value="4">4</option>
                                <option id="option" value="5">5</option>
                                <option id="option" value="6">6</option>
                            </select>
                            <button class="btn" id="${service.id}">Agregar</button>
                        </div>`;
        container.appendChild(div);
    }
    setQuantity();
    loadEvents();
}

const getData = async () => {
    try{
        const response = await fetch('bbdd/services.json');
        const data = await response.json();
        console.table(data);
        loadServices(data);
        Services.push(...data);
    } catch (e){
        console.log(e);
    }
}

getData();

