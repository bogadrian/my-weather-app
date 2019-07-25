

// get change city button reference
const btnChangeCity = document.getElementById('save-city');

// options object used for geolocation, navigator.geolocation.getCurrentPosition which is called down of the page
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


// geolocation function; calls get city function in UI with the coordinats if those are enabled on device (if not Paris should display and an alert should ask nable geolocation)
function success(pos) {
  //let variable to store position cambing bacj from geolocation 
  let crd = pos.coords;
  //init Ui class
  const ui = new UI;
// init Weather class
const weather = new Weather(crd.latitude, crd.longitude);

//call get Weather and pass to it all the UI display functions
weather.getWeather()
.then(data => {
  console.log(data)
  if (data.cod === 200) {
 ui.paintUi(data);
 ui.dayTime(moment().local(data.timezone).format("dddd, Do YYYY, h:mm a"));
 ui.imgDisplay(data);
 ui.displayTemp(data.main.temp);
 
  } else {
    //show alert and ask for a corect city name 
    alert('Bad Riquest, try agian please!')
   }
 })
 //handle the error from fetching data
.catch(err => console.log(err))
}

//handle the error for geolocation
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

//call navigator geolocation method
navigator.geolocation.getCurrentPosition(success, error, options);


btnChangeCity.addEventListener('click', e => {
 //init WeatherCity class
 const weatherCity = new WeatherCity('Paris')
 //init UI
 const ui = new UI;
 //get change city input value
  const cityChanged = document.getElementById('city-input').value;
  //call change city function in Weather city class
  weatherCity.changeCity(cityChanged);
  //call get weather by city method in weather city classe
  weatherCity.getWeatherByCity(cityChanged)
  //call all ui function to  with the city info
   .then(data => {
    console.log(data.coord)
    if (data.id !== undefined) {
      ui.paintUi(data);
      ui.dayTime(moment().local(data.timezone).format("dddd, Do YYYY, h:mm a"));
      ui.imgDisplay(data);
      ui.displayTemp(data.main.temp);
      
       } else {
         //show alert and ask for a corect city name 
         alert('Bad quest, please try again!')
        }
      }) 
    .catch(err => console.log(err))
    //weather.getWeather(latit, long)
    $('#locModal').modal('hide');
  })













 








