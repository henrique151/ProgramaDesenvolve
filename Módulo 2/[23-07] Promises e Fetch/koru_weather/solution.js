import {
  getFromWeatherA,
  getFromWeatherB,
  getFromWeatherC,
} from "./weatherServices.js";

export async function getFirstValidTemperature() {
  const temperature = Promise.any([
    getFromWeatherA(),
    getFromWeatherB(),
    getFromWeatherC(),
  ]);
  return temperature;
}
