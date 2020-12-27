import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends : [
        {name: "李雷", age: 20},
        {name: "lily", age: 18},
        {name: "Renny", age: 25}
      ]
    }
  }

  render() {
    return (
      <div>
        <ul>
            {
              this.state.friends.map((item, index) => {
                return (
                  <li key={item.name}>
                    姓名: {item.name} 
                    年齡: {item.age}
                    <button onClick={e => this.increment(index)}>年齡+1</button>
                  </li>
                ) 
              })
            }
        </ul>
        <button onClick={e => this.insertData()}>添加數據</button>
      </div>
    )
  }

  shouldComponentUpdate(newProps, newState) { //性能優化，前後對比
    if(newState.friends !== this.state.friends) {
      return true
    }

    return false
  }

  insertData() {
    // 如果對state中的值進行改變，會影響到檢測state改變更新的響應式函數
    // const newData = {name: "Tom", age: 30}
    // this.state.friends.push(newData)
    // console.log(this.state.friends)
    // this.setState({
    //   friends: this.state.friends
    // })

    // 1.推薦作法
    // 重新分配一個內存地址，並解構引入元素
    const newFriends = [...this.state.friends]
    newFriends.push({name: "Tome", age: 30})
    this.setState({
      friends: newFriends
    })
  }

  increment(index) {
    console.log(this.state.friends[index])
    // 淺拷貝 只創造淺層對象的新指針
    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends: newFriends
    })
  }
}
