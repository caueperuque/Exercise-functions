// Requisito 1 - Crie a função verificaPalindromo
const verificaPalindromo = (string) => {
  splitString = string.split('');
  reverseArray = splitString.reverse();
  joinArray = reverseArray.join('');
  condition = (string === joinArray);
  return condition;
};
// console.log(verificaPalindromo('osso'));

// Requisito 2 - Crie a função indiceDoMaior
const listInt = [11, 3, 40, 30, 70];
const indiceDoMaior = (array) => {
  let biggerValue = array[0];
  let biggerIndex = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[index] > biggerValue) {
      biggerValue = array[index];
      biggerIndex = index;
    }
  }
  return biggerIndex;
};
console.log(indiceDoMaior(listInt));

// Requisito 3 - Crie a função indiceDoMenor
const listNumbers = [1000000000000, 1000000000000000, 10000000000];
const indiceDoMenor = (array) => {
  let smallerValue = array[0];
  let smallerIndex = 0;
  for (index = 0; index < array.length; index += 1) {
    if (array[index] < smallerValue) {
      smallerValue = array[index];
      smallerIndex = index;
    }
  }
  return smallerIndex;
};
console.log(indiceDoMenor(listNumbers));

// Requisito 4 - Crie a função maiorPalavra
const arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
const maiorPalavra = (array) => {
  let arr = array[0].split('');
  let longgestWord = 0;
  for (let index = 0; index < array.length; index += 1) {
    let splitArray = array[index].split('');
    if (splitArray.length >= arr.length) {
      let joinString = splitArray.join('');
      arr = array[index];
      longgestWord = joinString;
    }
  }
  return longgestWord;
};
console.log(maiorPalavra(arrayTeste));


// Requisito 6 - Crie a função somatorio
const somatorio = (number) => {
  let sum = null;
  if (number < 0) {
    return 'ERRO';
  }
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
};
console.log(somatorio(-1));

// Requisito 7 - Crie a função verificaFimPalavra
const verificaFimPalavra = (palavra1, palavra2) => {
  const tamanhoPalavra2 = palavra2.length;
  const menosString = palavra1.substr(-tamanhoPalavra2); // Para realizar subtração em STRINGS usei o método .substr() (Fonte: MDN)
  verifica = (menosString === palavra2);
  return verifica;
};

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
