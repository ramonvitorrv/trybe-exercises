let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

// Percorre o array:
for (let i = 1; i < array.length; i += 1) {
// Verifica a ordem dos números:
  for (let j = 0; j < array.length; j += 1)
// Se o Valor da posição um do array for menor que o da posição 2:
  if (array[j] < array[j + 1]) {
// Inverte a posição:
    let inverteNum = array[j];
    array[j] = array[j + 1];
    array[j + 1] = inverteNum;
  }
}

console.log(array)