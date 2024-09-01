import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => 
  <button onClick={ handleClick }>{ text }</button>;

const StatisticsLine = ({ title, value, tail }) => 
  <tr><td>{ title }</td><td>{ value }{tail}</td></tr>;

const Statistics = ({ good, bad, neutral }) => {
  return (
    (good || bad || neutral) ?
    <>
      <table>
        <thead><tr><th>Category</th><th>Value</th></tr></thead>
        <tbody>
          <StatisticsLine title="😀" value={ good }/>
          <StatisticsLine title="😐" value={ neutral }/>
          <StatisticsLine title="😠" value={ bad }/>
          <StatisticsLine title="All:" value={ good + neutral + bad } tail=" "/>
          <StatisticsLine title="Avg:" value={ ((good * 1 + neutral * 0 + bad * -1) / ( good + neutral + bad || 1 )).toFixed(2) } tail=" "/>
          <StatisticsLine title="Positive:" value={ (good / ( good + bad + neutral || 1 ) * 100).toFixed(2) } tail="%"/>
        </tbody>
      </table>
    </>
   : <p>Waiting for feedback...</p>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('It was good.');
    const updated = good + 1;
    setGood(updated);
  }
  const handleNeutralClick = () => {
    console.log('It was ok.');
    const updated = neutral + 1;
    setNeutral(updated);
  }
  const handleBadClick = () => {
    console.log('It was bad.');
    const updated = bad + 1;
    setBad(updated);
  }

  return (
    <>
      <img className="logo" src="https://evermade-unicafe-fi.s3.eu-north-1.amazonaws.com/wp-content/uploads/2023/01/16120326/Etusivun_nosto_1024px.jpg"/>
      <h1>Give us your feedback!</h1>
      <div className="buttons">
        <Button handleClick={ handleGoodClick } text="😀" title="The experience was GOOD!"/>
        <Button handleClick={ handleNeutralClick } text="😐" title="The experience was just ok."/>
        <Button handleClick={ handleBadClick } text="😠" title="The experience wasn't good."/>
      </div>
      <h1>Statistics</h1>
      <Statistics good={ good } bad={ bad } neutral={ neutral }/>
    </>
  )
}

export default App
