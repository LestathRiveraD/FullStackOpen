const Numbers = ({filtered}) => {
    
    return (
        <div>
            {filtered.map((person) => {
                let name = person.name
                return <p key={name}>{name} {person.number}</p>
            })}
        </div>
    )
}

export default Numbers