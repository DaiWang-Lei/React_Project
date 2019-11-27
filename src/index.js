import React from 'react'
import { render } from 'react-dom'

// 导入App根组件
import App from './App'
// 全局导入antd改为中文
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd'


// d导入路由
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import { mainRouter } from './routes'

render(

  <Router>
    <ConfigProvider locale={zhCN}>
      <Switch>
        <Route path='/admin' render={(routerProps) => {
          // Todo:权限设置，需要登陆才能访问/admin
          return <App {...routerProps} />
        }} />
        {
          mainRouter.map(route => {
      
            return <Route key={route.pathname} path={route.pathname} component={route.component}/>
          })
        }

        <Redirect to='/admin' from='/' exact/>
        <Redirect to='/404' />
      </Switch>
    </ConfigProvider>
  </Router>
  , document.querySelector('#root'))