import { useState } from 'react';
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas' } ]);
  const [ newName, setNewName ] = useState('add new person...');

  const addNewPerson = (e) => {
    e.preventDefault();
    
    if (persons.some(p => p.name.toLowerCase() === newName.trim().toLowerCase())) {
      alert(`${ newName.trim() } already exists in the phonebook.`);
      setNewName('');
      return;
    }

    const newPerson = { name: newName.trim() }

    setPersons(persons.concat(newPerson));
    setNewName('');
  }

  const handlePersonChange = (e) => setNewName(e.target.value);

  return (
    <main>
      <h2>Phonebook</h2>
      <form onSubmit={ addNewPerson }>
        <label>Name: 
          <input value={ newName } onChange={ handlePersonChange } />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      { persons.map(person => <p key={ person.name }>{ person.name }</p>) }
    </main>
  )
}

export default App;