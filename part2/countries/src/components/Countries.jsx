import CountriesList from './CountriesList';
import Country from './Country';
import Notification from './Notification';

const Countries = ({ countries, setSearch }) => {
  if (countries.length === 0) return <Notification code="0" />
  if (countries.length > 10) return <Notification code="1" />
  if (countries.length === 1) return <Country country={ countries[0] } />
  return <CountriesList countries={ countries } setSearch={ setSearch }/>
} 

export default Countries;