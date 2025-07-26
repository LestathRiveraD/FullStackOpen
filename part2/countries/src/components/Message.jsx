import Country from "./Country"

function Message ({countries}) {
    let length = countries.length
    if (length === 0)
        return <div>No countries found</div>
    else if (length === 1)
        return <div><Country key={countries[0].cca2} country={countries[0]} /></div>
    else if (length > 1 && length <= 10)
        return <div>{countries.map(country => <Country key={country.cca2} country={country} />)}</div>
    else if (length > 10)
        return <div>Too many matches, please specify another filter</div>
    else
        return <div>Something went wrong.</div>
}

export default Message


/*
Final version:
if (length === 1)
{
    <CountryStats />
    <Weather />
}
if (length > 1 && length <= 10)
{
    <HideBtn />
    <CountryStats />
}

*/