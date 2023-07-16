// Dayjs() 
var datum = dayjs().format('MM/DD/YYYY');
var today = document.querySelector('.heute');
today.innerHTML = datum;
console.log(today);

var weatherContainer = document.getElementById('weatherContainer');
var searchBtn = document.getElementById('searchBtn');
// append city name
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