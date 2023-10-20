
let ip;
const getCity = document.getElementById('cityBtn');
const url = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '217d0d1c5bmshb9e1ba248f6d6ccp1d1ce8jsn904ee41d02f2',
		'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
	}
};


fetch(url, options)
.then((response)=> response.json())
.then((response)=>
{
ip = response.ip;
setip(ip);
}).catch((error)=>{
 console.log(error);
})
   
function setip(ip)
{
const url1 = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip='+ip;
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '217d0d1c5bmshb9e1ba248f6d6ccp1d1ce8jsn904ee41d02f2',
		'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
	}
};

fetch(url1, options1)
.then((response)=> response.json())
.then((response)=>
{
runWeather(response.city);

}).catch((error)=>{
 console.log(error);
})
   
}

function runWeather(city)
{
const title = document.querySelector('.card-title');
const text = document.querySelector('.card-text');
const cityHeader = document.querySelector('.navbar-brand');
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '217d0d1c5bmshb9e1ba248f6d6ccp1d1ce8jsn904ee41d02f2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

 fetch(url, options)
 .then((response)=> response.json())
 .then((response)=>
 {
  setWeather(response);

 }).catch((error)=>{
  console.log(error);
 })
	
function setWeather(response)
{
	cityHeader.textContent = city+": "+response.temp+"° Celsius";
	title.textContent = "Temperature: "+response.temp+"° Celsius";
	text.innerHTML =`
	<p>Humidity: ${response.humidity}%</p>
	<p>Min: ${response.min_temp}° Celsius</p>
	<p>Max: ${response.max_temp}° Celsius</p>
	<p>Wind speed: ${response.wind_degrees} km/h</p>
	`;
}
}

getCity.addEventListener('click',(e)=>{

	const cityName = document.querySelector('#cityName');
	const city = cityName.value;
	if(city!=="")
	runWeather(city);
})