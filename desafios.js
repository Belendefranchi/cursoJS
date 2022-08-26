/* #############  DESAFIO NRO. 1  ############# */

function calculadora(){
    
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
    }







