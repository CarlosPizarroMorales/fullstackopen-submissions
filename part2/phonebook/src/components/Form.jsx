const Form = (props) => {
  const { 
    addNewPerson, 
    newName, 
    newNumber, 
    handlePersonChange, 
    handleNumberChange
  } = props;

  return (
    <form onSubmit={ addNewPerson }>
      <label>Name: 
        <input value={ newName } onChange={ handlePersonChange } />
      </label>
      <label>Number: 
        <input value={ newNumber } onChange={ handleNumberChange } />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
export default Form;