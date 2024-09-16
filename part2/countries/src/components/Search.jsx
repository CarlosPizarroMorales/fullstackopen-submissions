const Search = ({ newSearch, handleNewSearch }) => 
  (
    <div className="search">
      <label htmlFor="search">Find countries</label>
      <input type="search" value={ newSearch } onChange={ handleNewSearch } id="search"/>
    </div>
  )

export default Search;