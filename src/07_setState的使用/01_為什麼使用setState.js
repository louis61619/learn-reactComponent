import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>當前計數: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
      </div>
    )
  }

  increment() {
    // 1.setState本身被合併
    // this.setState({
    //   counter: this.state.counter+1
    // })
    // this.setState({
    //   counter: this.state.counter+1
    // })
    // this.setState({
    //   counter: this.state.counter+1
    // })

    // 2.讓setState合併被累加
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}
