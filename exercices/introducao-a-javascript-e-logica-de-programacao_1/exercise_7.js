let nota = 90;

if ((nota / 100) < 0.50) {
    console.log("Conceito: F")
}
else if ((nota / 100) >= 0.50 && (nota / 100) < 0.60) {
    console.log("Conceito: E")
}
else if ((nota / 100) >= 0.60 && (nota / 100) < 0.70) {
    console.log("Conceito: D")
}
else if ((nota / 100) >= 0.70 && (nota / 100) < 0.80) {
    console.log("Conceito: C")
}
else if ((nota / 100) >= 0.80 && (nota / 100) < 0.90) {
    console.log("Conceito: B")
}
else if ((nota / 100) >= 0.90) {
    console.log("Conceito: A")
}
else {
    console.log("Digite um valor maior que 0 e menor que 100.")
}