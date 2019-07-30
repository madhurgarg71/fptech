import React from "react"
import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import NewTrainCompArea from "./NewTrainCompArea"
import ConstructionArea from "./ConstructionArea"

class App extends React.Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="row container">
          <div className="col new--train__component">
            <NewTrainCompArea />
          </div>
          <div className="col construction--area">
            <ConstructionArea />
          </div>
        </div>
      </DndProvider>
    )
  }
}

export default App