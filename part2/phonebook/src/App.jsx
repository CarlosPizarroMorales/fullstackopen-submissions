import { useState, useEffect } from 'react';
import axios from 'axios';
import Persons from './components/Persons';
import Search from './components/Search';
import Form from './components/Form'
import './App.css';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('add a name...');
  const [ newNumber, setNewNumber ] = useState('add a number...');
  const [ newSearch, setNewSearch ] = useState('');

  useEffect(()=> {
    console.log('from effect');
    axios
      .get('http://localhost:3001/persons')
      .then(r => {
        console.log(r.data);
        setPersons(r.data);
      })
  },[])

  console.log('render', persons.length, ' persons.');     // checking rendering
  
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

    const newPerson = { name: newName.trim(), number: newNumber.trim() }

    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => response.data)
      .then(returnedPerson => {
        console.log(returnedPerson);
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      })
  }

  const handlePersonChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleSearchChange = (e) => setNewSearch(e.target.value.toLowerCase());
  // const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch));
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