let divisor = 1;
let numero = 2;

for (let index = 2; index <= numero; index += 1) {
    if (numero % index == 0) {
    divisor += 1;
    }
}

if (divisor == 2) {
    console.log(`O número ${numero} é primo.`);
} else {
    console.log(`O número ${numero} não é primo.`);
};