import React, { Component } from 'react'

class ChildCpn extends Component {

  //可省略
  // constructor(props) {
  //   super(props);
  //   // this.props = props;
  // }
  
  render() {
    const {name, age, height} = this.props;

    return (
      <h2>子組件展示數據: {name+ " " + age + " " + height}</h2>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age="18" height="1.88"/>
        <ChildCpn name="Renny" age="25" height="1.75"/>
      </div>
    )
  }
}
