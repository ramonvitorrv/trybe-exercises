let numero = 5;
let asterisco = '*';
let meio = (numero + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let index = 1; index <= meio; index += 1) {
    let stringVazia = '';
    for (let index2 = 1; index2 <= numero; index2 += 1) {
        if (index2 == ladoEsquerdo || index2 == ladoDireito || index == meio) {;
        stringVazia += asterisco;
        } else {
        stringVazia += ' ';
        }
    }
    ladoEsquerdo -= 1
    ladoDireito += 1;
    console.log(stringVazia);
};
