import { Coordinates } from "../weather/interfaces/coordinates.interface";

const clearSkyDay :string = "assets/icons/clear_sky_day.svg";
const clearSkyNight :string = "assets/icons/clear_sky_night.svg";
const fewCloudsDay :string = "assets/icons/few_clouds_day.svg";
const fewCloudsNight :string = "assets/icons/few_clouds_night.svg";
const scatteredClouds :string = "assets/icons/scattered_clouds.svg";
const brokenClouds :string = "assets/icons/broken_clouds.svg";
const showerRain :string = "assets/icons/rain.svg";
const rainDay :string = "assets/icons/shower_rain_day.svg";
const rainNight :string = "assets/icons/shower_rain_night.svg";
const thunderstorm :string = "assets/icons/thunderstorm.svg";
const snow :string = "assets/icons/snow.svg";
const mist :string = "assets/icons/mist.svg";
const FACTOR_CONVERSION = 273.1;

export const getCoordinates = async (): Promise<Coordinates | null> => {
  try {
    const position: GeolocationPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
  } catch (_) {
    return null;
  }
};

export const getIconById = (idIcon: string): string => {
  switch (idIcon) {
    case "01d":
      return clearSkyDay;
    case "01n":
      return clearSkyNight;
    case "02d":
      return fewCloudsDay;
    case "02n":
      return fewCloudsNight;
    case "03d":
    case "03n":
      return scatteredClouds;
    case "04d":
    case "04n":
      return brokenClouds;
    case "09d":
    case "09n":
      return showerRain;
    case "10d":
      return rainDay;
    case "10n":
      return rainNight;
    case "11d":
    case "11n":
      return thunderstorm;
    case "13d":
    case "13n":
      return snow;
    case "50d":
    case "50n":
      return mist;
  }
  return '';
};

export const kelvinToCelcius = (temperatureKelvin: number) =>
  temperatureKelvin - FACTOR_CONVERSION;

  export const kelvinToFarenheit = (temperatureKelvin: number) => {
    const celsius = kelvinToCelcius(temperatureKelvin);
    const FARENHEIT_CONVERSION = 9 / 5;
    const FARENHEIT_CONSTANT = 32;
    return celsius * FARENHEIT_CONVERSION + FARENHEIT_CONSTANT;
  };
