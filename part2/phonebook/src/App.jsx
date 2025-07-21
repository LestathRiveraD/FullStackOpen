import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Add from './components/Add'
import Numbers from './components/Numbers'
import phonebook from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  // State of the application
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

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
    const personFound = persons.find(person => person.name === newName)

    if (personFound)
    {
      if(!window.confirm(`${personFound.name} is already added to phonebook, replace the old number with a new one?`))
        return

      let newEntry = {...personFound, number: newPhone}

      console.log("Helloooo")
      phonebook.modifyEntry(newEntry.id, newEntry).then(res => {
        console.log("Put Successful. Response: ", res)
        const response = phonebook.getAll()
        response.then((res) => setPersons(res))
        .then(() => {
          setMessage(`${personFound.name}'s phonenumber modified to ${newPhone}`)
        })
      })
      .catch(error => {
        console.log("Found")
        setError(true)
        setMessage(`Error. ${personFound.name} was already removed from phonebook`)
        setTimeout(() => {
          setError(null)
          setMessage(null)
        }, 5000)
      })
    }
    else
    {
      let newEntry = {name: newName, number: newPhone}
      phonebook.addEntry(newEntry).then(res => {
        setPersons(persons.concat({...newEntry, id: res.data.id}))
      })
      .then(() => {
        setMessage(`${newName} added successfully!`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
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
      <Notification message={message} error={error} />

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