import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Message from './components/Message'

function App() {
    // State
    const [allCountries, setAllCountries] = useState(null) 
    const [filter, setFilter] = useState('')
    const [list, setList] = useState([])
    const url = "https://studies.cs.helsinki.fi/restcountries/api/all"

    // Fetch countries
    useEffect(() => {
        axios.get(url)
        .then(res => setAllCountries(res.data))
        .catch(error => console.log(`Fatal error: ${error}`))
    }, [])

    // Don't render if countries haven't been fetched
    if (!allCountries)
        return null

    // Handlers
    const handleFilter = event => {
        let newFilter = event.target.value.toLowerCase()
        setFilter(newFilter)
        if (newFilter === '')
            setList([])
        else
            setList(allCountries.filter(country => country.name.common.toLowerCase().includes(newFilter)))
    }

    // UI
    return (
        <div>
            find countries <input onChange={handleFilter} />
            <Message countries={list}/>
        </div>
    )
}

export default App
