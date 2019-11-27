import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import { Frame } from './components'
import { Login } from './views'
const menus = adminRoutes.filter(item => item.isNav === true)
class App extends Component {
  render() {
    return (

      <Frame  menus={menus} >
        <Switch>
          {
            adminRoutes.map(route => {
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
          <Redirect to={adminRoutes[0].pathname} from='/admin' exact />
          <Redirect to='/404' />

        </Switch>
      </Frame>

    )
  }
}
export default App