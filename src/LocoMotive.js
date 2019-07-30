import React from "react"
import { DragSource } from "react-dnd"
import locomotiveImg from "./../images/locomotive.jpg"
import { Types, L } from "./Constants"

const locomotiveSource = {
  beginDrag: function (prop, monitor, component) {
    const item = { comp: Types.LOCOMOTIVE }
    return item
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function Locomotive(props) {
  const { isDragging, connectDragSource } = props
  return connectDragSource(<img id="locomotive" src={locomotiveImg} />)
}

export default DragSource(Types.LOCOMOTIVE, locomotiveSource, collect)(Locomotive)