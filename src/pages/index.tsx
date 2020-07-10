import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';

import { Container } from './styles';

import './styles.css';

interface ResponseData {
  id: number;
  name: string;
  main: {
    temp: number;
  };
  sys: {
    country: string;
  }
  weather: {
    main: string; 
  }[];
}

const api = {
  key: "fd6117bea6d6a4c122b2000f425f8db5",
  base: "https://api.openweathermap.org/data/2.5/"
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<ResponseData>({} as ResponseData);
  const [city, setCity] = useState('');
 

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCity(value);
  }, []);

  const handleSubmit = useCallback( async(event: FormEvent) => {
    event.preventDefault();

    fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
    .then(result => result.json())
    .then(response => {
      console.log(response);
      setWeather(response);
      setCity('');
    });
   
  }, [city]);

  const formattedDate = useCallback((d: Date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }, []);


  return (
    <Container temp={typeof weather.main != "undefined" ? (weather.main.temp-273.15) : 0}>
      <main>
        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <input className="search-bar" name="city" type="text" placeholder="Enter your city" onChange={handleInputChange} />
          </form>
        </div>

        {(typeof weather.main != "undefined") ? (
            <div className="result">
              <div className="location">
                <h1>{weather.name}, {weather.sys.country}</h1>
                <span>{formattedDate(new Date())}</span>
              </div>
              
              <div className="temp">
                <h1>{(Math.round(weather.main.temp)-273.15).toFixed(1)}°C</h1>
                <h2>{weather.weather[0].main}</h2>
              </div>
            </div>
        ): ('')}
      </main>
    </Container>
  );
};

export default Weather;