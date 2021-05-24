let numero = 5;
let asterisco = '*';
let stringVazia = '';
let stringPosicao = numero;

for (let index = 0; index < numero; index += 1) {
    for (let index2 = 0; index2 <= numero; index2 += 1) {
        if (index2 < stringPosicao) {;
        stringVazia += ' ';
        } else {
        stringVazia += asterisco;
        }
    }
    console.log(stringVazia);
    stringVazia ='';
    stringPosicao -= 1;
}
