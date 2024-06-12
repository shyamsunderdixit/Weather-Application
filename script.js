const apiKey = "974ac3c05bc1a77ee8ac34121a93b4ff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const waetherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        alert("Please enter correct city name");
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure;
    document.querySelector(".temp-max").innerHTML = data.main.temp_max + "ºC";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        waetherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        waetherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        waetherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        waetherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        waetherIcon.src = "images/mist.png"
    }

}

// console.log(data);

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

