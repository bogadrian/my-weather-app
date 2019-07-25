// Weather class. takes care of fetching data by latitude and longitude
class Weather {
  constructor(lat, lon) {
    this.key = 'c034dd0b5580c69fe7530c4e510283d6';  
    this.lat = lat;
    this.lon = lon;
  }
  // main function fetching data
  async getWeather() {
   
    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const queryCoor = `?lat=${this.lat}&lon=${this.lon}&appid=${this.key}`;
    const coordUrl = await fetch(base + queryCoor);
    const coordints = await coordUrl.json();

    return coordints;
 }
}

// weather city class, takes care of fetching data by city name 
class WeatherCity {
  constructor(city) {
    this.key = 'c034dd0b5580c69fe7530c4e510283d6';
    this.city= city;
  }
  //main function fetching data
  async getWeatherByCity(city) {

    const base = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${this.key}`;
    const resultWeather = await fetch(base + query);
    const resultByCity = await resultWeather.json(); 
  
    return resultByCity;
   }
   //change city name class proriety in construnctor
   changeCity(city) {
     this.city = city;
   }
}
