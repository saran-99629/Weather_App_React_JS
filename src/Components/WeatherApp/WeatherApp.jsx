import React from 'react'
import './WeatherApp.css'
import  search_icon from '../Asserts/search.png'
import  clear_icon from '../Asserts/clear.png'
import  cloud_icon from '../Asserts/cloud.png'
import  drizzle_icon from '../Asserts/drizzle.png'
import  humidity_icon from '../Asserts/humidity.png'
import  rain_icon from '../Asserts/rain.png'
import  snow_icon from '../Asserts/snow.png'
import  wind_icon from '../Asserts/wind.png'
const WeatherApp = () => {
    let api_key = '33e547a4eefacf23d16ee75ba7583d01';
    const search = async ()=>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url);
        let data =await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temprature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = data.wind.speed+ "km/h";
        temprature[0].innerHTML = data.main.temp+ "c";
        location[0].innerHTML = data.name;
    }
    return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" placeholder='search...' className="cityInput" />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24 c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default WeatherApp;