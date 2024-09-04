const Person = ({ person, deletePerson }) => 
<tr><td>🤠 { person.name }</td><td>📞 { person.number }</td><td onClick={ () => deletePerson(person.id) }>🗑️</td></tr>;


export default Person;