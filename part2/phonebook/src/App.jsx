import { useState } from 'react';
import Persons from './components/Persons';
import Search from './components/Search';
import Form from './components/Form'
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [ newName, setNewName ] = useState('add a name...');
  const [ newNumber, setNewNumber ] = useState('add a number...');
  const [ newSearch, setNewSearch ] = useState('');

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
  const handleSearchChange = (e) => setNewSearch(e.target.value.toLowerCase());
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch));

  return (
    <main>
      <h2>Phonebook</h2>
      <Search newSearch={ newSearch } handleSearchChange={ handleSearchChange }/>
      <Form 
        newName={ newName }
        newNumber={ newNumber }
        addNewPerson={ addNewPerson }
        handleNumberChange={ handleNumberChange }
        handlePersonChange={ handlePersonChange }
      />
      <h2>Numbers</h2>
      <Persons persons={ filteredPersons }/>
    </main>
  )
}

export default App;