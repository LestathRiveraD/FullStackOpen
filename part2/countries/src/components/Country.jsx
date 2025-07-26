import { useState } from "react"
import HideBtn from "./HideBtn"

function Country({country}) {
    const [show, setShow] = useState(false)

    const handleHide = () => setShow(!show)

    return <div>
        <HideBtn name={country.name.common} onClick={handleHide} />
        {
            show && 
            (
                <div>
                    <h2>{country.name.common}</h2>
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
            )
        }
    </div>
}

export default Country