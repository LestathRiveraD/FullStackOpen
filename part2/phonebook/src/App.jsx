import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const addNewNote = (event) => {
    event.preventDefault()
    const a = persons.find((person) => {
      return person.name === newName
    })

    if (a)
      alert(`${newName} is already in phonebook`)
    else
      setPersons(persons.concat({name: newName, number: newPhone}))

  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewNote}>
        <div>name: <input value={newName} onChange={handleNewName} /></div>
        <div>number: <input value={newPhone} onChange={handleNewPhone} /></div>        
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => {
          let name = person.name
          return <p key={name}>{name} {person.number}</p>
        })
      }
    </div>
  )
}

export default App