/*EX1*/
console.log("EX1")
function num(num1){
    if (num1 % 3==0 || num1 % 7==0) {
        console.log("es multiple")
    }
    else{
        console.log("No es multiple")
    }
}
num(3)
num(7)
num(8)
/*EX2*/
console.log("EX2")
let x=15
let y=5

x > 10 && x<50? console.log("x esta en el rang de 10 a 50")
        : console.log("x No esta en el rang")
y > 10 && y<50? console.log("y esta en el rang de 10 a 50")
    : console.log("y No esta en el rang")
/*EX3*/
console.log("EX3")
function nota(x){
    if(x <=4.99){
      console.log("suspes")
    }
    else if(x>=5 && x<6){
        console.log("suficient")
    }
    else if(x>=6 && x<7){
        console.log("Bé")
    }
    else if(x>= 7&& x<9){
        console.log("Notable")
    }
    else{
        console.log("Excel·lent")
    }
}
nota(0,4,99)
nota(5,5,99)
nota(6,6,99)
nota(7,8,99)
nota(9,10)
/*EX4*/
console.log("EX4")
function num(num1){
    switch (true) {
        case (num1 % 3 == 0 && num1 % 7 == 0):
            console.log(num1 + " és múltiple de 3 i de 7");
            break;
        case (num1 % 3 == 0):
            console.log(num1 + " és múltiple de 3");
            break;
        case (num1 % 7 == 0):
            console.log(num1 + " és múltiple de 7");
            break;
        default:
            console.log(num1 + " no és múltiple de cap dels dos");
            break;
    }
}
num(3)
num(7)
num(21)
num(8)
/*EX5*/
console.log("EX5 con IF")
function trobaMaximN(x) {
    let suma = 0;
    let n = 0;
    for (let i = 1; i <= x; i++) {
        if (suma + i > x) {
            break;
        }
        suma += i;
        n = i;
    }
    console.log("Per a x = " + x + ", el màxim n és: " + n + ",Suma total =" + suma);
}
trobaMaximN(15)
trobaMaximN(20)
/* EX6 */
console.log("EX6");
function string(x) {
    let suma = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= "0" && x[i] <= "9") {
            suma = suma + Number(x[i]);
        }
    }
    console.log(suma);
}
string("325");
/*EX7*/
console.log("EX7");
function ordenarSuperFacil(x, y, z) {
    let aux;
    if (x < y) {
        aux = x;
        x = y;
        y = aux;
    }
    if (x < z) {
        aux = x;
        x = z;
        z = aux;
    }
    if (y < z) {
        aux = y;
        y = z;
        z = aux;
    }
    console.log("De major a menor:", x, y, z);
}
ordenarSuperFacil(3, 10, 7);
/*EX8*/
console.log("EX8")
function parells_senars (x){
    for (let i = 1;i<x;i++){
        if(i % 2 === 0){
            console.log(i + ":Es parell")
        }
        else{
            console.log(i + ":es senar")
        }
    }
}
parells_senars(11)
/*EX9*/
console.log("EX9");
function patroFacil() {
    let linia = "";
    for (let i = 1; i <= 5; i++) {
        linia += "*";
        console.log(linia);
    }
}
patroFacil();
/*EX10*/
console.log("EX10");
function sumarMultiples() {
    let suma = 0;
    let i = 1;
    do {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
        i++;
    } while (i <= 1000);
    console.log("La suma total es:", suma);
}
sumarMultiples();
/*EX11*/
console.log("EX11");
function patroImparell() {
    let linia = "";
    for (let i = 1; i <= 5; i++) {
        linia += "*";
        if (i % 2 === 0) {
            continue;
        }
        console.log(linia);
    }
}
patroImparell();