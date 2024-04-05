export interface weatherInfo {
  country: string,
  city: string,
  weather: weather,
  temperature: temperature,
};

interface weather {
  main: string,
  description: string,
  icon: string,
};

interface temperature {
  kelvin: number,
  celsius: number,
  farenheit: number,
};
