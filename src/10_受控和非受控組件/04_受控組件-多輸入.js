import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      valid: ""
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用戶: 
            <input type="text" 
                   id="username"
                   name="username"
                   onChange={e => this.handleChange(e)}
                  //  綁定虛擬dom的資料
                   value={this.state.username}/>
          </label>
          <br/>
          <label htmlFor="username">
            密碼: 
            <input type="text" 
                   id="password"
                   name="password"
                   onChange={e => this.handleChange(e)}
                  //  綁定虛擬dom的資料
                   value={this.state.password}/>
          </label>
          <br/>
          <label htmlFor="username">
            驗證: 
            <input type="text" 
                   id="valid"
                   name="valid"
                   onChange={e => this.handleChange(e)}
                  //  綁定虛擬dom的資料
                   value={this.state.valid}/>
          </label>
          <input type="submit" value="提交"/>
        </form>

      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    const {username, password, valid} = this.state
    console.log(username, password, valid)
  }

  handleChange(event) {
    console.log(event.target.name)
    // es6語法計算屬性名 動態key
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}
