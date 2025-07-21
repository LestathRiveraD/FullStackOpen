const Notification = (props) => {
    if (props.message === null)
        return null

    const notificationStyle = {
        color: props.error ? "red" : "green",
        fontStyle: 'italic',
        fontSize: '24px',
        backgroundColor: 'lightGray',
        padding: '8px',
        marginTop: '20px',
        borderRadius: '8px',
    }
    return <div style={notificationStyle}>
        {props.message}
    </div>
}

export default Notification