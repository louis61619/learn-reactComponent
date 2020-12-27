import React, { PureComponent } from 'react'

import { EventEmitter } from 'events';

//事件總線
const eventBus = new EventEmitter()

class Home extends PureComponent {

  componentDidMount() { //添加監聽
    eventBus.addListener("sayHello", this.handleSayHelloListener)
  }

  componentWillUnmount() { //取消監聽
    eventBus.removeListener("sayHello", this.handleSayHelloListener)
  }

  handleSayHelloListener(num, message) {
    console.log(num, message)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emitEvent()}>點擊了Profile按鈕</button>
      </div>
    )
  }

  emitEvent() {
    eventBus.emit("sayHello", "Hello Home", 123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}

// function lol () {
//   console.log('8----------')
// }

// console.log(lol ()) //傳入函數調用的回傳值
// console.log(lol) // 傳入函數