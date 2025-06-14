import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Numbers from './components/Numbers'
import axios from 'axios'

const App = () => {
  // State of the application
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  // Fetch data
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
          setPersons(response.data)
      })
  }, [])

  // Callback funcions
  const handleNewName = event => setNewName(event.target.value)
  const handleNewPhone = event => setNewPhone(event.target.value)
  const handleFilter = (event) => setFilter(event.target.value.toLowerCase())
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

  // UI
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />

      <h2>add new</h2>
      <Add addNewNote={addNewNote} newName={newName} handleNewName={handleNewName} newPhone={newPhone} handleNewPhone={handleNewPhone}/>

      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App