class UI {
  constructor() {
    // Location
    this.location = document.getElementById('location');
    // Location 2
    this.location2 = document.getElementById('location2');
    // country
    this.country = document.getElementById('country');
    //region
    this.region = document.getElementById('region');
    // time
    this.time = document.getElementById('time');
    // temprature
    this.temprature = document.querySelectorAll('#temprature');
    // feels like
    this.feelsLike = document.getElementById('feelslike');
    // condition
    this.condition = document.querySelectorAll('#condition');
    // condition icon
    this.conditionIcon = document.getElementById('condition-icon');
    // condition icon 2
    this.conditionIcon2 = document.getElementById('condition-icon2');
    // high today
    this.highTemp = document.getElementById('high-temp');
    // low today
    this.lowTemp = document.getElementById('low-temp');
    // latitude 
    this.latitude = document.getElementById('latitude');
    // longitude 
    this.longitude = document.getElementById('longitude');

    // AQI PM2.5
    this.pm25 = document.getElementById('pm25');
    this.pm10 = document.getElementById('pm10');

    // rain 
    this.rain = document.getElementById('rainChance');
    // sunrise
    this.sunrise = document.getElementById('sunrise');
    this.sunset = document.getElementById('sunset');
    // wind speed
    this.windSpeed = document.getElementById('windSpeed');
    // wind direcn
    this.windDirecn = document.getElementById('windDirecn');
    // Visibilty
    this.visibility = document.getElementById('visibility');
    this.visibilityMiles = document.getElementById('visibility-miles');
    // humidity
    this.humidity = document.getElementById('humidity');
    // uv
    this.uv = document.getElementById('uv');

    // temprature 3
    this.forecastTemp = document.getElementById('temprature3');

    this.forecastTime = document.querySelector('.forecastTime');

    this.conditionIcon3 = document.getElementById('condition-icon3');

    this.condition3 = document.getElementById('feelslike3');

    this.feelsLike3 = document.getElementById('feelslike3');

 

  }
  paint(weather) {
    // Location
    this.location.textContent = weather.location.name;
    // Location 2
    this.location2.textContent = weather.location.name;
    // country
    this.country.textContent = weather.location.country;
    //region
    this.region.textContent = weather.location.region;

    // time
    const vidSrc=document.getElementById('myVideo');

    var vidTime=self.getTime(weather);
    if(vidTime>=19 || vidTime<=5 ){
      vidSrc.innerHTML= `<source  src="./img/night.mp4" type="video/mp4">`;
      console.log('night');
      console.log(vidTime);
    }else{
      vidSrc.innerHTML= `<source  src="./img/sunny.mp4" type="video/mp4">`;
      console.log('day');
      console.log(vidTime);

    }




    // temprature
    this.temprature.forEach(function (temp) {
      temp.textContent = `${weather.current.temp_c}°`;
    })

    // feels like
    this.feelsLike.textContent = weather.current.feelslike_c;
    // condition
    this.condition.forEach(function (cond) {
      cond.textContent = weather.current.condition.text;
    })
    // condition icon
    this.conditionIcon.src = weather.current.condition.icon;
    // condition icon
    this.conditionIcon2.src = weather.current.condition.icon;
    // high today
    this.highTemp.innerHTML = `H: ${weather.forecast.forecastday[0].day.maxtemp_c}`;
    // low today
    this.lowTemp.innerHTML = `L: ${weather.forecast.forecastday[0].day.mintemp_c}`;

    // latitude
    this.latitude.innerHTML = `Lat: ${weather.location.lat}`;

    // longitude
    this.longitude.innerHTML = `Lat: ${weather.location.lon}`;

    // AQI PM2.5
    var roundOff = weather.current.air_quality.pm2_5;
    roundOff = roundOff.toFixed(2);
    this.pm25.innerHTML = roundOff;
    // AQI PM10
    var roundOff = weather.current.air_quality.pm10;
    roundOff = roundOff.toFixed(2);

    this.pm10.innerHTML = roundOff;
    // rain
    this.rain.textContent = `${weather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    // Sunrise
    this.sunrise.textContent = `${weather.forecast.forecastday[0].astro.sunrise}`;
    this.sunset.textContent = `Sunset: ${weather.forecast.forecastday[0].astro.sunset}`;
    // wind
    this.windSpeed.textContent = `Wind Speed: ${weather.current.wind_kph} Km/h`;
    // wind direcn
    this.windDirecn.textContent = `Direction: ${weather.current.wind_dir}`;
    // visibility
    this.visibility.textContent = `${weather.current.vis_km} Km`;
    // visibility miles
    this.visibilityMiles.textContent = `${weather.current.vis_miles} Miles`;
    // humidity
    this.humidity.textContent = `${weather.current.humidity}%`;
    // uv
    this.uv.textContent = `UV: ${weather.current.uv}`;

  }

  forecast(weather) {
    document.querySelector('.forecast').innerHTML='';
    var time = self.getTime(weather);
    let count = 0;
    time = time - 1;


    for (let i = 0; i <= 5; i++) {
      time = time + 1;
      // console.log(time);

      if (time <= 23) {
        self.forecastBox(weather, 0, time);
      }
      else {
        self.forecastBox(weather, 1, count);
        count++;
      }

    }






  }
  forecastBox(weather, num, time) {
    console.log(weather);
    const conditionIcon3 = weather.forecast.forecastday[num].hour[(time)].condition.icon;
    const condition3 = weather.forecast.forecastday[num].hour[(time)].condition.text;
    const feelsLike3 = weather.forecast.forecastday[num].hour[(time)].feelslike_c;
    const forecastTime = weather.forecast.forecastday[num].hour[(time)].time;

    const forecastTemp = weather.forecast.forecastday[0].hour[(time)].temp_c;
    // console.log(conditionIcon3,condition3,feelsLike3,forecastTime,forecastTemp);
    // getting time

    var time = forecastTime;
    // console.log(time);
    time = time.substring(10)
    let temp = `${time}`;
    temp = temp.slice(0, -2);
    var num2 = parseInt(temp);
    let value;
    if (num2 >= 12) {
      value = `${num2 - 12} PM`;
    } else {
      value = `${num2} AM`;
    }
 
    if (num2 === 0) {
      num2 = 12;
      value = `${num2} AM`;
    }
    var timeNow=self.getTime(weather);
    if(num2===timeNow){
      value='Now';
    }
     

    document.querySelector('.forecast').innerHTML += `       <div class="forecast-box">
        <p class="forecastTime">${value}</p>
        <div class="forecast-flex">
          <div>
            <p id="temprature3">${forecastTemp}°</p>
          </div>
          <div>
            <img id="condition-icon3" src="${conditionIcon3}" alt="">
          </div>
        </div>
        <p id="condition3">${condition3}</p>
        <p id="feelslike3">Feels Like: ${feelsLike3}°</p>
      </div>`
  }

  getTime(weather) {
    var time = weather.location.localtime;
    time = time.substring(10)
    let num = `${time}`;
    num = num.slice(0, -2);
    var num2 = parseInt(num);
    if (num2 >= 12) {
      this.time.textContent = `${time} PM`;
    } else {
      this.time.textContent = `${time} AM`;
    }

    return num2;

  }

}
const self = new UI;

