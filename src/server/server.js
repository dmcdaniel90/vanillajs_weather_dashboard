import express from 'express';

import fetch from './utils/fetch.js';
import convertToCelcius from './utils/convertToCelcius.js';

const app = express();
const PORT = 3000;

const APIENDPOINT = `https://api.tomorrow.io/v4/weather/forecast?location=51.5514818,-1.8384226&timesteps=1d&apikey=KJwaILh2MqMbXsUVxtVMz5jXd3M9Q4YG`;


/**
 * Fetches weather data from API
 * @returns {Promise<string>}
 */
async function getWeather() {
  const res = await fetch(APIENDPOINT);

  const tempeature = res.timelines.daily[0].values.temperatureAvg;
  const convertedTemp = convertToCelcius(tempeature);

  return `${convertedTemp.toFixed(1)}°F`;
}

app.get('/', async (req, res) => {
  res.send(`Hello! My name is ${process.env.NAME}.`);
});

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
  console.log(await getWeather());
});
