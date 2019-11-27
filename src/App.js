import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRouter } from './routes'

import { Login } from './views'
class App extends Component {
  render() {
    return (
      <div>
        <div>我是主页</div>
        <Switch>
          {
            adminRouter.map(route => {
              return (
                <Route
                  exact={route.exact}
                  key={route.pathname}
                  path={route.pathname}
                  render={(routeProps) => {
                    return <route.component {...routeProps} />
                    // return <Login />
                  }}
                />
              )
            })
          }
          <Redirect to={adminRouter[0].pathname} from='/admin'  exact/>
          <Redirect to='/404' />

        </Switch>
      </div>


    )
  }
}
export default App