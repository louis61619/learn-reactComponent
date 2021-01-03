import React, { PureComponent, StrictMode } from 'react'

class Profile extends PureComponent {
  // UNSAFE_omponentWillMount() {
  //   console.log("Profile componentWillMount")
  // }
  constructor(props) {
    super(props)

    console.log("Profile Constructur")
  }
  render() {
    return (
      <div ref="title">
        Profile
      </div>
    )
  }
}

class Home extends PureComponent {
  // UNSAFE_componentWillMount() {
  //   console.log("Home componentWillMount")
  // }
  constructor(props) {
    super(props)

    console.log("Home Constructur")
  }
  render() {
    return (
      <div ref="title">
        Home
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}


// 識別不安全的生命週期
// 使用過時的ref api
// 檢查意外的副作用 EX: construcur調用兩次
// 檢查某些廢棄的方法