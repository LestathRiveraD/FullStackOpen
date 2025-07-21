import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => axios.get(url).then(res => res.data)

const addEntry = (newObject) => {
    const request = axios.post(url, newObject)
    return request
}

const deleteEntry = (id) => {
    return axios.delete(`${url}/${id}`)
}

const modifyEntry = (id, newObject) => {
    return axios.put(`${url}/${id}`, newObject)
}

export default {getAll, deleteEntry, addEntry, modifyEntry}