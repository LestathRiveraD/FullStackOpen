import axios from 'axios'

const url = 'https://phonebookbackend-9ajs.onrender.com/api/persons'

const getAll = () => axios.get(url).then(res => {
        console.log("Hello?")
        return res.data
    })

const addEntry = (newObject) => {
    const request = axios.post(url, newObject)
    return request
}

const deleteEntry = (id) => {
    return axios.delete(`${url}${id}`)
}

const modifyEntry = (id, newObject) => {
    return axios.put(`${url}${id}`, newObject)
}

export default {getAll, deleteEntry, addEntry, modifyEntry}