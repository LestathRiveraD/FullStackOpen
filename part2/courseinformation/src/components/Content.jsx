const Content = ({parts}) => {
    const total = parts.reduce((res, part) => {
        return res + part.exercises
    }, 0)

    return (
        <div>
            {
                parts.map((part) => {
                    return <p key={part.id}>{part.name} {part.exercises}</p>
                })
            }
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Content