let numero = 5;
let asterisco = '*';
let stringVazia = '';
let meio = (numero + 1) / 2;
let ladoEsquerdo = meio;
let ladoDireito = meio;

for (let index = 0; index <= meio; index += 1) {
    for (let index2 = 0; index2 <= numero; index2 += 1) {
        if (index2 > ladoEsquerdo && index2 < ladoDireito) {;
        stringVazia += asterisco;
        } else {
        stringVazia += ' ';
        }
    }
    console.log(stringVazia);
    stringVazia = '';
    ladoDireito += 1;
    ladoEsquerdo -= 1
};
