import React, { Component } from 'react'

class Cpn extends Component {
  render() {
    return <h2>我是Cpn組件</h2>
  }

  componentWillUnmount() {
    console.log('cpn組件的componentWillUnmount方法')
  }
}

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      isShow: true
    }
    console.log('執行了constructor方法')
  }

  render() {
    console.log('執行了render方法')
    return (
      <div>
        <h2>1111111111</h2>
        <h2>當前計數: {this.state.counter}</h2>
        <button onClick={() => {this.increment()}}>+1</button>
        <hr/>
        <button onClick={() => {this.cpnShow()}}>切換</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  cpnShow() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidUpdate() {
    console.log('執行了componentDidUpdate方法')
  }

  componentDidMount() {
    console.log('執行了componentDidMount方法')
  }
}
