const temp = document.getElementById("temp");
const cityName = document.getElementById("cityName");
const weatherDesc = document.getElementById("weatherOverall");
const cityInput = document.getElementById("cityInput");

cityInput.addEventListener("click", () => {
    let cityOutput = prompt("Please enter city name");
    getWeather(cityOutput);
});

async function getWeather(city) {
    if (city != undefined) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=5bd5abb97bc2179e48cf30956785f560&units=metric');
            const weatherData = await response.json();
            cityName.textContent = weatherData.name;
            temp.textContent = weatherData.main.temp + ' C';
            weatherDesc.textContent = 'Looks like: ' + weatherData.weather[0].description;
        } catch (err) {
            cityName.textContent = "City not found";
            temp.textContent = "";
            weatherDesc.textContent = "";
        }
    }
    else {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Beijing&APPID=5bd5abb97bc2179e48cf30956785f560&units=metric');
        const weatherData = await response.json();
        cityName.textContent = weatherData.name;
        temp.textContent = weatherData.main.temp + ' C';
        weatherDesc.textContent = 'Looks like: ' + weatherData.weather[0].description;
    };
};

getWeather();