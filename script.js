let city;
const apiKey = "2d3e1b5d6159df5ec165554cb9bf0ffd";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const searchForm = document.querySelector('#inputSearch');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    city = document.querySelector('.search').value.toLowerCase();
    cityUrl = apiUrl + `&q=${city}`;
    checkWeather();
})

async function checkWeather() {
    const response = await fetch (cityUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML =  data.name;
    document.querySelector('.temp').innerHTML =  data.main.temp;
    document.querySelector('.humidity').innerHTML =  data.main.humidity;
    document.querySelector('.wind').innerHTML =  data.wind.speed;

    const img = data.weather[0].main;
    const imgLower = img.toLowerCase();
    console.log(imgLower);

    document.querySelector('.img').setAttribute('src', `images/${imgLower}.png`);

}
