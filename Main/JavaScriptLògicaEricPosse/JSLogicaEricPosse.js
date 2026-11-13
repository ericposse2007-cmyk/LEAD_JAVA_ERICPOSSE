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
