import { useState } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filtered, setFiltered] = useState(persons)

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
    {
      setPersons(persons.concat({name: newName, number: newPhone}))
      setFiltered(persons.concat({name: newName, number: newPhone}))
    }
  }
  
  const handleFilter = (event) => {
    let filt = event.target.value

    if (filt === '')
    {
      setFiltered(persons)
      return
    }
    
    const newPersons = persons.filter((person) => person.name.toLowerCase().includes(filt.toLowerCase()))
    setFiltered(newPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />

      <h2>add new</h2>
      <Add addNewNote={addNewNote} newName={newName} handleNewName={handleNewName} newPhone={newPhone} handleNewPhone={handleNewPhone}/>

      <h2>Numbers</h2>
      <Numbers filtered={filtered}/>
    </div>
  )
}

export default App