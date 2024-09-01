// Header Component
const Header = ({ name }) => <h1>{ name }</h1>;

// Part Component
const Part = ({ part }) => <p>{ part.name } { part.exercises }</p>;

// Content Component
const Content = ({ parts }) => 
  <>{ parts.map(part => <Part key={ part.id } part={ part }/>) }</>;

// Total Component
const Total = ({ parts }) =>
  <strong>Number of exercises { parts.reduce((a, b) => a + b.exercises, 0) }</strong>;

// Course Component
const Course = ({ course }) =>
  (<>
    <Header name={ course.name }/>
    <Content parts={ course.parts }/>
    <Total parts={ course.parts }/>
  </>);

export default Course;
