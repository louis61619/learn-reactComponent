import React, { Component, Fragment } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      friends: [
        {name: "why", age: 18},
        {name: "why", age: 18},
        {name: "why", age: 18}
      ]
    }
  }

  render() {
    return (
      // <Fragment>
      //   <h2>當前計數: {this.state.counter}</h2>
      //   <button onClick={e => this.increment()}>+</button>
      // </Fragment>
      <>
        <h2>當前計數: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+</button>
        <div>
          {
            this.state.friends.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr/>
                </Fragment>
              )
            })
          }
        </div>
      </>
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
