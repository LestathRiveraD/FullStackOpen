import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Numbers from './components/Numbers'
import axios from 'axios'

import phonebook from './services/phonebook'

let render = 0

const App = () => {
  // State of the application
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  // Fetch data
  useEffect(() => {
    const response = phonebook.getAll()
    response.then((res) => setPersons(res))
  }, [])

  // Callback funcions
  const handleNewName = event => setNewName(event.target.value)
  const handleNewPhone = event => setNewPhone(event.target.value)
  const handleFilter = (event) => setFilter(event.target.value.toLowerCase())
  const addNewNumber = (event) => {
    event.preventDefault()
    const a = persons.find(person => person.name === newName)

    if (a)
    {
      alert(`${newName} is already in phonebook`)
      return
    }

    let newEntry = {name: newName, number: newPhone}
    axios.post('http://localhost:3001/persons', newEntry).then(res => {
      setPersons(persons.concat(newEntry))
    })

  }

  // UI
  return (
    <div>
      <h2>Libro telefónico</h2>
      <Filter handleFilter={handleFilter} />

      <h2>Añadir número</h2>
      <Add addNewNumber={addNewNumber} newName={newName} handleNewName={handleNewName} newPhone={newPhone} handleNewPhone={handleNewPhone}/>

      <h2>Números</h2>
      <Numbers persons={persons} filter={filter} />
    </div>
  )
}

export default App