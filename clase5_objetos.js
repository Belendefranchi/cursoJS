/*############ OBJETOS LITERALES ############*/

const operador1 = {
    nombre: "Juan",
    apellido: "Moon",
    cargo: "Servicio técnico",
    fechaIngreso: "2005-08-30"
}

const operador2 = {
    nombre: "",
    apellido: "",
    cargo: "",
    fechaIngreso: "",
    activo: false,
    edad: 0
}
/*############ OBJETOS CONSTRUCTORES ############*/

function Empleado(nombre, apellido, cargo, fechaIngreso){
    this.nombre = nombre
    this.apellido = apellido
    this.cargo = cargo
    this.fechaIngreso = fechaIngreso
}

const empleado1 = new Empleado("Julian", "Moon", "Servicio Técnico", "2017-01-10")
const empleado2 = new Empleado("Nicolas", "Moon", "Manager", "2017-01-10")

/*############ FUNCION CONSTRUCTORA ############*/

/* function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.precioConIva = function(){
        return this.precio * IVA
    }
    this.descontarStock = function(unidades){
        return this.stock = this.stock - unidades
    }
} */


/*############ CLASES ############*/

class Persona{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    precioConIva() {
        return this.precio * IVA
    }
    descontarStock(unidades) {
        return this.stock = this.stock - unidades
    }
}

const producto1 = new Producto("Notebook", 100, 10);
const producto2 = new Producto("Monitor", 200, 20);
const producto3 = new Producto("Teclado", 50, 30);







const factor = 31.98

class CotizadorHogar{
    constructor(metros2, alarma, factor){
        this.metros2 = parseInt(metros2)
        this.alarma = alarma
        this.factor = parseInt(factor)
    }
    adicionalAlarma(){
        if (this.alarma){
            return 1
        }else{
            return 1.12
        }
    }
    cotizarPoliza(){
        debugger
        const costoTotal = this.factor * this.metros2 * this.adicionalAlarma()
            console.log("El costo del seguro para su propiedad es: $", costoTotal.toFixed(2))
    }
}

function cotizarSeguro(){
    debugger
    let metros2 = prompt("Ingresa los M2 de la propiedad:")
    let alarma = confirm("Posee alarma instalada?")
    const cotizador = new CotizadorHogar(metros2, alarma, factor)
        cotizador.cotizarPoliza()
}