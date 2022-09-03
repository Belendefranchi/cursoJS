//Método find()
function buscarProducto() {
    debugger
    let nombreProd = prompt("Ingresa el nombre del producto a buscar:")
    let resultado = productos.find((producto)=> producto.nombre.includes(nombreProd))
    //let resultado = productos.find((producto)=> producto.nombre === "LENOVO IDEAPAD 13")
        console.log(resultado)
}

//Método filter()
function filtrarProductos() {
    //debugger
    let parametro = prompt("Ingresa el parámetro a filtrar:")
    let resultado = productos.filter((producto)=> producto.nombre.includes(parametro))
        console.table(resultado)
}


//Método Map() = mapea una estructura nueva

function proyectarIncremento(){
    let proyeccion = productos.map((producto)=>{
                                        return {
                                            id: producto.id,
                                            nombre: producto.nombre,
                                            impoprte: producto.importe,
                                            proyeccion: parseFloat((producto.importe * 1.15).toFixed(2))
                                        }
                                    })
                                    console.table(proyeccion)
}

//Reduce a un unico resultado valores de un array

let desc = -35000

function calcularCarrito(){
    let total = carrito.reduce((acumulador, productos)=> acumulador + producto.importe, desc)
        console.log("Total del carrito: ", total)
}

//Ordena los productos por la propiedad indicada

function ordenarProductos(){
    porductos.sort((a, b)=> {
        if(a.nombre > b.nombre){
            return 1
        }
        if(a.nombre < b.nombre){
            return -1
        }
        return 0
    })
    console.table(productos)
}