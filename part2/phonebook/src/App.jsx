import { useState } from 'react';
import './App.css';
import Person from './components/Person';

const App = () => {
  const [ persons, setPersons ] = useState([ 
    { name: 'Arto Hellas', number: '040-123456', id: 1 } 
  ]);
  const [ newName, setNewName ] = useState('add a name...');
  const [ newNumber, setNewNumber ] = useState('add a number...');

  const checkExists = () => {
    return (
      persons.some(p => p.name.toLowerCase() === newName.trim().toLowerCase()) ||
      persons.some(p => p.number.toLowerCase() === newNumber.trim().toLowerCase())
    )
  }

  const addNewPerson = (e) => {
    e.preventDefault();
    
    if ( checkExists() ) {
      alert(`${ newName.trim() } or ${ newNumber.trim() } already exists in the phonebook.`);
      setNewName('');
      setNewNumber('');
      return;
    }

    const newPerson = { name: newName.trim(), number: newNumber.trim(), id: persons.length + 1 }
    
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  const handlePersonChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);

  return (
    <main>
      <h2>Phonebook</h2>
      <form onSubmit={ addNewPerson }>
        <label>Name: 
          <input value={ newName } onChange={ handlePersonChange } />
        </label>
        <label>Number: 
          <input value={ newNumber } onChange={ handleNumberChange } />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      { persons.map(person => <Person key={ person.id } person={ person }/>) }
    </main>
  )
}

export default App;