import { useState, useEffect } from 'react'
import srv from './services/countries.js';
import Search from './components/Search';
import Countries from './components/Countries'
import './assets/loader.css'
import './assets/App.css'

function App() {
  // STATE
  const [ countries, setCountries ] = useState(null);
  const [ newSearch, setNewSearch ] = useState(null);
  
  // USEEFFECT
  useEffect(() => {
    srv.getAll().then(countries => setCountries(countries))
  }, [])
  
  // PREVENT RENDERING NULLs
  // return loader while requesting data
  if (countries === null ) return <div className="loader"></div>;

  // UTILITIES
  const handleNewSearch = e => setNewSearch(e.target.value.toLowerCase());
  const filteredCountries = countries.filter(c => 
    c.name.common.toLowerCase().includes(newSearch) ||
    c.name.official.toLowerCase().includes(newSearch))

  // RENDERING
  return (
    <>
      <Search newSearch={ newSearch } handleNewSearch={ handleNewSearch }/>
      <Countries countries={ filteredCountries }/>
    </>
  )
}

export default App
