/* ############## CICLO FOR ############### */
// recibe tres parametros: desde, hasta, incremento

/* ---------- CICLO FOR ESTATICO ---------- */

for (let i = 0; i < 21; i++){
    console.log ("Iteración No. ", i)
}


/* ---------- CICLO FOR DINAMICO ---------- */

let limite = parseInt(prompt("Ingresa un número:"))

for (let i = 0; i < limite; i++){
    console.log ("Iteración No. ", i)
}


/* ------------ SENTENCIA BREAK ----------- */
// se corta cuando llega a 2000

for (let i = 0; i < 70000; i++){
    if(i === 2001){
        break
    }
    console.log ("Iteración No. ", i)
}


/* ---------- SENTENCIA CONTINUE ---------- */
// la iteracion nro. "numero" no se va a ejecutar

let numero = parseInt(prompt("Ingrese un número:"))
for (let i = 0; i < 20; i++){
    if(i === numero){
        continue
    }
    console.log ("Iteración No. ", i)
}


/* ############## CICLO WHILE ############### */

let seguimos = true
let num = parseInt(prompt("Ingresa un número de un dígito:"))
let factor = 1

while(seguimos){
    console.log("Resultado: ", num * factor)
    seguimos = confirm("Siguiente multiplicación?")
    if(seguimos){
        factor++
    }
}


/* ############ CICLO DO... WHILE ############# */

/* let seguimos = true
let num = parseInt(prompt("Ingresa un número de un dígito:"))
let factor = 1 */

do{
    console.log("Resultado: ", num * factor)
    seguimos = confirm("Siguiente multiplicación?")
    if(seguimos){
        factor++
    }
}while(seguimos)



/* ############ CLAUSULA SWITCH ############# */

let color = prompt("Ingrese el color de la prenda a comprar:")

switch(color.toLowerCase()){
    case "negro":
        console.log("Sí, tenemos el color:", color)
        break
    case "rojo":
        console.log("Sí, tenemos el color:", color)
        break
    case "verde":
        console.log("Sí, tenemos el color:", color)
        break
    default:
        console.warn("No trabajamos el color: ", color)
}