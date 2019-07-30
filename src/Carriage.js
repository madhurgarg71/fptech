import React from "react"
import { DragSource } from "react-dnd"
import carriageImg from "./../images/carriage.jpg"
import { Types } from "./Constants"

const carriageSource = {
  beginDrag: function (props, monitor, component) {
    const item = { comp: Types.CARRIAGE }
    return item
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function Carriage(props) {
  const { isDragging, connectDragSource } = props
  return connectDragSource(<img id="carriage" src={carriageImg} />)
}

export default DragSource(Types.CARRIAGE, carriageSource, collect)(Carriage)