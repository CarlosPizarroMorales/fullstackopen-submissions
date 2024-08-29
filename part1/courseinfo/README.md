# React + Vite
- [React + Vite](#react--vite)
  - [Exercise 1.1](#exercise-11)
    - [Content component now:](#content-component-now)
    - [App component return now:](#app-component-return-now)
  - [Exercise 1.2](#exercise-12)
  - [Exercise 1.3](#exercise-13)
  - [Exercise 1.4](#exercise-14)
  - [Exercise 1.5](#exercise-15)


## Exercise 1.1

1. Create a new project:
   1. `npm create vite@latest courseinfo -- --template react`
2. Modify main.jsx as requested.
3. Modify App.jsx as requested.
4. Remove App.css, index.css and /assets
5. Starting from the following code base:
```jsx
const course = 'Half Stack application development';
const part1 = 'Fundamentals of React';
const exercises1 = 10;
const part2 = 'Using props to pass data';
const exercises2 = 7;
const part3 = 'State of a component';
const exercises3 = 14;

return (
<main>
  <h1>{ course }</h1>
  <p>
    { part1 } { exercises1 }
  </p>
  <p>
    { part2 } { exercises2 }
  </p>
  <p>
    { part3 } { exercises3 }
  </p>
  <p>Number of exercises { exercises1 + exercises2 + exercises3 }</p>
</main>
)
```
1. Divide the code above in three components:
   1. `Header`, will take care of rendering the name of the course.
   2. `Content`, will render the parts and their number of exercises, and
   3. `Total`, will render the total number of exercises.
2. The values still resides in App component. You should pass them as props.
3. Define the new components in `App.jsx`

### Content component now:
```jsx
const Content = ({ content }) => {
  console.log(content)
  return (
    <>
      <p>{ content.part1 } having { content.exercises1 } exercises.</p>
      <p>{ content.part2 } having { content.exercises2 } exercises.</p>
      <p>{ content.part3 } having { content.exercises3 } exercises.</p>
    </>
  )
}
```

### App component return now:
```jsx
return (
    // here I'm passing an object named "content" to <Content/> component.
    // Whatever the name of the prop defined as parameter, it will contain
    // "content" as property. If you want to avoid typing props.content.part1...
    // you must use object destructuring in the component parameter ({ content })
  <main>
    <Header course={ course }/>
    <Content content={{ part1, part2, part3, exercises1, exercises2, exercises3 }}/>
    <Total total={ exercises1 + exercises2 + exercises3 }/>
  </main>
)
```
---

## Exercise 1.2

1. Refactor `Content` component so instead of render all parts names and exercises:
   1. Renders three copies of a new `Part` component.
   2. Now `Part` should render each part name and exercises, one for each instance.

Code once the refactor is finished:
```jsx
const Part = (part) => {
  // without destructuring the component argument is always an Object that 
  // contains any value passed as props.
  console.log(part);
  return (<p>{ part.name } having { part.exercise } exercises.</p>)
}

const Content = ({ content }) => {
  console.log(content);
  return (
    // I can declare as many props as I want. All of them are passed as
    // properties of the argument object in the component definition.
    <>
      <Part name={ content.part1} exercise={ content.exercises1 }/>
      <Part name={ content.part2} exercise={ content.exercises2 }/>
      <Part name={ content.part3} exercise={ content.exercises3 }/>
    </>
  )
}
```

## Exercise 1.3

Modify the variable declarations as follow and then refactor the rest of the code so that it still works.

- Assume there are always three parts. No looping needed.
- Don't pass separate expressions. Just whole variables.

```jsx
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

## Exercise 1.4

Place the objects into an array and refactor the code.
```jsx
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
    <div>
      ...
    </div>
  )
}
```

- **NOTE 1:** it works the same as my previous solution, but the syntax is cleaner since I don't need to pass `<Total parts="{[part1, part2, part3]}"/>` anymore, so no refactor was needed. Yay💚!
- **NOTE 2:** iterables are the 🐐!

## Exercise 1.5

Another change to data, one-single object. Refactor as needed.
```jsx
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      ...
    </div>
  )
}
```

**NOTE 1**: Extracting the data was the only refactor needed:
```jsx
<main>
  <Header title={ course.name }/>
  <Content content={ course.parts }/>
  <Total total={ course.parts }/>
</main>
```
**NOTE 2**: Beautiful 😄.  
**NOTE 3**: REMEMBER 🧠 you cannot pass `Object`s as children but iterables (arrays at least) you can.
