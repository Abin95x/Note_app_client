import axios from 'axios'

const baseURL = 'http://localhost:3000'

export const addNote = async (content,titleData) => {
    const data = await axios.post(`${baseURL}/addNote`, { content, titleData })
    return data
} 

export const getNotes = async () => {
    const data = await axios.get(`${baseURL}/getNotes`)
    return data
}

export const deleteNode = async (id) => {
    const data = await axios.delete(`${baseURL}/deleteNote?id=${id}`)
    return data
}