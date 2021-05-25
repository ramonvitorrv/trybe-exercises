function palindromo(palavra) {
    let arrayLetras = palavra.split('');
    let isPalindrome = true;
    let notIsPalindrome = false;
    for (let index in arrayLetras) {
        if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
            isPalindrome = false;
        } else if (arrayLetras[index] == palavra) {
            return notIsPalindrome;
        }
    }
    return isPalindrome;
}
console.log(palindromo('arara'));