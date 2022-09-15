/* #############  DESAFIO COMPLEMENTARIO NRO. 1  ############# */

/* function calculadora(){
    
    let num1=parseFloat(prompt("Ingresa el primer nro:"))
    let num2=parseFloat(prompt("Ingresa el segundo nro:"))
    let ope=prompt("Ingresa el operador:")

    console.log("Resultado: ", calcular(num1, num2, ope))
}

function calcular(num1, num2, ope){
    switch(ope){
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            if (num2 === 0){
                do{
                    num2 = prompt("No se puede dividir por cero, ingresa otro número")
                }while(num2 == 0)
                return num1 / num2
            }
            return num1 / num2
        default:
            return "Error en el cálculo"
        }
    } */


/* #############  DESAFIO NRO. 1  ############# */

/* class reservarEvento{
    constructor(invitados, lanzaPapeles, tubosLed, bolaEspejada, pago){
        this.invitados = parseInt(invitados)
        this.lanzaPapeles = lanzaPapeles
        this.tubosLed = tubosLed
        this.bolaEspejada = bolaEspejada
        this.pago = pago
    }
    servicioLanzaPapeles(){
        if (this.lanzaPapeles){
            return 10
        }else{
            return 0
        }
    } 
    servicioTubosLed(){
        if (this.tubosLed){
            return 20
        }else{
            return 0
        }
    }
    servicioBolaEspejada(){
        if (this.bolaEspejada){
            return 30
        }else{
            return 0
        }
    } 
    formaPago(){
        switch(this.pago){
            case "efectivo":
                return 1
            case "3 cuotas":
                return 1.05
            case "6 cuotas":
                return 1.12
            case "9 cuotas":
                return 1.15
        }
    }
    cotizarServicios(){
        let totalServicios = (this.invitados * 100 + this.servicioLanzaPapeles() + this.servicioTubosLed() + this.servicioBolaEspejada()) * this.formaPago()
            alert("El costo de los servicios adicionales incluidos es: $" + totalServicios)
    }
} */

/* function cotizarEvento(){
    let invitados = prompt("Ingresa la cantidad de invitados:")
    let lanzaPapeles = confirm("Incluir Lanzapapeles? Costo $ 10")
    let tubosLed = confirm("Incluir tubos LED? Costo $ 20")
    let bolaEspejada = confirm("Incluir bola espejada? Costo $ 30")
    let pago = prompt("Ingrese la forma de pago: (efectivo, 3 cuotas, 6 cuotas, 9 cuotas)") 
    const evento = new reservarEvento(invitados, lanzaPapeles, tubosLed, bolaEspejada, pago)
        evento.cotizarServicios()
} */



/* #############  DESAFÍO COMPLEMENTARIO NRO.2  ############# */


/* const servicios = ['Lanza papeles', 'Tubos led', 'Bola espejada'] */

/* function listarServicios(){
    for (let i=0; i < servicios.length; i++){
        console.log(servicios[i])
    }
} */

/* function agregarServicio(){
    let nuevoServicio = prompt("Ingresa un nuevo servicio:")
    let resultado = servicios.includes(nuevoServicio)
        if (resultado === false){
            servicios.push(nuevoServicio)
            console.table(servicios)
        }else{
            console.warn("El servicio ingresado ya existe en el listado")
        }
}
*/

/* function sacarServicio(){
    let elemento = prompt("Ingresa el servicio que deseas quitar:")
    let indice = servicios.indexOf(elemento)
    if(indice > -1){
        let resultado = servicios.splice(indice, 1)
        console.log(resultado)
        console.table(servicios)
    }else{
        console.warn("No se ha encontrado el servicio:", elemento)
    }
} */

/* ########################################################################################## */

const servicios = []
const IVA = 1.21
const tabla2 = document.getElementById("tabla")
const filtroServicios = document.getElementById("search")

let tabla = document.createElement("table");
tabla.innerHTML = `<thead>
                        <tr>
                            <th>DESCRIPCION</th>
                            <th>IMPORTE</th>
                            <th>IVA</th>
                            <th>IMPORTE FINAL</th>
                        </tr>
                    </thead>
                    <tbody id='tabla'>

                    </tbody>`;

document.body.append(tabla);


class Servicio {
    constructor(nombre, importe) {
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return '$ ' + parseFloat((this.importe * IVA).toFixed(2))
    }
}

function listarServicios() {
    servicios.forEach((servicio) => {
        console.log(servicio)
    })
}

let btnListar = document.getElementById("listar");
btnListar.addEventListener("click", listarServicios);


function nuevosServicios(){
    servicios.push(new Servicio("Lanza papeles", 1000))
    servicios.push(new Servicio("Bola espejada", 1100))
    servicios.push(new Servicio("Tubos led", 1200))
    servicios.push(new Servicio("Pantalla led", 1300))
    servicios.push(new Servicio("Iluminación Beam 7R", 1400))
    servicios.push(new Servicio("Tachos led RGBWA+UV", 1500))
    servicios.push(new Servicio("Móviles beam", 1600))
    servicios.push(new Servicio("Consola digital", 1700))
    servicios.push(new Servicio("Sonido Line Array", 1800))
}

nuevosServicios()

function generarServicios(){
    let fila = ""
    servicios.forEach(servicio => {
        fila = `<tr>
                <td>${servicio.nombre}</td>
                <td>${servicio.importe}</td>
                <td>${(IVA-1).toFixed(2)}</td>
                <td>${servicio.precioFinal()}</td>
                </tr>`
        tabla.innerHTML += fila
        })
    }

generarServicios(servicios)

let btnGenerar = document.getElementById("generar");
btnGenerar.addEventListener("click", generarServicios);

const inputBuscar = document.querySelector("input")


function buscarServicios() {
    /* debugger */
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
btnFiltrar.addEventListener("click", filtrarServicios);