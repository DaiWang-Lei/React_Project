// 这个文件用于解释react-loadbale


import React, { Component } from 'react'
const loadable = ({
  loader,
  loading: Loading

}) => {
  return class LoadadbleCopmonent extends Component {
    constructor() {
      super()

      this.state = {
        LoadedComponent: null
      }
    }
    componentDidMount() {
      loader()
        .then((res) => {
          this.setState({
            LoadedComponent: res.default
          })
        })
    }
    render() {

      const {
        LoadedComponent
      } = this.state
      return (
        <div>
          {
            LoadedComponent
              ?
              <LoadedComponent />
              :
              <Loading />
          }
        </div>
      )
    }
  }
}
export default loadable