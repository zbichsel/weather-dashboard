// Dayjs() 
var datum = dayjs().format('MM/DD/YYYY');
var today = document.querySelector('.heute');
today.innerHTML = datum;
console.log(today);

inputCity = ' ';
var weatherContainer = document.getElementById('weatherContainer');
var searchBtn = document.getElementById('searchBtn');
// append city name
var cityName = document.getElementById('cityName');
// append icons for weather
// days?
var tagEins = document.getElementById('tagEins');
var tagZwei = document.getElementById('tagZwei');
var tagDrei = document.getElementById('tagDrei');
var tagVier = document.getElementById('tagVier');
var tagFuenf = document.getElementById('tagFuenf');

var dayOne = dayjs().add(1, 'day').format('MM/DD/YYYY');
var dayTwo = dayjs().add(2, 'day').format('MM/DD/YYYY');
var dayThree = dayjs().add(3, 'day').format('MM/DD/YYYY');
var dayFour = dayjs().add(4, 'day').format('MM/DD/YYYY');
var dayFive = dayjs().add(5, 'day').format('MM/DD/YYYY');

function getLoc(event) {
    event.preventDefault();
    var inputField = document.getElementById('inputField');
    console.log(inputField);
    var requestLoc = 'https://api.openweathermap.org/geo/1.0/direct?q=' + inputField + '&limit=1&appid=896b71b0131b07d6e75f0554bb64eb3c';

    fetch(requestLoc)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            document.getElementById('cityName').innerHTML = inputField + ' ' + datum;
            console.log(lat, lon);
            getWetter(lat, lon);
        })
};

function getWetter(lat, lon) {

    var requestUrl = 'https://api.openweathermap.ord/data/3.0/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly&units=imperial&appid=896b71b0131b07d6e75f0554bb64eb3c';
    console.log(requestUrl);
    fetch(requestUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            weatherContainer.style.visibility = 'visible';
            document.getElementById('temp').innerHTML = "Temperature: " + Math.round(data.current.temp) + "ºF";
            document.getElementById('wind').innerHTML = "Wind Speed: " + data.current.wind_speed + " MPH";
            document.getElementById('humid').innerHTML = "Humidity: " + data.current.humidity + "%";

            var headerDayOne = document.createElement
        })
};

searchBtn.addEventListener('click', getLoc);