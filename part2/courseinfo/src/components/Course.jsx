// Header Component
const Header = ({ name }) => <h1>{ name }</h1>;

// Part Component
const Part = ({ part }) => <p>{ part.name } { part.exercises }</p>;

// Content Component
const Content = ({ parts }) => 
  <>{ parts.map(part => <Part key={ part.id } part={ part }/>) }</>;

// Total Component
// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

// Course Component
const Course = ({ course }) =>
  (<>
    <Header name={ course.name }/>
    <Content parts={ course.parts }/>
  </>);

export default Course;
