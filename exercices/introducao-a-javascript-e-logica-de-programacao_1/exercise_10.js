let custoProduto = 500;
let valorVenda = 750;

lucro = valorVenda - custoProduto;
impostoSobreOCusto = custoProduto * 0.20;
lucroReal = lucro - impostoSobreOCusto;

if (custoProduto >= 0 && valorVenda >= 0) {
    console.log(`Vendendo 1000 produtos a empresa terá ${lucroReal*1000} reais de lucro.`)
}
else {
    console.log("O valor digitado não pode ser menor do que 0.")
}