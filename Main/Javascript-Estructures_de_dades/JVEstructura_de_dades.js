/*EX1*/
console.log("EX1")
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
/*EX2*/
console.log("EX2")
const copianumeros = [...numeros];
console.log("Còpia amb propagació:", copianumeros);
/*EX3*/
console.log("EX3")
const array1 =[1,2];
const array2 =[3,1];
const fusion = [...array1, ...array2];
console.log(fusion);
/*EX4*/
console.log("EX4");
const unics = new Set(fusion);
const fusionSenseDuplicats = [...unics];
console.log(fusionSenseDuplicats);
/*EX5*/
console.log("EX5")
const num = [1, 3, 6];
const cubs = num.map(num => num ** 3);/** significa multiplicarlo per 3 vegades,seri un num*num*num*/
console.log(cubs);
