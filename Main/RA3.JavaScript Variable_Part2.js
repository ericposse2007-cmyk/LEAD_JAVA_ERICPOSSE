/*EX6*/
let numero = 1234;
let grande = 5678n;
let grandeANumber = Number(grande);

console.log("Suma:", (numero + grandeANumber).toFixed(1));
console.log("Resta:", (numero - grandeANumber).toFixed(1));
console.log("Multiplicació:", (numero * grandeANumber).toFixed(1));
console.log("Divisió:", (numero / grandeANumber).toFixed(1));