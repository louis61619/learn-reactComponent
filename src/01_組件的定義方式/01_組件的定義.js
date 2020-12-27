import React from 'react';

//類組件
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state =  {
//       message: "你好阿，Renny"
//     }
//   }



//   render() {
//     return(
//       <div>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }


/***
 * 函數式組件的特點:
 * 1.沒有this對象
 * 2.沒有內部的狀態(hooks)
 */
export default function App() {
  return (
    <div>
      <span>我是function組件</span>
      <h2>你好阿</h2>
    </div>
  )
}