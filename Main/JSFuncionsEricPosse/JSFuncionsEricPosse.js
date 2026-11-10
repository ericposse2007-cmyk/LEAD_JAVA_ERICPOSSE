/*EX1*/
console.log("EX1");
function mostrarNom(nom, cognoms) {
    console.log(nom);
    console.log(cognoms);
}

mostrarNom("Eric", "PosseMuñoz");
/*EX2*/
console.log("EX2");
function mostrarTipus(valor) {
    console.log("El valor passat és de tipus: " + typeof valor);
}
mostrarTipus(123);
/*EX3*/
console.log("EX3");
function data(data) {
    console.log(data)
}
data("10/11/2026")
/*EX4
console.log("EX4")
function prova() {
    let missatge = "Hola";
}
console.log(missatge);
*/
/*EX5*/
console.log("EX5");

function comptarVocals(text) {
    let vocals = "aeiou";
    let comptador = 0;

    for (let i = 0; i < text.length; i++) {
        if (vocals.includes(text[i])) {
            comptador++;
        }
    }

    return comptador;
}
let frase = "Hola";
let resultat = comptarVocals(frase);
console.log("El text conté " + resultat + " vocals.");
