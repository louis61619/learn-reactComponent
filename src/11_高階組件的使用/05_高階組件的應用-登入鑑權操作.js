import React, { PureComponent } from 'react'

function withAuth(WrapperComponent) {
  const AuthCpn =  props => {
    const {isLogin} = props
    if(isLogin) {
      return <WrapperComponent/>
    } else {
      return <LoginPage/>
    }
  }
  AuthCpn.displayName = "AuthCpn"
  return AuthCpn
}

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>LoginPage</h2>
      </div>
    )
  }
}

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>CartPage</h2>
      </div>
    )
  }
}

const AuthCartPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true}/>
      </div>
    )
  }
}
