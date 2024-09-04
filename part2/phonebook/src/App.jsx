import { useState, useEffect } from 'react';
import personService from './services/persons';
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
    // console.log('from effect');
    
    personService.getAll()
    .then(persons => {
      // console.log(persons);
      setPersons(persons);
    })

  },[])

  // console.log('render', persons.length, ' persons.');     // checking rendering
  
  const checkExists = () => {
    const onName = persons.filter(p => p.name.toLowerCase() === newName.trim().toLowerCase());
    const onNumber = persons.filter(p => p.number.toLowerCase() === newNumber.trim().toLowerCase());
    console.log(onName, onNumber);

    if (onName.length === 0 && onNumber.length === 0) return 0;       // create
    if (onName.length === 0 && onNumber.length !== 0) return 1;       // number already registered
    if (onName.length !== 0 ) {
      if (onName[0].number === newNumber ) return 2;                     // are U trolling me?
      return 3;                                                       // patch number
    }
  }

  const addNewPerson = (e) => {
    e.preventDefault();
    
    const checked = checkExists();
    console.log(checked);
    if ( checked === 1 ) {
      resetForm();
      return alert(`${ newNumber.trim() } is already registered in the phonebook.`);
    }
    
    if ( checked === 2) {
      resetForm();
      return alert(`Are U trolling me? ${ newNumber } already belongs to ${ newName }`);
    }

    if ( checked === 0) { 
      const newPerson = { name: newName.trim(), number: newNumber.trim() }
      
      personService.create(newPerson)
      .then(returnedPerson => {
        // console.log(returnedPerson);
        setPersons(persons.concat(returnedPerson));
        resetForm();
      }) 
      return;
    }
    // implement number patchinig axios.put
  }

  const deletePerson = id => {
    const [ who ] = persons.filter(p => p.id === id);
    // console.log(who)
    if (confirm(`Do you want to remove ${who.name}?`)) {
      // console.log(`We must remove your presence ${id}...`);
      personService.remove(id)
      .then(removedPerson => {
        // console.log(removedPerson);
        setPersons(persons.filter(p => p.id !== removedPerson.id))
      })
    } else {
      return null;
    }
  }

  const handlePersonChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const handleSearchChange = (e) => setNewSearch(e.target.value.toLowerCase());
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newSearch));
  const resetForm = () => { setNewNumber(''); setNewName('') }

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
      <Persons persons={ filteredPersons } deletePerson={ deletePerson }/>
    </main>
  )
}

export default App;