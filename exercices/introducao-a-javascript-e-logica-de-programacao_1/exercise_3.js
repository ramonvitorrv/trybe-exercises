let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c) {
    console.log(a + " é maior do que " + b + " e " + c)
}
else if (b > a && b > c) {
    console.log(b + " é menor do que " + a + " e " + c)
}
else if (c > a && c > b) {
    console.log(c + " é maior do que " + a + " e " + b)
}
else {
    console.log("Os valores são iguais.")
}