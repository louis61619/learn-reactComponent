import React, { PureComponent, createContext } from 'react'

// 創建context
const UserContext = createContext({
  name: "去死",
  level: -1,
  region: "台灣"
})

class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return (
              <div>
                <h2>{`名稱: ${user.name}， 等級: ${user.level} 區域: ${user.region}`}</h2>
              </div>
            )
          }
        }
      </UserContext.Consumer>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return (
              <div>
                <h2>{`名稱: ${user.name}， 等級: ${user.level} 區域: ${user.region}`}</h2>
              </div>
            )
          }
        }
      </UserContext.Consumer>
    )
  }
}

// const EnhanceHome = EnhanceRegionProps(Home)
// const EnhanceAbout = EnhanceRegionProps(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{name: "why", level: "99", region: "中國"}}>
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    )
  }
}


// function go(props) {
//   console.log(props)
// }