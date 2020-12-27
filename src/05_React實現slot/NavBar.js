import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    // console.log(this.props.children)
    // this.props 有個條件必須是數組類型 不然會報錯
    return (
      <div className="nav-item nav-bar">
        <div className="nav-item nav-left">
          {this.props.children[0]}
        </div>
        <div className="nav-item nav-center">
          {this.props.children[1]}
        </div>
        <div className="nav-item nav-right">
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}
