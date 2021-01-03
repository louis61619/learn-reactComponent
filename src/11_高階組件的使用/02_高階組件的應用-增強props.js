import React, { PureComponent } from 'react'

function EnhanceRegionProps(WrapperedComponent) {
  return function(props) {
    console.log(props.region)
    return <WrapperedComponent {...props} region="美國"/>
  }
}

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

const EnhanceHome = EnhanceRegionProps(Home)
const EnhanceAbout = EnhanceRegionProps(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome name="Renny" level="20"/>
        <EnhanceAbout name="CoderWhy" level="50"/>
      </div>
    )
  }
}


// function go(props) {
//   console.log(props)
// }