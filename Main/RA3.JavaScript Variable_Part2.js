/*EX6*/
console.log("EX6")
let numero = 1234;
let grande = 5678n;
let grandeANumber = Number(grande);

console.log("Suma:", (numero + grandeANumber).toFixed(1));
console.log("Resta:", (numero - grandeANumber).toFixed(1));
console.log("Multiplicació:", (numero * grandeANumber).toFixed(1));
console.log("Divisió:", (numero / grandeANumber).toFixed(1));
/*EX7*/
console.log("EX7")
const CATET_A = 4;
const CATET_B = 4;
let hipotenusa = Math.hypot(CATET_A, CATET_B);
console.log("Hipotenusa:", hipotenusa.toFixed(1));
/*EX8*/
console.log("EX8")
let enter = 10;
let textNumero = "2";
let textLletres = "hola";
console.log(enter / textNumero);
console.log(enter / textLletres);