import React from 'react'
import { render } from 'react-dom'

// 导入App根组件
import App from './App'
// 全局导入antd改为中文
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'
render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
  , document.querySelector('#root'))