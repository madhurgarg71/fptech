import React from "react"

export default function Droppable(props) {
  const drop = e => {
    e.preventDefault()
    const data = e.dataTransfer.getData("text/html")
    props.onDropSuccess(data)
  }

  const allowDrop = e => {
    e.preventDefault()
  }
  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      {props.children}
    </div>
  )
}