function welcomeMessage() {
  console.log("Bem-vindo ao curso");
}
welcomeMessage();

// Expresion funciton
function calculateArea(widht, height) {
  return widht * height;
}

// Arrow function
const calculateAreaArrow = (widht, height) => widht * height;

let area = calculateArea(5, 10);
console.log(area);

function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let grausCelsius = convertToCelsius(125);
console.log(grausCelsius);

const convertToCelsiusArrow = (fahrenheit) => {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

calculateAreaArrow(15, 30);
convertToCelsiusArrow(70);
