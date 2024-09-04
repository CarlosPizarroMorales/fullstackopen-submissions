import Person from './Person'

const Persons = ({ persons, deletePerson }) =>
  (
    <table>
      <thead>
        <tr><th>Name</th><th>Number</th><th>DELETE</th></tr>
      </thead>
      <tbody>
        { persons.map(person => <Person key={ person.id } 
                                        person={ person } 
                                        deletePerson={ deletePerson }  />) }
      </tbody>
    </table>
  );

  export default Persons;