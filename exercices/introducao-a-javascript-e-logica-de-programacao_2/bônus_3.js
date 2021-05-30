let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

// Percorre o array:
for (let index = 0; index < numbers.length; index += 1) {
  // Verifica se o index é menor que o tamanho do array:
      if (index + 1 < numbers.length) {
        // Se for, "empurra" o valor dda posição 1 multiplicado pelo valor da posição 2:
        array.push(numbers[index] * numbers[index + 1])
      } else {
        // Senão, multiplica por 2:
        array.push(numbers[index] * 2);
      }
  }

  console.log(array)