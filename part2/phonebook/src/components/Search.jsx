const Search = ({ newSearch, handleSearchChange }) => 
  (<label id="search">Search:
    <input type="text" value={ newSearch } onChange={ handleSearchChange }/>
   </label>);


export default Search;