const Add = (props) => 
            <form onSubmit={props.addNewNumber}>
                <div>Name: <input value={props.newName} onChange={props.handleNewName} /></div>
                <div>Number: <input value={props.newPhone} onChange={props.handleNewPhone} /></div>        
                <div><button type="submit">add</button></div>
            </form>

export default Add