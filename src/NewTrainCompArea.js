import React from "react"
import Locomotive from "./LocoMotive"
import Carriage from "./Carriage"

export default function NewTrainComp() {
  return (
    <React.Fragment>
      <div className="carriage">
        <Carriage />
      </div>

      <div className="locomotive">
        <Locomotive />
      </div>
    </React.Fragment>
  )
}