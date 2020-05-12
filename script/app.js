const city = document.querySelector('.city');
const timeImage = document.querySelector('.details img');
const icon = document.querySelector('.icon img');
const weather = document.querySelector('.weather-data');
const card = document.querySelector('.card');

const updateUI = (data)=>{
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    if(data.dataWeather[0].IsDayTime){
        timeImage.setAttribute('src','./img/day.svg')
    }
    else{
        timeImage.setAttribute('src','./img/night.svg')
    }
    icon.setAttribute('src',`./img/icons/${data.dataWeather[0].WeatherIcon}.svg`);
    weather.innerHTML = `<div class="city-name"><h3>${data.dataCity[0].EnglishName}</h3></div>
    <div class="city-status"><h5>${data.dataWeather[0].WeatherText}</h5></div>
    <div class="city-status display-4"><span>${data.dataWeather[0].Temperature.Metric.Value}</span>&deg;C</div>`
}

city.addEventListener('submit',e =>{
    e.preventDefault();
    const place = city.search.value.trim();
    city.reset();

    getData(place).then((data)=>{
        updateUI(data);
    }).catch((error)=>{
        console.log(error);
    });
    
})