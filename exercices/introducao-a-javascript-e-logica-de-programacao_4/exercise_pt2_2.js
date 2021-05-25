function maiorValor(numeros) {
    let num = 0;
    for (let maior in numeros) {
        if (numeros[num] < numeros[maior]) {
            num = maior;          
        }
    }
    return num;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));