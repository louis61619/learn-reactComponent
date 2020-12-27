import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: ""
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
                   onChange={e => this.handleChange(e)}
                  //  綁定虛擬dom的資料
                   value={this.state.username}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }
}
