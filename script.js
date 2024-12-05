"use strict";

// Načtení souboru pomocí Fetch API
fetch("input.txt") // Zadejte cestu k souboru
  .then((response) => {
    if (!response.ok) {
      throw new Error("Chyba při načítání souboru");
    }
    return response.text(); // Vrátí obsah jako text
  })
  .then((data) => {
    // Zpracování textu
    const rows = data.trim().split("\n"); // Rozdělení textu na řádky
    const numbers = rows.map((row) => row.split("   ")); // Rozdělení na sloupce (např. tabulátory)
    // console.log(numbers);
    // console.log(rows);

    // FIRST PART
    const firstOut = [];
    const secondOut = [];

    for (const [first, second] of numbers) {
      firstOut.push(first);
      secondOut.push(second);
    }
    // console.log(firstOut);
    // console.log(secondOut);

    const firstSort = firstOut.sort((a, b) => a - b);
    const secondSort = secondOut.sort((a, b) => a - b);

    const getDiff = firstSort.map((num, index) =>
      Math.abs(num - secondSort[index])
    );
    // console.log(getDiff);

    const result = getDiff.reduce((total, current) => {
      return total + current;
    }, 0);
    // console.log(result);

    // SECOND PART
    const frequency = [];
    for (const firstEach of firstOut) {
      frequency.push(secondOut.filter((num) => num === firstEach).length);
    }
    console.log(frequency);

    const multi = firstOut.map((num, f) => num * frequency[f]);
    console.log(multi);

    const resultFinal = multi.reduce((total, current) => {
      return total + current;
    }, 0);
    console.log(resultFinal);
  })
  .catch((error) => {
    console.error("Chyba:", error);
  });

// DEMO-VERSION
const tryy = [
  [3, 4],
  [4, 3],
  [2, 5],
  [1, 3],
  [3, 9],
  [3, 3],
];
////// FIRST PART OF THE TASK
// console.log(tryy);
const firstOut = [];
const secondOut = [];

// for (const [first, second] of tryy) {
//   firstOut.push(first);
//   secondOut.push(second);
// }
// console.log(firstOut);
// console.log(secondOut);

// const firstSort = firstOut.sort((a, b) => a - b);
// const secondSort = secondOut.sort((a, b) => a - b);

// const getDiff = firstSort.map((num, index) =>
//   Math.abs(num - secondSort[index])
// );
// console.log(getDiff);

// const result = getDiff.reduce((total, current) => {
//   return total + current;
// }, 0);
// console.log(result);

////// SECOND PART OF THE TASK
// const frequency = [];
// for (const firstEach of firstOut) {
//   frequency.push(secondOut.filter((num) => num === firstEach).length);
// }
// console.log(frequency);

// const multi = firstOut.map((num, f) => num * frequency[f]);
// console.log(multi);

// const resultFinal = multi.reduce((total, current) => {
//   return total + current;
// }, 0);
// console.log(resultFinal);
