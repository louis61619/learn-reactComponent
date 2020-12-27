import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: ['大話西遊', '海王', '神力女超人']
    }
  }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.movies.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })
        }
        </ul>
        <button onClick={e => this.inserMovie()}>添加電影</button>
      </div>
    )
  }

  inserMovie() {
    // this.setState({
    //   movies: [...this.state.movies, "火影"]
    // })
    this.setState({
      movies: ["大宅院", ...this.state.movies]
    })
  }
}

// 給key是要對插入某條數據進行優化，因為沒有key會對所有子元素進行遍歷修改