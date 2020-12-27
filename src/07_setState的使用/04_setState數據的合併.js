import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "why",
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

  changeTest() {
    console.log(Object.assign({}, this.state, {message: "你好阿!!!"})) //做一次深度拷貝，改變內存位置
    this.setState({
      message: "你好阿"
    })
  }
}

// setState 透過 object.assign方法進行保存
