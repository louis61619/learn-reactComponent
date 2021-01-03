import React, { PureComponent, createContext } from 'react'

function EnachanceProps(WrapperedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrapperedComponent  {...props} {...user} />
          }
        }
      </UserContext.Consumer>
    )
  }
}

// 創建context
const UserContext = createContext({
  name: "工程師",
  level: -1,
  region: "美國"
})

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>{`名稱: ${this.props.name}， 等級: ${this.props.level} 區域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>{`名稱: ${this.props.name}， 等級: ${this.props.level} 區域: ${this.props.region}`}</h2>
      </div>
    )
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}

const EnchanceHome = EnachanceProps(Home)
const EnchanceAbout = EnachanceProps(About)
const EnchanceDetail = EnachanceProps(Detail)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{name: "Louis", level: "200", region: "美國"}}>
          <EnchanceHome />
          <EnchanceAbout />
          <EnchanceDetail/>
        </UserContext.Provider>
      </div>
    )
  }
}


// function go(props) {
//   console.log(props)
// }