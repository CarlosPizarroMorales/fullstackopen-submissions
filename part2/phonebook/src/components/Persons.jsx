import Person from './Person'

const Persons = ({ persons }) =>
  (
    <table>
      <thead>
        <tr><th>Name</th><th>Number</th></tr>
      </thead>
      <tbody>
        { persons.map(person => <Person key={ person.id } person={ person }/>) }
      </tbody>
    </table>
  );

  export default Persons;