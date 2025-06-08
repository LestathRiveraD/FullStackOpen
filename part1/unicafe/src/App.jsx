import { useState } from 'react'

const SectionTitle = ({name}) => <h1>{name}</h1>

const Button = ({onClick, name}) => <button onClick={onClick}>{name}</button>

const Statistics = (props) => {
  console.log("========Statistics component========")
  console.log("Statistics. Received feedback: ", props.feedback)
  console.log("Good: ", props.feedback.good)
  console.log("Neutral: ", props.feedback.neutral)
  console.log("Bad: ", props.feedback.bad)

  const good = props.feedback.good
  const neutral = props.feedback.neutral
  const bad = props.feedback.bad
  const total = good + neutral + bad
  let average
  let positive

  if (total === 0)
  {
    average = 0
    positive = 0
  }
  else
  {
    average = (good - bad) / total
    positive = (good / total) * 100
  }
  
  return (

    <div>
      <SectionTitle name={"statistics"}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const GiveFeedback = (props) => {
  return (
    <div>
      <SectionTitle name={"give feedback"}/>
      <Button onClick={props.onClick.good} name={"good"}/>
      <Button onClick={props.onClick.neutral} name={"neutral"}/>
      <Button onClick={props.onClick.bad} name={"bad"}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const handleButtonPress = {
    good: handleGood,
    neutral: handleNeutral,
    bad: handleBad
  }

  return (
    <div>
      <GiveFeedback onClick={handleButtonPress}/>
      <Statistics feedback={{good: good, neutral: neutral, bad: bad}}/>
    </div>
  )
}

export default App