import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App {this.props.name}
      </div>
    )
  }
}

// 自定義名稱
// App.displayName = "coderwhy"

// function enhanceComponent(WrapperedComponent) {
//   class NewComponent extends PureComponent {
//     render() {
//       return <WrapperedComponent {...this.props}/>
//     }
//   }
//   NewComponent.displayName = 'Renny'
//   return NewComponent
// }

function enhanceComponent2(WrapperedComponent) {
  
  function NewComponent(props) {
    return <WrapperedComponent {...props}/>
  }
  NewComponent.displayName = 'Renny'
  return NewComponent
}

const EnhanceComponent = enhanceComponent2(App)

export default EnhanceComponent

// 高階組件不是react api的一部分
