// CICLOS DE WHILE 
const notas = [1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
let suma = 0
let aux = 0
while (aux < notas.length) {


    suma = suma + notas[aux] // SUMA += NOTAS[AUX]
    aux = aux + 1             //  AUX ++
    console.log(suma)
}
const promedio = suma / notas.length

console.log(promedio)


// CICLOS DE FOR 
const grandes = [1.3, 2.1, 3.4, 7.0, 6.2, 5.4]
let sum = 0
for (index = 0; index < grandes.length; index++) {
    sum += grandes[index]

}

const average = sum / grandes.length

console.log(average)

// ejercicio de ciclos for

const numeros = [10, 15, 4, 30, 20, 6, 9]
let resultado = 0

for (contador = 0; contador < numeros.length; contador++) {

    const actual = numeros[contador]

    if (actual > 10) {

        resultado += actual


    }


}
console.log(resultado)


const n = [10, 4, 8, 15, 9, 14]
let pares = 0
for (let indice = 0; indice < n.length; indice++) {

    const actuall = n[indice]

    if (actuall % 2 == 0) {
        pares += actuall
    }

}
console.log (pares)







