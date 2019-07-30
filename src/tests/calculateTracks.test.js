import { calculateTracks } from "./../helpers"
import { data1, data2, data3 } from "./inputs"

test("Maximum no. of track(s) required is 3", () => {
  expect(calculateTracks(data1)).toBe(3)
})

test("Maximum no. of track(s) required is 2", () => {
  expect(calculateTracks(data2)).toBe(2)
})

test("Maximum no. of track(s) required is 2", () => {
  expect(calculateTracks(data3)).toBe(2)
})