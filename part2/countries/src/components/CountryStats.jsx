function CountryStats({ country, hide }) {


    return <div>
        <div><h2>{country.name.common}</h2></div>

        <div>Capital {country.capital}</div>
        <div>Area {country.area} km^2</div>
        <h3>Languages</h3>
        {
            <ul>
                {Object.values(country.languages).map((lang, i) => <li key={i}>{lang}</li>)}
            </ul>
        }
        <img src={country.flags.svg} alt={country.flags.alt} height='300px' />
    </div>
}

export default CountryStats