import React, { PureComponent } from 'react'

function withRenderTime(WrapperComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }
  
    componentDidMount() {
      this.endTime = Date.now()
      const time = this.endTime - this.beginTime
      console.log(`${WrapperComponent.name} 渲染時間: ${time}`)
    }

    render() {
      return <WrapperComponent {...this.props}/>    
    }
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        About
      </div>
    )
  }
}

const TimeHome = withRenderTime(Home)
const TimeAbout = withRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <TimeHome/>
        <TimeAbout/>
      </div>
    )
  }
}
