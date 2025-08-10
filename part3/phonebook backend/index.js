const express = require('express')
const app = express()

app.use(express.json())

var data = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
  ]  

app.get('/info', (req, res) => {
    let d = new Date()
    let size = data.length
    res.send(`Phonebook has info por ${size} people <br><br> ${d}`)
})

app.get('/api/persons', (req, res) => {
    res.json(data)
})

app.get('/api/persons/:id', (req, res) => {
    const query = req.params.id
    let entry = data.find(entry => entry.id === query)

    if (entry)
        res.json(entry)
    else
        res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    data = data.filter(entry => entry.id !== id)

    res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
    const newEntry = req.body

    if(JSON.stringify(Object.keys(newEntry)) !== JSON.stringify(['name', 'number']))
    {
      console.log("{ error: 'invalid request format' }")      
      console.log(Object.keys(newEntry))      
      res.status(400).end()
      return
    }

    if(data.find(entry => newEntry.name === entry.name))
    {
      console.log("{ error: 'name must be unique' }")
      res.status(400).end()
      return
    }

    newEntry.id = Math.floor((Math.random() * 9999999999) + 1); 

    if(data.find(entry => newEntry.id === entry.id))
    {
      console.log("{ error: 'Unexpected error. Please try again.' }")
      res.status(422).end()
      return
    }

    console.log("POST ", newEntry)
    data.push(newEntry)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
})