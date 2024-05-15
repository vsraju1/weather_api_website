
import React, { useState } from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import CurrentWheather from '../../Components/CurrentWheather/CurrentWheather';
import Forecast from '../../Components/Forecast/Forecast';

import './Home.css'

const Home = () => {
  const [currentwheather, setCurrentWheather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentwheatherfetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7d0458209e9454e04e9e89ce388feaa6&units=metric`)
    const forecastfetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7d0458209e9454e04e9e89ce388feaa6&units=metric`)

    Promise.all([currentwheatherfetch, forecastfetch])
    .then(async (response) => {
      const wheatherResopnse = await response[0].json();
      const forecastResopnse = await response[1].json();

      setCurrentWheather({city: searchData.label, ...wheatherResopnse})
      setCurrentForecast({city: searchData.label, ...forecastResopnse})
      
    })
    .catch((err) => {
      console.log(err)
    })
  }
  console.log(currentwheather);
  console.log(currentForecast)


  return (
    <div className='home'>
        <Navbar onSearchChange={handleOnSearchChange} />
        {currentwheather && <CurrentWheather data={currentwheather} />}
        {currentForecast && <Forecast  data={currentForecast}/>}
    </div>
  )
}

export default Home