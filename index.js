const container = document.querySelector(".container")
const button = document.querySelector(".search-box button")
const weather = document.querySelector(".weather-box")
const details = document.querySelector(".weather-details")
const err = document.querySelector(".no-img")

button.addEventListener('click',function hello()
{
    const API = '57565d36afb58e357137d1b74b5b7992'
    const city = document.querySelector(".search-box input").value

    if(city=='')
        return;

       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`).then(response =>response.json()).then(json =>
    {

        if(json.cod=='404')
        {
            container.style.height='400px'
            weather.classList.remove('activ')
            details.classList.remove('activ')
            err.classList.add('activ')
            return;
        }
            container.style.height='560px'
            weather.classList.add('activ')
            details.classList.add('activ')
            err.classList.remove('activ')

        const img = document.querySelector(".weather-box img")
        const temp = document.querySelector(".weather-box .temp")
        const desc = document.querySelector(".weather-box .desc")
        const humidity = document.querySelector(".weather-box .humidity span")
        const wind = document.querySelector(".weather-box .wind span")

        switch (json.weather[0].main) {
            case 'Clear':
                img.src = 'image/clear.png'
                weather.style.transform="translateY(0%)"
                weather.style.transform="transform 1s ease"
                break;
            case 'Rain':
                img.src = 'image/rain.png'
                break;
            case 'Snow':
                img.src = 'image/snow.png'
                break;
            case 'Clouds':
                img.src = 'image/cloud.png'
                break;
            case 'Mist':
                img.src = 'image/mist.png'
                break;
            case 'Haze':
                img.src = 'image/mist.png'
                break;
            default:
                img.src = 'image/cloud.png'
                
        }
        temp.innerHTML = `${parseInt(json.main.temp)}°C`
        desc.innerHTML = `${json.weather[0].description}`
        humidity.innerHTML = `${json.main.humidity}%`
        wind.innerHTML = `${parseInt(json.wind.speed)}km/s`

    }
    )
})
var wage = document.getElementById("ide");
wage.addEventListener("keydown", function (e) {
    if (e.code === "Enter") { 
       hello()
    }
});
