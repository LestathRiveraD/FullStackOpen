const Numbers = ({persons, filter, onClick}) => {
    if (filter === '')
        return  (
            <div>
                {persons.map((person) => {
                    return <div key={person.id}>
                        {person.name} {person.number} <button onClick={() => onClick(person.id)}>Delete</button>
                    </div>
                })}
            </div>
        )

    return  (
        <div>
            {persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
                .map((person) => {
                    return <div key={person.id}>
                        {person.name} {person.number} <button onClick={() => onClick(person.id)}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default Numbers