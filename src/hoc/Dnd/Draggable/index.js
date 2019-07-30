import React from "react"

export default function Draggable(props) {
  const drag = e => {
    e.dataTransfer.setData("text/html", e.target.childNodes[0])
  }

  const noAllowDrop = e => {
    e.stopPropagation()
  }
  return (
    <div
      id={props.id}
      draggable="true"
      onDragStart={drag}
      onDragOver={noAllowDrop}
    >
      {props.children}
    </div>
  )
}