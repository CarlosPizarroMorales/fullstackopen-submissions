const style = {
  marginTop: '2rem'
}

const CountriesList = ({ countries }) =>
(
  <table style={ style }>
    <thead>
      <tr>
        <th>Nombre común ó</th>
        <th>Nombre oficial</th>
        <th>Detalle</th>
      </tr>
    </thead>
    <tbody>
      {countries.map((country, i) => (
        <tr key={country.cioc || i}>
          <td>{country.name.common}</td>
          <td>{country.name.official}</td>
          <td>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              height="20px"
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CountriesList;