import React, { Component } from 'react'
import { Button } from 'antd';


const High = (YourComponent) => {
  return (
    class Zujian extends Component {
      render() {
        return (
          <>
            <YourComponent></YourComponent>
            <div>我是高阶组件</div>
          </>
        )
      }
    }
  )
}
@High

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">123</Button>
      </div>
    )
  }
}
export default App