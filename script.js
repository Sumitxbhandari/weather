document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '54416a8f07cc4b42993140604240210'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            const { name, region, country } = data.location;
            const { temp_c, humidity, condition } = data.current;

            weatherResult.innerHTML = `
                <h2>Weather in ${name}, ${region}, ${country}</h2>
                <p>Temperature: ${temp_c} °C</p>
                <p>Humidity: ${humidity}%</p>
                <p>${condition.text}</p>
                <img src="${condition.icon}" alt="weather">
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerText = error.message;
        });
});
