import React, { Component } from 'react'

//Header
function Header() {
  console.log("Header被調用")
  return <h2>我是Header組件</h2>
}


//Main
class Banner extends Component {
  render() {
    console.log("Banner render 函數被調用")
    return <h3>我是Banner組件</h3>
  }
}



function ProductList() {
  console.log("ProductList被調用")
  return (
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
    </ul>
  )
}

class Main extends Component {
  render() {
    console.log("Main render 函數被調用")

    return (
      <div>
        <Banner/>
        <ProductList/>
      </div>
    )
  }
}

//Footer
function Footer() {
  console.log("Footer被調用")
  return <h2>我是Footer組件</h2>
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  render() {
    console.log("App render 函數被調用")
    return (
      <div>
        <h2>當前計數: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter +1
    })
  }
}
