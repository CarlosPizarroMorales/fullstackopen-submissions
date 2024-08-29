// Components return expressions. With f(x)=> it is cleaner:
const Header = ({ title }) => (<h1>{ title }</h1>);

const Total = ({ total }) => 
  (<p>Total number of exercises is: { total.reduce((a, b) => a+ b.exercises, 0) }.</p>);

const Part = (part) => {
  console.log(part);
  return (<p>{ part.name } having { part.exercise } exercises.</p>)
}

const Content = ({ content }) => {
  console.log(content);
  return (
    <>
      <Part name={ content[0].name } exercise={ content[0].exercises }/>
      <Part name={ content[1].name } exercise={ content[1].exercises }/>
      <Part name={ content[2].name } exercise={ content[2].exercises }/>
    </>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
      // here I'm passing an object named "content" to <Content/> component.
      // Whatever the name of the prop defined as parameter, it will contain
      // "content" as property. If you want to avoid typing props.content.part1...
      // you must use object destructuring in the component parameter ({ content })
    <main>
      <Header title={ course }/>
      <Content content={ parts }/>
      <Total total={ parts }/>
    </main>
  )
}

export default App