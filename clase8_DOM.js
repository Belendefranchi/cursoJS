const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")

function elementosParrafo(){
    const parrafos = document.getElementsByTagName("p")
    for (elementos of parrafos){
        //console.log(elemento.innerText)   //escribe solo texto
        elemento.innerHTML = "ESTO ES UN <strong>TEXTO MASIVO</strong>!"    //escribe tambien propiedades html
    }
}


/* ################ VARIABLES ################## */

const IVA = 1.21

const paises = ['Venezuela', 'Uruguay', 'Argentina', 'Chile', 'Perú', 'Bolivia', 'Costa Rica']
const productos = [] 
const carrito = []


/* ################ PRODUCTO.CLASS ################## */

class Producto {
    constructor(id, nombre, importe, categoria) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
} 

/* ################ ARRAYS PRODUCTOS ################## */

function generadorAutomatico() {
    productos.push(new Producto(1234, "NOTEBOOK EXO E17", 29950, "NOTEBOOK"))
    productos.push(new Producto(2345, "MACBOOK AIR 13", 249900, "NOTEBOOK"))
    productos.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949, "NOTEBOOK"))
    productos.push(new Producto(4567, "IPAD PRO 12", 219890, "TABLET"))
    productos.push(new Producto(5678, "LENOVO GAMER 15", 409090, "NOTEBOOK"))
    productos.push(new Producto(6789, "MACBOOK PRO 15", 459000, "NOTEBOOK"))
    productos.push(new Producto(7890, "ASUS GAMING PRO 17", 679800, "NOTEBOOK"))
    productos.push(new Producto(8901, "IPAD MINI 7.9", 189900, "TABLET"))
}

function generarCarrito() {
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
}
generadorAutomatico()
generarCarrito()

//Método ForEach()
function listarProductos() {
    //debugger
    productos.forEach((producto) => {
        console.log(producto)
    })
}

//Método find()
function buscarProducto() {
    //debugger
    let nombreProd = prompt("Ingresa el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.find((producto) => producto.nombre.includes(nombreProd))
    if (resultado !== undefined) {
        console.log(resultado)
    } else {
        console.warn("No se encontró un elemento coincidente.")
    }
    //let resultado = productos.find((producto)=> producto.nombre === "LENOVO IDEAPAD 13")
}

//Método filter()
function filtrarProductos() {
    //debugger
    let parametro = prompt("Ingresa el parámetro a filtrar:")
    let resultado = productos.filter((producto) => producto.nombre.includes(parametro))
    console.table(resultado)
}

//Método some() equivale a indexOf()
function existeProducto() {
    let existe = productos.some((producto) => producto.id === 34444456)
    if (existe) {
        console.log("El código ingresado sí existe en el listado de productos.")
    } else {
        console.warn("No se encontró el código")
    }
}

//Método Map() = mapea una estructura nueva
function proyectarIncremento() {
    let proyeccion = productos.map((producto) => {
        return {
            id: producto.id,
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion: parseFloat((producto.importe * 1.15).toFixed(2))
        }
    })
    console.table(proyeccion)
}
let DESC = -35000 || 0
//Reduce a un único resultado valores de un array
function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.importe, DESC)
    console.log("Total del carrito:", total)
}

//Ordena los productos por la propiedad indicada
function ordenarProductos() {
    productos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.table(productos)
}


function cargarProductos(){
    let fila = ""
    /* debugger */
        productos.forEach(producto => {
            fila = `<tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.importe}</td>
                        <td>${producto.precioFinal()}</td>
                    </tr>`
            tabla.innerHTML += fila
        })
}
