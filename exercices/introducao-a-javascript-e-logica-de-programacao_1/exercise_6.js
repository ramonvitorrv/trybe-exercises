let pecaXadrez = "Torre";

if (pecaXadrez.toLowerCase() == "peão") {
    console.log("Peão: movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")
}
else if (pecaXadrez.toLowerCase() == "bispo") {
    console.log("Bispo: move-se ao longo da diagonal. Não pode pular outras peças.")
}
else if (pecaXadrez.toLowerCase() == "cavalo") {
    console.log("Cavalo: É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
}
else if (pecaXadrez.toLowerCase() == "torre") {
    console.log("Torre: movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
}
else if (pecaXadrez.toLowerCase() == "rei") {
    console.log("Rei: pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.")
}
else if (pecaXadrez.toLowerCase() == "rainha") {
    console.log("Rainha: move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.")
}
else {
    console.log("Peça inválida. Digite apenas: peão, bispo, cavalo, torre, rei ou rainha.")
}