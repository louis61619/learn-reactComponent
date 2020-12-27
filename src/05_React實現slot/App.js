import React, { Component } from 'react'

import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <h2>11111111111</h2>
          <h2>222222</h2>
          <h2>2222233333332</h2>
        </NavBar>
        <NavBar2 leftSlot={<h2>11111111111</h2>}
                 centerSlot={<h2>222222</h2>}
                 rightSlot={<h2>2222233333332</h2>}/>
        <NavBar2/>
      </div>
    )
  }
}
