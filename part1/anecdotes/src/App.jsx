import { useState } from 'react'

function getIndexOfMax(arr) {
     if (arr.length === 0) {
       return -1; // Handle empty array case
     }
     return arr.reduce((maxIndex, currentValue, currentIndex, array) =>
       currentValue > array[maxIndex] ? currentIndex : maxIndex, 0
     );
}

const DisplayNote = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.note}</p>
      <p>Votes: {props.votes}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [best, setBest] = useState(0)

  const handleSelected = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))
  
  const handleVote = () => {
    let newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)

    let mostVoted = getIndexOfMax([...newVotes])
    setBest(mostVoted)
  }

  return (
    <div>
      <DisplayNote title={"Note of the day"} note={anecdotes[selected]} votes={votes[selected]}/>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleSelected}>Next quote</button>
      </div>

      <DisplayNote title={"Anecdote with most votes"} note={anecdotes[best]} votes={votes[best]}/>
    </div>
  )
}

export default App