import React, { useState } from 'react';
import './css/app.css';
import Main from './components/main/Main';
import Header from './components/header/header';

function App() {

  const [wheather, setWheather] = useState({
    temperature: 10,
    pressure: 30,
    wind: 2
  })
  
  
  let url = ''

  const changeWheather = (city) =>{
    setWheather(
      {...wheather,
      city: city
    })
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dac65c73e108f39d417fc2b14312aeb5`
  }

  const fetchData =  async () => {
    const resalt =  await fetch(url)
    const data = await resalt.json('')
    console.log(data)
    setWheather({
      city: data.name,
      temperature: Math.floor(data.main.temp - 273),
      pressure: data.main.pressure,
      wind: data.wind.speed
    })
  }

  return (
    <div className="wrapp">
      <div className='container'>
        <Header changeWheather = {changeWheather} data = {fetchData}/>
        <Main wheatherInfo = {wheather}/>
      </div>
    </div>
  );
}

export default App;
