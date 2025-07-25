// Lista de compras principal e lista secundária
const shoppingList = ["Leite", "Pão", "Ovos", "PC Gamer", "PS5"];
const shoppingList2 = ["Arroz", "Guardanapo", "Feijão"];

// 📏 Tamanho da lista antes de qualquer alteração
console.log("📝 Tamanho antes:", shoppingList.length);

// ➕ Adicionando itens ao final da lista
shoppingList.push("Manteiga", "Nintendo");
console.log("📦 Após push:", shoppingList.length);

// ➖ Removendo o último item da lista
shoppingList.pop();
console.log("🗑️ Após pop:", shoppingList.length);

// 🔝 Adicionando item no início da lista
shoppingList.unshift("Manteiga");

// 🔙 Removendo o primeiro item da lista
shoppingList.shift();

// 📋 Exibindo a lista final
console.log("📋 Lista final:", shoppingList);

// 🔚 Mostrando o último item da lista
console.log("🔚 Último item:", shoppingList.at(-1));

// 🔍 Verificando se "Ovos" está na lista
console.log("❓ Contém 'Ovos'?", shoppingList.includes("Ovos"));

// 🔢 Mostrando a posição de "Ovos" na lista
console.log("🔢 Índice de 'Ovos':", shoppingList.indexOf("Ovos"));

// 🔗 Unindo os itens da lista em uma string
console.log("🧵 Join:", shoppingList.join(" / "));

// 📦 Lista original
console.log("📦 Original:", shoppingList);

// ➕ Concatenando com a segunda lista
console.log("➕ Concat:", shoppingList.concat(shoppingList2));
