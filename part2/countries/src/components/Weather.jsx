const Weather = ({ capital, weather }) => {
  console.log(weather, capital);
return (
  <section className="weather-artifact">
    <p>Weather in { capital }: { weather.weather[0].description }</p>
    <p>Temperature now: { weather.main.temp }° Celsius</p>
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
    <p>Wind speed: { weather.wind.speed } m/s</p>
  </section>
)}

export default Weather;