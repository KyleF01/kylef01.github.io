function getWeather() {
  let lat;
  let lon;
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    let dayNight;
    const Http = new XMLHttpRequest();
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2513085af99b5a5ddd40889837e7cfc2`;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
	    let data = JSON.parse(Http.responseText)
      temp = data.main.temp
      if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
        dayNight = 'day'
      } else {
        dayNight = 'night'
      }
      document.getElementById("wicon").classList.add(`wi-owm-${dayNight}-${data.weather[0].id}`)
      document.getElementById("tempMain").textContent = `${Math.round(((temp - 273.15) * (9/5) + 32)*100)/100}°F`
      document.getElementById("tempMin").textContent = `${Math.round((temp-273.15)*100)/100}°C`
      document.getElementById("loc").innerHTML = `<i class="fa-solid fa-map-pin"></i> ${data.name}`
    }
  });
}
getWeather()

function log(x) {
	//document.querySelector("#log").textContent = x
}
let border = 0
function changeBorderColor() {
  border++
  if (border == 361) {
    border = 0
  }
  document.getElementById("weatherBorder").style = `background-image: linear-gradient(${border}deg, darkblue, darkorchid);padding: 5px;width: 175px;margin: 100px;`
  document.getElementById("timeBorder").style = `background-image: linear-gradient(${border+50}deg, #ff0, #f50);padding: 5px;width: 175px;margin: 100px;`
}

setInterval(changeBorderColor, 10)

function setTime() {
  let time = new Date()
  let min = time.getMinutes()
  let hour = time.getHours()
  let day = time.getDay()
  if (hour == 0) {
    hour = 12
  } else {
    if (hour >= 13) {
      hour -= 12
    }
  }
  if (min < 10) {
    min = '0'+min.toString()
  }
  if (day == 0) {
    day = 'Sunday'
  }
  if (day == 1) {
    day = 'Monday'
  }
  if (day == 2) {
    day = 'Tuesday'
  }
  if (day == 3) {
    day = 'Wednesday'
  }
  if (day == 4) {
    day = 'Thursday'
  }
  if (day == 5) {
    day = 'Friday'
  }
  if (day == 6) {
    day = 'Saturday'
  }
  document.getElementById("date").textContent = `${time.getMonth()}/${time.getDate()}/${time.getYear()-100}`
  document.getElementById("time").textContent = `${hour}:${min}`
  document.getElementById("day").textContent = day
}
setInterval(setTime,10)

