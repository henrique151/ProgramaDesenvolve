const shoppingList = [
  "Leite",
  "Pão",
  "Ovos",
  "Ovo",
  "PC Gamer",
  "PS5",
  "Manteiga",
  "Nintendo",
];

// // 🔁 Loop com índice - mostra posição e item
// console.log("🔢 Loop com índice:");
// for (let index = 0; index < shoppingList.length; index++) {
//   console.log(`Índice: ${index} → Item: ${shoppingList[index]}`);
// }

// // 🔁 Loop for...of - mostra apenas os itens
// console.log("\n📦 Loop for...of:");
// for (let item of shoppingList) {
//   console.log(`Item: ${item}`);
// }

// const itemsDescription = shoppingList.map((item) => `Item: ${item}`);

// console.log(itemsDescription);

// const itemsDescriptionIndex = shoppingList.map(
//   (item, ind) => `${ind + 1} - Item: ${item}`
// );

// console.log(itemsDescriptionIndex);

// const filteredList = shoppingList.filter((item) => item.length > 3);
// console.log(filteredList);
// const filteredList2 = shoppingList.filter((item) => item === "PS5");
// console.log(filteredList2);
// const filteredList3 = shoppingList.filter((item) => item !== "Pão");
// console.log(filteredList3);
// const filteredList4 = shoppingList.filter((item) => item.includes("Gamer"));
// console.log(filteredList4);

const foundItem = shoppingList.find((item) => item.includes("Ovo"));
console.log(foundItem);
