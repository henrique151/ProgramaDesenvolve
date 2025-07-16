// 1. Crie uma função chamada findMax que recebe um número variável de argumentos (números) usando Rest Parameters e retorna o maior número entre eles. Use um loop (for...of) para iterar sobre o array de argumentos. Teste com findMax(10, 5, 20, 8) e findMax(2, 7).

function findMax(...numbers) {
  let max = -Infinity;

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax(10, 5, 20, 8));
console.log(findMax(2, 7));

// 2. Crie dois arrays: frontendSkills = ['HTML', 'CSS', 'JavaScript'] e backendSkills = ['Node.js', 'Databases', 'APIs']. Use Spread Syntax para criar um novo array fullstackSkills que combine frontendSkills e backendSkills. Imprima fullstackSkills.

frontendSkills = ["HTML", "CSS", "JavaScript"];
backendSkills = ["Node.js", "Databases", "APIs"];

const fullstackSkills = [...frontendSkills, ...backendSkills];

console.log(fullstackSkills);

// 3. Crie um objeto person = { name: 'Ana', age: 25 } e um objeto address = { city: 'Recife', country: 'Brazil' }. Use Spread Syntax para criar um novo objeto personWithAddress que combine as propriedades de person e address. Imprima personWithAddress.

const person = { name: "Ana", age: 25 };
const address = { city: "Recife", country: "Brazil" };

const personWithAddress = { ...person, ...address };

console.log(personWithAddress);

// 4. Crie um array de números. Use a função findMax que você criou e a Spread Syntax para encontrar o maior número no array.

const numeros = [4, 9, 1, 12, 6];
const maior = findMax(...numeros);

console.log(maior);
