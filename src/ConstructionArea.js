import React, { useEffect, useState } from "react"
import Train from "./Train"
import NewTrain from "./NewTrain";
import { uuid } from "./helpers";
import Types from "./Constants";
import { calculateTracks } from "./helpers"
import { data1 } from "./tests/inputs"

export default function ConstructionArea() {
  /**
   * Train {
   *  id
   *  items: <"locomotive"/"carriage">,
   *  arrival
   *  departure
   * }
   */

  /** Trains []Train */

  const [trains, setTrains] = useState([])
  const [noOfTracks, setNoTracks] = useState(0)

  const buildNewTrain = comp => {
    /** Setting no of track to 0 for calculating no of tracks if trains are updated */
    setNoTracks(0)
    const newTrain = {}
    newTrain.items = []
    newTrain.id = uuid()
    newTrain.items.push(comp)
    newTrain.arrival = ""
    newTrain.departure = ""
    const copyTrains = trains.slice()
    copyTrains.push(newTrain)
    setTrains(copyTrains)
  }

  const updateTrainComp = (id, comp) => {
    const copyTrains = trains.slice()
    const train = copyTrains.find(item => item.id === id)
    if (train.items.length > 5) {
      return
    }
    train.items.push(comp)
    setTrains(copyTrains)
  }

  const updateTrainTiming = (id, arrival, departure) => {
    /** Setting no of track to 0 for calculating no of tracks if timings are updated */
    setNoTracks(0)
    const copyTrains = trains.slice()
    const train = copyTrains.find(item => item.id === id)
    train.arrival = arrival
    train.departure = departure
    setTrains(copyTrains)
  }

  const canCalculate = () => {
    if (trains.length === 0) return false
    for (let i = 0; i < trains.length; i++) {
      if (trains[i].arrival.length === 0 || trains[i].departure.length === 0 || trains[i].items.indexOf(Types.CARRIAGE) === -1) {
        return false
      }
    }
    return true
  }

  const canBuildNew = () => {
    for (let i = 0; i < trains.length; i++) {
      if (trains[i].arrival.length === 0 || trains[i].departure.length === 0 || trains[i].items.indexOf(Types.CARRIAGE) === -1) {
        return false
      }
    }
    return true
  }

  const logNoOfTracks = () => {
    if (noOfTracks != 0) {
      alert(noOfTracks)
    } else {
      /** Creating a new copy of trains array (different referrence!!) to avoid mutation */
      const copyTrains = JSON.parse(JSON.stringify(trains))
      const noOfTracks = calculateTracks(copyTrains)
      setNoTracks(noOfTracks)
      alert(`Maximum no of track(s) required is ${noOfTracks}`)
    }
  }

  return (
    <React.Fragment>
      <NewTrain canBuildNew={canBuildNew} buildNewTrain={buildNewTrain} />

      <div className="built--trains__area">
        {trains.map((train, i) => {
          return (
            <Train
              updateTrainTiming={updateTrainTiming}
              updateTrainComp={updateTrainComp}
              train={train}
              key={i}
            />
          )
        })}
      </div>

      <div className="calculate--tracks">
        <button onClick={() => { logNoOfTracks() }} disabled={!canCalculate()}>Calculate Tracks</button>
      </div>
    </React.Fragment>
  )
}