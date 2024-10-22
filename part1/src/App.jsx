const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} exercise={props.exercises[0]} />
      <Part part={props.parts[1]} exercise={props.exercises[1]} />
      <Part part={props.parts[2]} exercise={props.exercises[2]} />
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of excercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  const parts = [part1, part2, part3]
  const exercises = [10, 7, 14]
  
  return (
    <div>
      <Header title={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App