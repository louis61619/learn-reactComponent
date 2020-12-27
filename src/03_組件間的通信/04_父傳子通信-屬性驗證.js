import React, { Component } from 'react'

import PropTypes from 'prop-types';

function ChildCpn(props) {
  const { name, age, height, names } = props;

  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          names.map(item => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
    
  )
}

//類組件的其他種驗證寫法
class CHildCpn2 extends Component {
  //ES6中的class fields寫法
  static propTypes = { //屬性驗證

  }

  static defaultProps = { //默認參數

  }
}

//透過prop-types庫來實現屬性驗證
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired, //isRequired為該參數必須傳遞
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}

//給props默認值
ChildCpn.defaultProps = {
  name: "why",
  age: 30,
  height: 1.75,
  names: ['aaa', 'bbb', 'ccc']
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="why" age={18} height={1.88} names={['ava', 'dsf', 'fdf']}/>
        <ChildCpn/>
      </div>
    )
  }
}
