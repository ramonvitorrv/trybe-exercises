let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbersIndex = 0;
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaNumbersIndex += numbers[index];
    if (maiorNumero < numbers[index]) {
        maiorNumero = numbers[index];
    }  
}

console.log(maiorNumero)
