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
        <button id="btn">原生方法</button>
      </div>
    )
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "你好阿"
      })
      console.log(this.state.message)
    })
  }

  changeTest() {
    setTimeout(() => {
      this.setState({
        message: "你好阿"
      })
      console.log(this.state.message)
    })
  }
}

// 情況1.將setState放入setTimeout中
// 情況2.放入原始的事件監聽中

