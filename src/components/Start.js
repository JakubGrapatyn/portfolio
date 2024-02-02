import React, { useState } from 'react'


const api = {
    key: "85d2ecbfd177c526d331f3827b5079e9",
    base : "https:api.openweathermap.org/data/2.5/"
}

function Start() {
    const [search, setSearch] = useState("");

    const [weather, setWeather] = useState({});
    
    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
            setWeather(result);
        })
    }
  return (
    <div className='pogoda'>
        <header className='app-header' >
            
            <h1 >Aplikacja pogodowa</h1><br></br>

            <div ><input 
            type='text'
            placeholder='Wyszukaj miasto...'
            onChange={(e)=> setSearch(e.target.value)}
            ></input>
            <button onClick={searchPressed}> Wyszukaj </button>

            {typeof weather.main !==`undefined`?(
            <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
            </div>
            ):("")}
            
           


                       
          </div>
        </header>
    </div>
  )
}

export default Start