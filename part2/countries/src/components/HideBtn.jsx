import { useState } from "react"

function HideBtn({name, onClick}) {
    return <div>{name} <button onClick={onClick}>Show</button></div>
}

export default HideBtn