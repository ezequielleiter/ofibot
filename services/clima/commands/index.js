const axios = require("axios");
const { WEATER_TOKE } = require("../../../config");

const apiUrl = `https://ws.smn.gob.ar/map_items/weather`;
const VILLA_LA_ANGOSTURA = "Villa La Angostura";

const climaDelDia = async() => {
  try {
    const clima = await axios.get(apiUrl);
    const weatherData = clima.data.find((location) => {
      return location.name === VILLA_LA_ANGOSTURA
    });
    let icon = "";
    if (weatherData.weather.description.split(" ").includes("lluvia")) {
      icon = "🌧"
    }
    return `El pronostico para hoy es:\n${icon}${weatherData.weather.description}\n🌡️${weatherData.weather.tempDesc}\n`;
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
  climaDelDia
}