import { useState, useEffect } from 'react';
import Weather from './Weather'
import $ from '../services/countries'

// just to try object styles
const style = {
  height: '400px'
}

const Country = ({ country }) => {
  const [ weather, setWeather ] = useState(null);
  const where = `${country.capital[0]},${country.cca2}`;

  useEffect(() => {
    $.getWeather(where).then(w => {
      setWeather(w);
      console.dir(w);
    });
  },[])

  //utils
  const formattedArea = (area) =>
    new Intl.NumberFormat('de-DE').format(area);

  if (weather) return  (
    <main className="country content">
      <h1 className="">{ country.name.common }</h1>
      <section className="info">
        <section className="info text-content">
          <p>{ `Capital: ${ country.capital }` }</p>
          <p>{ `Area: ${ formattedArea(country.area) }` } kms<sup>2</sup></p>
          <p>Languages:
            { Object.values(country.languages).map((l, i) =>
            i === Object.values(country.languages).length - 1
              ? <span key={ i }> { l } </span>
              : <span key={ i }> { l } - </span>
            )}
          </p>
          <Weather capital={ country.capital[0] } weather={ weather }/>
        </section>
        <img src={ country.flags.svg } alt={ country.flags.alt } style={ style }/>
      </section>
    </main>
  )
}

export default Country