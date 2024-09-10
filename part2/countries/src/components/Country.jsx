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
    <p>Languages: 
      { Object.values(country.languages).map((l, i) => 
      i === Object.values(country.languages).length - 1 
        ? <span key={ i }> { l } </span>
        : <span key={ i }> { l } - </span>
      )}
    </p>
    <img src={ country.flags.svg } alt={ country.flags.alt } style={ style }/>
  </main>
)

export default Country;