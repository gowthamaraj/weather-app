const key = 'Ayn5ngzSyhiA6Gu0NLlqMl2fbTVM29is';

//get city code
const getCity = async (city) =>{
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(baseURL+query);
    const dataCity = await response.json();
    return dataCity;
}

//get weather
const getWeather = async (code) =>{
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${code}?apikey=${key}`;
    const response = await fetch(baseURL+query);
    const dataWeather = await response.json();
    return dataWeather;
}

const getData = async (city) => {
    const dataCity = await getCity(city);
    const dataWeather = await getWeather(dataCity[0].Key);
    return {dataCity,dataWeather};
}