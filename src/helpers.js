export function uuid() {
  return Math.floor(Math.random() * 1000 + 1)
}

export const calculateTracks = (trains) => {
  let noOfTracks = 0
  const sortedTrains = trains.map(item => {
    item.arrival = convertToDate(item.arrival)
    item.departure = convertToDate(item.departure)
    return item
  }).sort((a, b) => a.departure - b.departure)

  for (let i = 0; i < sortedTrains.length; i++) {
    let x = noOfTrainsBeforeDeparture(sortedTrains[i], sortedTrains)
    let y = noOfTrainsDepartedBeforeArriving(sortedTrains[i], sortedTrains)
    noOfTracks = Math.max(noOfTracks, x - y)
  }

  return noOfTracks
}

export const noOfTrainsBeforeDeparture = (train, sortedTrains) => {
  let res = 0
  sortedTrains.forEach(item => {
    if (item.arrival < train.departure) {
      res += 1
    }
  })

  return res
}

export const noOfTrainsDepartedBeforeArriving = (train, sortedTrains) => {
  let res = 0
  sortedTrains.forEach(item => {
    if (item.departure < train.arrival) {
      res += 1
    }
  })

  return res
}

export const convertToDate = (time) => {
  const currentDate = new Date()
  const res = new Date(currentDate.getTime())
  res.setHours(time.split(":")[0])
  res.setMinutes(time.split(":")[1])
  res.setSeconds("00")

  return res
}