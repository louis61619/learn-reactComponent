import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h2>用戶暱稱: {props.nickname}</h2>
      <h2>用戶等級: {props.level}</h2>
    </div>
  )
}

// Spread Attributes 屬性展開
function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} level={props.level}/> */}
      <ProfileHeader {...props}/>
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
    // const {nickname, level} = this.state

    return (
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}
