// Códgio inicial.

function simulateWeatherService(name, delay, shouldFail = false) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error(`${name} falhou`));
        } else {
          const temp = Math.floor(Math.random() * 15) + 20; // 20°C a 34°C
          console.log(`${name} respondeu: ${temp}°C`);
          resolve(temp);
        }
      }, delay);
    });
  };
}

// Tres serviços meteorológicos simulados
const getFromWeatherA = simulateWeatherService("Weather A", 400);
const getFromWeatherB = simulateWeatherService("Weather B", 200, true);
const getFromWeatherC = simulateWeatherService("Weather C", 600);

export { getFromWeatherA, getFromWeatherB, getFromWeatherC };
