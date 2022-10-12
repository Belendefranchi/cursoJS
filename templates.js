const showCard = (content)=> {
    const {id, name, price, image} = content
    return `<div class="card">
                <img class="img" src="${image}" alt="${name}">
                <h4>$${price}</h4>
                <h5 style="padding-bottom: 2rem">${id}. ${name}</h5>
                <button class="btn" id="${id}">Agregar al carrito</button>
            </div>`
}
