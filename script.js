document.getElementById('getWeather').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '54416a8f07cc4b42993140604240210'; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const { name, region, country } = data.location;
    const { temp_c, humidity, condition } = data.current;

    weatherResult.innerHTML = `
        <h2>Weather in ${name}, ${region}, ${country}</h2>
        <p>Temperature: ${temp_c} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${condition.text}</p>
        <img src="${condition.icon}" alt="${condition.text}">
    `;
}
