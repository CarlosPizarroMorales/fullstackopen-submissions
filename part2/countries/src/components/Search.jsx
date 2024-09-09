const Search = ({ newSearch, handleNewSearch }) => 
  (
    <label htmlFor="search" className="search">Find countries: 
      <input type="search" value={ newSearch } onChange={ handleNewSearch } id="search"/>
    </label>
  )

export default Search;