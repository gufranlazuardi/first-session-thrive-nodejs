/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  const genap = [];
  const ganjil = [];
  const dibagiTiga = [];

  numbers.forEach((num) => {
    if (num % 2 === 0) {
      genap.push(num);
    }
    if (num % 2 !== 0) {
      ganjil.push(num);
    }
    if (num % 3 === 0) {
      dibagiTiga.push(num);
    }
  });

  return console.log([genap, ganjil, dibagiTiga]);
}

numberGrouping([1, 2, 4, 6, 8]); // Output: [[2, 4, 6, 8], [1], [6]]
