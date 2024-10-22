const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
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
  const exercises = [10, 7, 14]
  
  return (
    <div>
      <Header title={course} />
      <Content part={part1} exercises={exercises[0]}/>
      <Content part={part2} exercises={exercises[1]}/>
      <Content part={part3} exercises={exercises[2]}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App