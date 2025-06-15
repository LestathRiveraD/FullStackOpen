const Numbers = ({persons, filter}) => {
    if (filter === '')
        return  (
            <div>
                {persons.map((person) => {
                    return <div key={person.name}>{person.name} {person.number}</div>
                })}
            </div>
        )

    return  (
        <div>
            {persons.map((person) => {
                if (person.name.toLowerCase().includes(filter))
                    return <div key={person.name}>{person.name} {person.number}</div>
            })}
        </div>
    )
}

export default Numbers