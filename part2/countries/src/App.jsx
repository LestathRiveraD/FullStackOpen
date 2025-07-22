import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Message from './components/Message'

function App() {
    // State
    const [allCountries, setAllCountries] = useState(null) 
    const [filter, setFilter] = useState('')
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
    const handleFilter = event => setFilter(event.target.value.toLowerCase()) 

    // UI
    return (
        <div>
            find countries <input onChange={handleFilter} />
            <Message filter={filter} countries={allCountries}/>
        </div>
    )
}

export default App
