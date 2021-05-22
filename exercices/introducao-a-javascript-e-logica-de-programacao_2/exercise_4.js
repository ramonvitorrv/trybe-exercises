let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbersIndex = 0;
let mediaNumbersIndex = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaNumbersIndex += numbers[index];
    mediaNumbersIndex = somaNumbersIndex / numbers.length;
}

console.log(mediaNumbersIndex);

if (mediaNumbersIndex > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}

