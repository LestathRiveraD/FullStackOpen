import CountryStats from "./CountryStats"
import HideBtn from "./HideBtn"
import Weather from "./Weather"

function Message ({countries}) {
    let length = countries.length
    if (length === 0)
        return <div>No countries found</div>
    else if (length === 1)
        return <div>
            <div><CountryStats country={countries[0]}/></div>
            <Weather city={countries[0].capital} />
        </div>
    else if (length > 1 && length <= 10)
    {
        return <div>
                {countries.map(country => <div key={country.cca2}>{country.name.common} <HideBtn country={country}/></div>)}
            </div>
    }

    else if (length > 10)
        return <div>Too many matches, please specify another filter</div>
    else
        return <div>Something went wrong.</div>
}

export default Message