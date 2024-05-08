import React, { useEffect, useState } from "react"
import "./Notes.css"
import { getNotes, deleteNode } from "../../api/noteApi"

const Notes = () => {
  const [data, setData] = useState([])
  const [render, setRender] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const res = await getNotes()
      setData(res.data)
    }
    fetchData()
  }, [data])

  const handleDelete = async (id) => {
    console.log(id)
    const res = await deleteNode(id)
    if (res.status === 200) {
      if (render === true) {
        setRender(false)
      } else {
        setRender(true)
      }
    }
  }
  return (
    <>
      <div className="container">
        {data.map((item, i) => (
          <div className="notes" key={i}>
            <h3 className="title">{item.title}</h3>
            <p className="content">{item.content}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Notes
