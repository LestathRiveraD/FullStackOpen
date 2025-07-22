function Message ({filter, countries}) {
    if (filter === '')
        return null

    let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

    if (filteredCountries.length > 10)
        return <div>Too many matches, specify another filter</div>
    
    else if (filteredCountries.length > 1)
        return <div>
            {
                filteredCountries.map(country => <div key={country.cca2}>{country.name.common}</div>) 
            }
        </div>
    else if (filteredCountries.length === 1)
    {
        let country = filteredCountries[0]
        let languages = Object.values(country.languages || {}) 
        return <div>
            <h1>{country.name.common}</h1>
            <div>Capital {country.capital}</div>
            <div>Area {country.area}</div>

            <h2>Languages</h2>
            <ul>
                {
                    languages.map((language, i) => <li key={i}>{language}</li>)
                }
            </ul>
            <img src={country.flags.svg} alt={country.flags.alt} height='200px'/>
        </div>
    }
    else
        return null
}

export default Message