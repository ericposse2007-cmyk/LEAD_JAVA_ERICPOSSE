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
/*EX6*/
console.log("EX6")
const palabras = ["casa", "sol", "taula", "gat"];
const nuevoArray = [];
for (let i = 0; i < palabras.length; i++) {
    const palabraActual = palabras[i];
    let compt = 0;
    for (let j = 0; j < palabraActual.length; j++) {
        if (palabraActual[j] === "a") {
            compt++;
        }
    }
    if (compt > 1) {
        nuevoArray.push(palabraActual);
    }
}
console.log(nuevoArray);
/*EX7*/
console.log("EX7")
const mapa = new Map();
mapa.set(1, "primera cosa");
mapa.set("clau", "segona cosa");
mapa.set(true, "tercera cosa");
console.log(mapa);
/* EX8 */
console.log("EX8");
const array = ["anna", "sortida", "ara"];
for (let i = 0; i < array.length; i++) {
    const cua = [];
    for (let j = 0; j < array[i].length; j++) {
        cua.push(array[i][j]);
    }
    let girada = "";
    while (cua.length > 0) {
        girada = cua.shift() + girada;
    }
    if (array[i] === girada) {
        console.log(array[i] + " palíndrom");
    } else {
        console.log(array[i] + " no palíndrom");
    }
}
/*EX9*/
console.log("EX9")
const actors_cars =["Owen Wilson","Larry the Cable Guy","Michael Caine"]
const actors_up =["Ed Asner","Jordan Nagai","Christopher Plummer"]
class Pelicula {
    constructor(titol, descripcio, anyEstrena,actors) {
        this.titol = titol;
        this.descripcio = descripcio;
        this.anyEstrena = anyEstrena;
        this.actors = actors;
    }
}

const peli1 = new Pelicula("Cars2",
    "Un cotxe deprimit lluita amb espias mentres el seu millor amic fa carreras",
    2011,
    actors_cars);
const peli2 = {
    titol: "Up",
    descripcio: "Un vell viatja amb una casa lligada a globus.",
    anyEstrena: 2009,
    actors: actors_up,
};

console.log(peli1.titol, peli1.descripcio, peli1.anyEstrena);
console.log(peli2.titol, peli2.descripcio, peli2.anyEstrena);
/* EX10 */
console.log("EX10");
const cuaPelis = [];
cuaPelis.push(peli1);
cuaPelis.push(peli2);
let mesAntiga = cuaPelis.shift();
while (cuaPelis.length > 0) {
    const actual = cuaPelis.shift();
    if (actual.anyEstrena < mesAntiga.anyEstrena) {
        mesAntiga = actual;
    }
}
console.log("La pel·lícula més antiga és:", mesAntiga.titol);
/* EX11 */
console.log("EX11");
const cua = [];
cua.push(peli1);
cua.push(peli2);

for (let i = 0; i < cua.length; i++) {
    console.log("Actors de " + cua[i].titol + ":");

    for (let j = 0; j < cua[i].actors.length; j++) {
        console.log(cua[i].actors[j]);
    }
}
