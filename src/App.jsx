import React, { useEffect } from 'react'
import { Router, navigate } from '@reach/router'
import { Provider } from 'react-redux'
import NavigationRoutes from 'containers/master_page/routes'
// alert
import Alert from 'base/alert/alert'
// queries
import { UserQueries } from 'queries'
// pages
import Master from 'containers/master_page/master'
import Login from 'pages/login/login'
import Register from 'pages/register/register'
import store from './redux/store'
import './assets/StyleLoader'

const app = () => {
  useEffect(() => {
    // TODO reverse the condition for production
    // if (!localStorage.getItem('logged-in')) navigate('/login')
    // UserQueries.getProfileReq()
  }, [])

  return (
    <Provider store={store}>
      <div className="app">
        <Alert />
        <Router style={{ display: 'contents' }}>
          <Login path="/login/*" />
          <Register path="register" />
          <Master routes={NavigationRoutes} path="/">
            {NavigationRoutes.map(
              (
                { component: Component, path, children, tabs, header },
                index
              ) => (
                <Component
                  key={index}
                  path={path}
                  items={children}
                  tabs={tabs}
                  header={header}
                />
              )
            )}
          </Master>
        </Router>
      </div>
    </Provider>
  )
}

export default app
