import React, { Component } from 'react' //rcc

class CounterButton extends Component {
  render() {
    const { increment } = this.props
    return (
      <button onClick={ increment }>+1</button>
    )
  }
}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>當前計數: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
        <CounterButton increment={ e => this.increment() } name="why"/>
      </div>
    )
  }

  increment() {
    console.log("increment被調用")
    this.setState({
      // counter: ++this.state.counter //++在前運算完賦值，++在後則是先賦值，使用運算符會改變自身的值，react不建議改變state內的值
      counter: this.state.counter+1
    })
  }
}

// 子組件綁定this 
// 1. 透過 bind(this.)
// 2. 將調用的函數改完箭頭函數
// 3. 使用箭頭函數的方式調用 隱式綁定