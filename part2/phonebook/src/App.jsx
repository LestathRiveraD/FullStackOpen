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
    phonebook.addEntry(newEntry).then(res => {
      setPersons(persons.concat({...newEntry, id: res.data.id}))
    })
  }
  const deleteNumber = (id) => {
    const personDelete = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${personDelete.name}?`))
    {
      phonebook.deleteEntry(id).then((res) => {
        const newPersons = persons.filter(person => person.id !== id)
        setPersons(newPersons)
      })
    }
  }

  // UI
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />

      <h2>Add number</h2>
      <Add addNewNumber={addNewNumber} newName={newName} handleNewName={handleNewName} newPhone={newPhone} handleNewPhone={handleNewPhone}/>

      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter} onClick={(id) => deleteNumber(id)}/>
    </div>
  )
}

export default App