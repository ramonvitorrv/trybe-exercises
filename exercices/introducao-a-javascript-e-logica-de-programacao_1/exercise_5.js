let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

if (angulo1 == angulo2 && angulo1 == angulo3) {
    console.log("True")
}
else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Valor inválido, o ângulo não pode ser um valor negativo.")
}
else {
    console.log("False")
}