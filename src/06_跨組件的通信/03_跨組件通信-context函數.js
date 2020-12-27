import React, { Component } from 'react'

// 創建context對象
const UserContext = React.createContext({
  nickname: "aaaa",
  level: -1
})

const ThemeContext = React.createContext({
  color: "blue"
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h2 style={{color: theme.color}}>用戶體驗: {value.nickname}</h2>
                      <h2>用戶等級: {value.level}</h2>
                      <h2>顏色: {theme.color}</h2>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

// ProfileHeader.contextType = UserContext

// Spread Attributes 屬性展開
function Profile() {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader />
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
          <ThemeContext.Provider value={{color: "red"}}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
