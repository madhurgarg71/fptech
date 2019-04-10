import React from "react"
import { fetchAlbums } from "./Api"
import "./sass/Albums.scss"

class Albums extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }
  componentDidMount() {
    fetchAlbums()
    .then(json => {
      this.setState({ albums: json })
    })
  }
  render() {
    return (
      <div id="albums">
        {
          this.state.albums.map((item, i) => (
            <div className="album__item" key={item.id}>
              <div><img src={item.thumbnailUrl} /></div>
              <div>{item.title}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Albums