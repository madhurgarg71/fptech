import React from "react"
import { DropTarget } from "react-dnd"
import { Types, L, C } from "./Constants";

const newTrainDroptarget = {
  canDrop: function (props, monitor) {
    // always drop
    const item = monitor.getItem()
    if (item.comp == Types.CARRIAGE || props.canBuildNew() == false) {
      return false
    }
    return true
  },
  drop: function (props, monitor, component) {
    if (monitor.didDrop()) {
      return
    }

    const item = monitor.getItem()
    props.buildNewTrain(item.comp)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  }
}

function NewTrain(props) {
  const { isOver, canDrop, connectDropTarget } = props
  return connectDropTarget(<div className="new--train__area">
    <p>Drag and drop here for new trains</p>
  </div>)
}

export default DropTarget([Types.LOCOMOTIVE, Types.CARRIAGE], newTrainDroptarget, collect)(NewTrain)