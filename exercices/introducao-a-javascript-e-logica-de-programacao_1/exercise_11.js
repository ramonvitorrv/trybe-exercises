let salarioBruto = 6000;

if (salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * 0.08;
    salarioLiquido = descontoInss - descontoIr;
    console.log(`O salário bruto é: ${salarioBruto} reais.`);
    console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
    console.log(`O salário líquido é: ${salarioLiquido} reais.`);
    console.log("Você está isento de imposto de renda.");
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    if (salarioBruto <= 1903.98) {
        descontoInss = salarioBruto * 0.09;
        salarioLiquido = descontoInss - descontoIr;
        console.log(`O salário bruto é: ${salarioBruto} reais.`);
        console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
        console.log(`O salário líquido é: ${salarioLiquido} reais.`);
        console.log("Você está isento de imposto de renda.");
    } else {
        descontoInss = (salarioBruto * 0.09);
        salarioComDescontoInss = (salarioBruto - descontoInss);
        descontoIr = (salarioComDescontoInss * 0.075) - 142.80;
        salarioComDescontoIr = salarioComDescontoInss - descontoIr;
        console.log(`O salário bruto é: ${salarioBruto} reais.`);
        console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
        console.log(`Salário após desconto: ${salarioComDescontoInss} reais.`);
        console.log(`O valor a ser descontado de IR é: ${descontoIr} reais.`);
        console.log(`O salário líquido é: ${salarioComDescontoIr} reais.`);
    }
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    if (salarioBruto <= 2826.65) {
        descontoInss = (salarioBruto * 0.11);
        salarioComDescontoInss = (salarioBruto - descontoInss);
        descontoIr = (salarioComDescontoInss * 0.075) - 142.80;
        salarioComDescontoIr = salarioComDescontoInss - descontoIr;
        console.log(`O salário bruto é: ${salarioBruto} reais.`);
        console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
        console.log(`Salário após desconto: ${salarioComDescontoInss} reais.`);
        console.log(`O valor a ser descontado de IR é: ${descontoIr} reais.`);
        console.log(`O salário líquido é: ${salarioComDescontoIr} reais.`);
    } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        descontoInss = (salarioBruto * 0.11);
        salarioComDescontoInss = (salarioBruto - descontoInss);
        descontoIr = (salarioComDescontoInss * 0.15) - 354.80;
        salarioComDescontoIr = salarioComDescontoInss - descontoIr;
        console.log(`O salário bruto é: ${salarioBruto} reais.`);
        console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
        console.log(`Salário após desconto: ${salarioComDescontoInss} reais.`);
        console.log(`O valor a ser descontado de IR é: ${descontoIr} reais.`);
        console.log(`O salário líquido é: ${salarioComDescontoIr} reais.`);
    } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.67) {
        descontoInss = (salarioBruto * 0.11);
        salarioComDescontoInss = (salarioBruto - descontoInss);
        descontoIr = (salarioComDescontoInss * 0.225) - 636.13;
        salarioComDescontoIr = salarioComDescontoInss - descontoIr;
        console.log(`O salário bruto é: ${salarioBruto} reais.`);
        console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
        console.log(`Salário após desconto: ${salarioComDescontoInss} reais.`);
        console.log(`O valor a ser descontado de IR é: ${descontoIr} reais.`);
        console.log(`O salário líquido é: ${salarioComDescontoIr} reais.`);
    } else {
        descontoInss = (salarioBruto * 0.11);
        salarioComDescontoInss = (salarioBruto - descontoInss);
        descontoIr = (salarioComDescontoInss * 0.275) - 869.36;
        salarioComDescontoIr = salarioComDescontoInss - descontoIr;
        console.log(`O salário bruto é: ${salarioBruto} reais.`);
        console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
        console.log(`Salário após desconto: ${salarioComDescontoInss} reais.`);
        console.log(`O valor a ser descontado de IR é: ${descontoIr} reais.`);
        console.log(`O salário líquido é: ${salarioComDescontoIr} reais.`);
    }
}
else if (salarioBruto > 5189.82) {
    descontoInss = 570.88;
    salarioComDescontoInss = salarioBruto - descontoInss;
    descontoIr = (salarioComDescontoInss * 0.275) - 869.36;
    salarioLiquido = salarioBruto - descontoInss - descontoIr;
    console.log(`O salário bruto é: ${salarioBruto} reais.`);
    console.log(`O valor a ser descontado de INSS é: ${descontoInss} reais.`);
    console.log(`Salário após desconto: ${salarioComDescontoInss} reais.`);
    console.log(`O valor a ser descontado de IR é: ${descontoIr} reais.`);
    console.log(`O salário líquido é: ${salarioLiquido} reais.`);
}
else {
    console.log("Digite apenas números.");
}