import React, { Component } from 'react'

// 創建context對象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1
})

class ProfileHeader extends Component {
  render() {
    const { nickname, level } = this.context
    return(
      <div>
        <h2>用戶暱稱: {nickname}</h2>
        <h2>用戶等級: {level}</h2>
      </div>
    )
  }
}

ProfileHeader.contextType = UserContext

// Spread Attributes 屬性展開
function Profile() {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader/>
      <ul>
        <li>設置1</li>
        <li>設置2</li>
        <li>設置3</li>
        <li>設置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nickname: "kobe",
      level: 99
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>  
      </div>
    )
  }
}
