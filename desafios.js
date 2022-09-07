/* #############  DESAFIO NRO. 1  ############# */

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


/* #############  ENTREGA NRO. 1  ############# */

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
}

function cotizarEvento(){
    let invitados = prompt("Ingresa la cantidad de invitados:")
    let lanzaPapeles = confirm("Incluir Lanzapapeles? Costo $ 10")
    let tubosLed = confirm("Incluir tubos LED? Costo $ 20")
    let bolaEspejada = confirm("Incluir bola espejada? Costo $ 30")
    let pago = prompt("Ingrese la forma de pago: (efectivo, 3 cuotas, 6 cuotas, 9 cuotas)") 
    const evento = new reservarEvento(invitados, lanzaPapeles, tubosLed, bolaEspejada, pago)
        evento.cotizarServicios()
} */



/* #############  DESAFÍO COMPLEMENTARIO NRO.1  ############# */


const servicios = ['Lanza papeles', 'Tubos led', 'Bola espejada']

function listarServicios(){
    for (let i=0; i < servicios.length; i++){
        console.log(servicios[i])
    }
}

function agregarServicio(){
    let nuevoServicio = prompt("Ingresa un nuevo servicio:")
    let resultado = servicios.includes(nuevoServicio)
        if (resultado === false){
            servicios.push(nuevoServicio)
            console.table(servicios)
        }else{
            console.warn("El servicio ingresado ya exixte en el listado")
        }
}

function sacarServicio(){
    let elemento = prompt("Ingresa el servicio que deseas quitar:")
    let indice = servicios.indexOf(elemento)
    if(indice > -1){
        let resultado = servicios.splice(indice, 1)
        console.log(resultado)
        console.table(servicios)
    }else{
        console.warn("No se ha encontrado el servicio:", elemento)
    }
}