// Components return expressions. With f(x)=> it is cleaner:
const Header = ({ title }) => (<h1>{ title }</h1>);

const Part = (part) => (<p>{ part.name } having { part.exercise } exercises.</p>);

const Total = ({ total }) => 
  (<p>Total number of exercises is: { total.reduce((a, b) => a+ b.exercises, 0) }.</p>);

// The part says (section a.some notes): An array of components is also a valid solution
// Building through iteration requires a key attribute just like in Vue
const Content = ({ content }) => 
  content.map((e, index) => <Part key={index} name={e.name} exercise={e.exercises} />);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React',    exercises: 10 },
      { name: 'Using props to pass data', exercises: 7  },
      { name: 'State of a component',     exercises: 14 }
    ]
  }

  return (
    <main>
      <Header title={ course.name }/>
      <Content content={ course.parts }/>
      <Total total={ course.parts }/>
    </main>
  )
}

export default App