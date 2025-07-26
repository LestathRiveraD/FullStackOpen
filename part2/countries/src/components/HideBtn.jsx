import { useState } from "react"
import CountryStats from "./CountryStats"

function HideBtn({country}) {
    const [show, setShow] = useState("Hide")

    const handleBtn = () => {
        if (show === "Show")
            setShow("Hide")
        else
            setShow("Show")
    }

    if (show)
        return <>
            <button onClick={handleBtn}>{show}</button>

            { show === "Show" && <div>
                <CountryStats country={country}/>    
            </div>}
        </>
}

export default HideBtn