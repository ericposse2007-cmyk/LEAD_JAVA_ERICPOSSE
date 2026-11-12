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
/*EX6*/
console.log("EX6");
function sumarTres(num1, num2, num3 = 10) {
    let suma = num1 + num2 + num3;
    return suma;
}
let prova1 = sumarTres(2, 3, 5);
console.log("Suma de 3: " + prova1);
let prova2 = sumarTres(2, 3);
console.log("Suma amb valor per defecte: " + prova2);
/*EX7*/
console.log("EX7")
function exercici7() {
    data("10/11/2026");
    return sumarTres(2, 3, 5);
}
let resultatEx7 = exercici7();
console.log("Resultat de l'exercici 7: " + resultatEx7);
/*EX8*/
console.log("EX8");
function comprovar30(num1, num2) {
    if (num1 === 30 || num2 === 30 || (num1 + num2) === 30) {
        return true;
    } else {
        return false;
    }
}
console.log(comprovar30(15, 15));
console.log(comprovar30(30, 5));
console.log(comprovar30(10, 10));
/*EX9*/
console.log("EX9");
const comprovar30anonim = function(num1, num2) {
    if (num1 === 30 || num2 === 30 || (num1 + num2) === 30) {
        return true;
    } else {
        return false;
    }
};
console.log(comprovar30anonim(15, 15));
console.log(comprovar30anonim(30, 5));
console.log(comprovar30anonim(10, 10));
/*EX10*/
console.log("EX10");
/* == igualtat debil/=== igualtat estricta*/
const mateixValorITipus = (valor1, valor2) => {
    return valor1 === valor2;
};

// Proves per comprovar-ho:
console.log(mateixValorITipus(5, 5));
console.log(mateixValorITipus(5, "5"));
console.log(mateixValorITipus("a", "a"));