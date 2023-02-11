// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (status) => {
  if (status === 'ligado') {
    status = 'desligado';
    console.log(`O motor está ${status}`);
  } else {
    status = 'ligado';
    console.log(`O motor está ${status}`);
  }
  return status;
};
console.log(ligarDesligar('ligado'));

// 2 - Crie a função circleArea, que calcule a área de um círculo.
const pi = 3.14;
const circleArea = (radius) => {
  if (typeof radius !== 'number') {
    return 'O parâmetro radius deve ser um número';
  }
  let area = pi * (radius ** 2);
  return `Essa é a área do círculo: ${area}`;
};
console.log(circleArea('a'));
// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (frase) => {
  let tamPhrase = frase.split(' ');
  let bigWord = '';
  for (let index of tamPhrase) {
    let armazena = index;
    if (armazena.length > bigWord.length) {
      bigWord = armazena;
    }
  }
  return bigWord;
};
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// Não modifique as linhas abaixo
module.exports = {
  ligarDesligar: typeof ligarDesligar === 'function' ? ligarDesligar : (() => { }),
  circleArea: typeof circleArea === 'function' ? circleArea : (() => { }),
  longestWord: typeof longestWord === 'function' ? longestWord : (() => { }),
};
