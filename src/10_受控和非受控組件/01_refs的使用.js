import React, { PureComponent, createRef } from 'react'


class Counter extends PureComponent {
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
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}


export default class App extends PureComponent {

  constructor(props) {
    super(props)
    this.titleRef = createRef()
    this.titleEl = null
    this.counterRef = createRef()
  }

  render() {
    return (
      <div>
        {/* ref 字符串/對象/函數 */}
        <h2 ref="titleRef">Hello React</h2>

        <h2 ref={this.titleRef}>Hello React</h2>

        <h2 ref={(arg) => {this.titleEl = arg}}>Hello React</h2>
        <button onClick={e => this.changeText()}>改變文本</button>

        <Counter ref={this.counterRef}/>
        <button onClick={e => this.appBtnClick()}>App按鈕</button>
      </div>
    )
  }

  changeText() {
    // 1.使用方式一: 字符串 官方不推薦
    this.refs.titleRef.innerHTML = "Hello Louis"

    // 2.使用方式二: 對象方式
    // console.log(this.titleRef.current)
    this.titleRef.current.innerHTML = "Hello Javascript"

    // 3.使用方式三: 函數方式
    console.log(this.titleEl)
    this.titleEl.innerHTML = "Hello Typescript"
  }

  appBtnClick() {
    console.log(this.counterRef.current)
    this.counterRef.current.increment()
  }
}


// 不能在函數中使用ref因為函數沒有實例