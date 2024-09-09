const style = {
  height: '300px'
}

const Country = ({ country }) =>
(
  <main className="country">
    {/* <em className="work-in-progress">{ `View in progress for ${country.name.common}...`}</em> */}
    <h1 className="">{ country.name.common }</h1>
    <p>{ `Capital: ${country.capital}` }</p>
    <p>{ `Area: ${country.area}` }</p>
    <p>Languages:</p>
    <ul>
      { Object.values(country.languages).map((l, i) => <li key={ i }>{ l }</li>) }
    </ul>
    <img src={ country.flags.svg } alt={ country.flags.alt } style={{ style }}/>
  </main>
)

export default Country;