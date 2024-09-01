import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => 
  <button onClick={ handleClick }>{ text }</button>

const Statistics = ({ good, bad, neutral }) => {
  return (
    (good || bad || neutral) ?
    <>
      <div className="statistics">
        <p> 😀 { good }</p>
        <p> 😐 { neutral }</p>
        <p> 😠 { bad }</p>
      </div>
      <div className="left">
        <p> All: { good + neutral + bad }</p>
        <p> Avg: { ((good * 1 + neutral * 0 + bad * -1) / ( good + neutral + bad || 1 )).toFixed(2) }</p>
        <p> Positive: { (good / ( good + bad + neutral || 1 ) * 100).toFixed(2) }%</p>
      </div>
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
