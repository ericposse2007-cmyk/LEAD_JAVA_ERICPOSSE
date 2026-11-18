/*EX1*/
const numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 10) + 1);
}
console.log(numeros);
for (let j = 0; j < numeros.length - 1; j++) {
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            let aux = numeros[i]
            numeros[i] = numeros[i + 1]
            numeros[i + 1] = aux
        }
    }
}
console.log(numeros)
