const style = {
  marginTop: '2rem'
}

const CountriesList = ({ countries, setSearch }) =>
(
  <table style={ style }>
    <tbody>
      {countries.map((country, i) => (
        <tr key={country.cioc || i}>
          <td>{country.name.common}</td>
          <td>
            {/* <button className="btn-more" onClick={ () => console.log(`Hola desde ${country.name.common}`)}> */}
            <button className="btn-more" onClick={ () => setSearch(country.name.common) }>
              More about 
              <img src={country.flags.svg} alt={`${country.name.common} flag`} height="15px"/>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CountriesList;