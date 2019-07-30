import React, { useState } from "react"
import { DropTarget } from "react-dnd"
import carriageImg from "./../images/carriage.jpg"
import locomotiveImg from "./../images/locomotive.jpg"
import "./sass/train.scss"
import { Types } from "./Constants";

const updateTrainDropTarget = {
  canDrop: function (props, monitor) {
    const item = monitor.getItem()
    return shouldDrop(props, item)
  },
  drop: function (props, monitor, component) {
    if (monitor.didDrop()) {
      return
    }

    const item = monitor.getItem()
    props.updateTrainComp(props.train.id, item.comp)
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

function shouldDrop(props, item) {
  return item.comp !== Types.LOCOMOTIVE
}

function Train(props) {
  const { isOver, canDrop, connectDropTarget } = props
  const [arrival, setArrival] = useState("")
  const [departure, setDepartue] = useState("")

  const handleBlurChange = e => {
    props.updateTrainTiming(props.train.id, arrival, departure)
  }

  return (
    connectDropTarget(
      <div className="train">
        <div className="built--train">
          {
            props.train.items.map((item, i) => (
              <img key={i} src={item === Types.LOCOMOTIVE ? locomotiveImg : carriageImg} />
            ))
          }
        </div>
        <div className="row train--timings">
          <div>
            <label>Arrival</label>
            <input
              style={{ marginLeft: "10px" }}
              type="time"
              onBlur={handleBlurChange}
              onChange={e => { setArrival(e.target.value) }}
              value={arrival}
              placeholder="Arrival Time (11:50)"
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <label>Departure</label>
            <input
              style={{ marginLeft: "10px" }}
              type="time"
              onBlur={handleBlurChange}
              onChange={e => { setDepartue(e.target.value) }}
              value={departure}
              placeholder="Departure Time (12:05)"
            />
          </div>
        </div>
      </div>
    )
  )
}

export default DropTarget([Types.CARRIAGE], updateTrainDropTarget, collect)(Train)