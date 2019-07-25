class UI {
  //the construcotr gets all the DOM elements here
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.getElementById('w-country');
    this.hour = document.getElementById('w-hour');
    this.desc = document.getElementById('w-desc');
    this.img = document.getElementById('time-day');
    this.icon = document.getElementById('w-icon');
    this.wind = document.getElementById('w-wind');
    this.pression = document.getElementById('w-pression');
    this.humidity = document.getElementById('w-humidity');
    this.temp = document.getElementById('w-temp');
   
  }
  //paint ui is the main function taking care of displainfo, less those which need to be calculated
  paintUi(data) {
  
    this.location.innerHTML = data.name;
    this.country.innerHTML = data.sys.country;
    console.log(data.weather[0].description)
    this.desc.innerHTML = data.weather[0].description;
    this.temp.innerHTML = data.main.temp;
    this.wind.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
    this.humidity.innerHTML = `Humidity: ${data.main.humidity} %`;
    this.pression.innerHTML = `Pressure: ${data.main.pressure} Pa`;
  }
  //call the day time function to get the right time wth the help of moment.js (in app)
    dayTime(hour) {
    this.hour.innerHTML = hour;
  }
  //display the image in base at data weather main proriety 
    imgDisplay(data) {
   
    const condition = data.weather[0].main;

      if ( condition === 'Clear') {
        this.img.setAttribute('src', 'img/pngweather/sun.png');
      }else if (condition === 'Drizzle') {
        this.img.setAttribute('src', 'img/pngweather/drizzle.png');
      }else if ( condition === 'Clouds') {
        this.img.setAttribute('src', 'img/pngweather/cloud.png');
      }else if ( condition === 'Thunderstorm') {
        this.img.setAttribute('src', 'img/pngweather/storm.png');
      }else if ( condition === 'Rain') {
        this.img.setAttribute('src', 'img/pngweather/rain.png');
      }else if ( condition === 'Snow') {
        this.img.setAttribute('src', 'img/pngweather/drizzle.png');

      }
  }
  
  //calc and display temp
      displayTemp(temp) {
        console.log(temp)
        const celsius = temp - 273.15;
        const result =celsius.toFixed(2)
        this.temp.innerHTML = `Temp: ${result} &#8451`;
      }
}

