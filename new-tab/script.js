function getWeather() {
  let lat;
  let lon;
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    document.querySelector("#weatherDiv").textContent = `${lat},${lon}`
  });
	const Http = new XMLHttpRequest();
	const url=`https://api.openweathermap.org/data/2.5/weather?lat="${lat}"&lon="${lon}"&appid=2513085af99b5a5ddd40889837e7cfc2`;
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = (e) => {
  	document.querySelector("#weatherDiv").textContent += Http.responseText
	}
}
getWeather()

function log(x) {
	//document.querySelector("#log").textContent = x
}
