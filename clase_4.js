/* -----------------------CLASE 4---------------------*/
/* #############  FUNCION CONVENCIONAL  ############# */

function saludar(){
    nombreCompleto=prompt("Introduce tu nombre completo")
    console.log("Hola", nombreCompleto)
}

/* saludar() */



/* ############  FUNCION CON PARAMETROS  ############ */

function calcular(numero1, numero2){
    console.log("Resultado: ", numero1 + numero2)
}

function sumatoriaDinamica(){
    let primerNro=parseFloat(prompt("Ingresa el primer nro:"))
    let segundoNro=parseFloat(prompt("Ingresa el segundo nro:"))
        calcular(primerNro, segundoNro)
}

/* sumatoriaDinamica() */



/* #############  FUNCION CON RETORNO  ############# */

let primerNumero=0
let segundoNumero=0
/* let resultado=0 */

function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero
}

let resultado=sumar(5,8);



/* #############  FUNCION CON SWITCH  ############# */

function calcular(){
    let primerNro=parseFloat(prompt("Ingresa el primer número"))  //variable local
    let segundoNro=parseFloat(prompt("Ingresa el segundo número"))
    let operacion=prompt("Ingresa la operación (+ - * /):")
        console.log("Resultado: ", realizarCalculo(primerNro, segundoNro, operacion))
}

function realizarCalculo(num1, num2, ope){
    switch(ope){
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return "Error en el cálculo"
    }
}


/* #############  SCOPE (AMBITO)  ############# */


let apellido="De Franchi" //variable global

function verNombre(){
    let nombre="Maria" //variable local
    console.log("Su nombre es: ", nombre)
}

function verNombrecompleto(){
    let nombre="Maria" //variable local
    console.log("Su nombre completo es: ", nombre + apellido)
}


/* #############  FUNCION ANONIMA  ############# */

let IVA=1.21
const precioConIVA=function(precio, iva){
    return precio * iva
}



/* #############  FUNCION FLECHA  ############# */

function cuandoNaciste(){
    console.log(2022-36)
}

const cuandoNaciste = ()=> {
    console.log(2022-36)
}

const cuandoNaciste = (anio, edad) => {
    console.log ("Naciste en: ", anio - edad)
}

const cuandoNaciste = (anio, edad) => {return (anio - edad)}

