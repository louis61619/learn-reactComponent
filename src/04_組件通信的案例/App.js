import React, { Component } from 'react'
import TabControl from "./TabControl"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.titles = ['新款', '流行', '精選']

    // 指定義會透過程式改變的數據
    this.state = {
      // currentIndex: 0,
      currentTitle: "新款",
    }
  }

  render() {
    const { currentTitle } = this.state

    return (
      <div>
        {/* 將整個箭頭函數傳入子組件 */}
        <TabControl itemClick={index => this.itemClick(index)} titles={this.titles} />
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index]
    })
  }
}
