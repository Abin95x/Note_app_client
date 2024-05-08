import React, { useState } from "react"
import "./Body.css"
import Notes from "../Notes/Notes"
import { addNote } from "../../api/noteApi"

const Body = () => {
  const [title, setTitle] = useState("")
  const [titleData, setTitleData] = useState("")
  const [content, setContent] = useState("")

  const handleInputClick = () => {
    setTitle(true)
  }

  const handleTitleInput = (e) => {
    const value = e.target.value
    if (value.trim() === "") {
      setTitleData("")
    } else {
      setTitleData(value)
    }
  }

  const handleContentInput = (e) => {
    const value = e.target.value
    if (value.trim() === "") {
      setContent("")
    } else {
      setContent(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (content === "") {
        alert("Fields can't be empty")
        return false
      }

      if (titleData === "") {
        alert("Fields can't be empty")
        return false
      }
      const res = await addNote(content, titleData)
      console.log(res.status)
      if (res.status === 200) {
        setTitle(false)
        setTitleData("")
        setContent("")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="body-div">
        <form onSubmit={handleSubmit}>
          <div className="div-input">
            <input
              onClick={handleInputClick}
              className="input"
              placeholder={title ? "Add title" : "Take a note..."}
              type="text"
              value={titleData}
              onChange={handleTitleInput}
            />
          </div>
          <div className="div-title">
            {title ? (
              <input
                onChange={handleContentInput}
                className="input"
                placeholder="Add note"
                type="text"
              />
            ) : null}
          </div>
          <div className="button-container">
            {title ? (
              <button type="submit" className="add-btn">
                Add
              </button>
            ) : (
              <div> </div>
            )}
            {title ? (
              <button
                onClick={() => {
                  setTitle(false)
                  setTitleData("")
                  setContent("")
                }}
                className="reset-btn"
              >
                Reset
              </button>
            ) : (
              <div> </div>
            )}
          </div>
        </form>
        <div className="div-notes">
          <Notes />
        </div>
      </div>
    </>
  )
}

export default Body
