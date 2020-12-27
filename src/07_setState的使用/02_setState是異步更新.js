import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    return (
      <div>
        <h2>當前計數: {this.state.message}</h2>
        <button onClick={e => this.changeTest()}>改變文本</button>
      </div>
    )
  }

  componentDidUpdate() {
    console.log(this.state.message, "update")
  }

  changeTest() {
    // this.setState({
    //   message: "你好阿"
    // })
    // console.log(this.state.message)

    // 如何獲取異步更新後的state
    // 回調 or componentDidUpdate
    this.setState({
      message: "你好阿"
    }, () => {
      console.log(this.state.message)
    })
  }
}

//異步更新的兩個原因
//  1. 同步更新性能較差
//  2. 保持props和state維持同步(同步渲染render)
