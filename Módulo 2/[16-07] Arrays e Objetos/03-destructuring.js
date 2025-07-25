let coordinates = ["Senna", "Barrichelo", "Prost"];
const [goldMedel, ...oRestante] = coordinates;
console.log(goldMedel);
// const [primeiro, segundo, terceiro] = coordinates;
// console.log(primeiro);

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "Black",
};

const { model: carModel, color: carColor } = car;
console.log(carModel);
console.log(carColor);
