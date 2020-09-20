function openWeatherCall() {
    let temperatureDegree = document.querySelector('.temperature-degrees');
    let locationCity = document.querySelector('.city-name-display');
    let weatherIcon = document.querySelector('#icon');

    let city  = document.querySelector('#city-name').value;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33204e788cb30fb6f32da09cbc18f8ce`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temp} = data.main;
            const {name} = data;
            const {country} = data.sys;
            const {main} = data.weather[0];
            const {icon} = data.weather[0];
            // Alter DOM elements from API data
            temperatureDegree.textContent = (Math.round((Number(temp) - 273.15) * 9/5 + 32)) + " °F";
            locationCity.textContent = `${name}, ${country}`;
            weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" style="color:white;">`
        })
}

document.querySelector('#location-form').addEventListener('submit', (e) => {
    openWeatherCall();
    e.preventDefault();
})