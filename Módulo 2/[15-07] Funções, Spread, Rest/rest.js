function sumAll(...numbers) {
  console.log(`Argumentos recebidos: ${numbers}`);
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(10, 20));
console.log(sumAll());
