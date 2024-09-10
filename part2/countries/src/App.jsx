import { useState, useEffect } from 'react'
import srv from './services/countries.js';
import Search from './components/Search';
import Countries from './components/Countries'
import './assets/loader.css'
import './assets/App.css'

function App() {
  // STATE
  const [ countries, setCountries ] = useState(null);
  const [ newSearch, setNewSearch ] = useState('');
  
  // USEEFFECT
  useEffect(() => {
    srv.getAll().then(countries => setCountries(countries))
  }, [])
  
  // PREVENT RENDERING NULLs
  // return loader while requesting data
  if (countries === null ) return <div className="loader"></div>;

  // UTILITIES
  const handleNewSearch = e => setNewSearch(e.target.value.toLowerCase());
  const filteredCountries = (() => {
    
    const search = newSearch.trim().toLowerCase();
    if (search === "") return [];
    
    const exactMatch = countries.find(c => c.name.common.toLowerCase() === search);
    if (exactMatch) return [exactMatch];

    return countries.filter(c => c.name.common.toLowerCase().includes(search));
  })();

  // RENDERING
  return (
    <>
      <Search newSearch={ newSearch } handleNewSearch={ handleNewSearch }/>
      <Countries countries={ filteredCountries } setSearch={ setNewSearch }/>
    </>
  )
}

export default App
