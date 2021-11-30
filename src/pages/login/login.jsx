// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Router, navigate, useLocation } from '@reach/router'
import { getState } from 'redux/store'
// queries
import { UserQueries } from 'queries'
// style
import styles from './login.module.scss'
// components
import { Button } from '../../base/buttons'
// routes
import routes from './routes'

const Login = ({ onClicks, user }) => {
  const [selectedTab, setSelectedTab] = useState('login')
  const { pathname } = useLocation()

  React.useEffect(
    () =>
      setSelectedTab(
        pathname === '/login' || pathname === '/login/auth' ? 'login' : 'forgot'
      ),
    []
  )

  return (
    <div className={`${styles.login} center`}>
      <span className={styles.loginTitle}>
        {user.name ? `Welcome ${user.name}` : 'Calistu CRM'}
      </span>
      <div className={styles.loginCard}>
        <div className={styles.loginTabs}>
          <div
            role="button"
            tabIndex="0"
            className={`center ${
              selectedTab === 'forgot'
                ? `${styles.notSelected} ${styles.rightShadow}`
                : styles.selected
            }`}
            onClick={() => {
              navigate('/login')
              setSelectedTab('login')
            }}
          >
            Login
          </div>
          <div
            role="button"
            tabIndex="0"
            className={`center ${
              selectedTab === 'login'
                ? `${styles.notSelected} ${styles.leftShadow}`
                : styles.selected
            }`}
            onClick={() => {
              navigate('/login/forgot')
              setSelectedTab('forgot')
            }}
          >
            Forgot
          </div>
        </div>
        <div className={styles.loginBody}>
          <Router>
            {routes.map(({ Component, props, path, name }) => (
              <Component
                key={name}
                {...{ ...props, onButtonClick: onClicks[name], path }}
              />
            ))}
          </Router>
        </div>
        <div className={styles.loginFooter}>
          <Button label="Need Help?" appearance="subtle-link" spacing="none" />
          <Button
            label="Request an account"
            appearance="subtle-link"
            spacing="none"
            onClick={() => navigate('/register')}
          />
        </div>
      </div>
      <span className={styles.policy}>
        By loggin in, you agree to our
        <button type="button"> Terms of Service </button>
        and
        <button type="button"> Privacy Policy </button>
      </span>
    </div>
  )
}

const mapStateToProps = () => ({
  user: { name: 'Ali' },
})

// TODO remove all navigation from below for integration

const mapDispatchToProps = () => ({
  onClicks: {
    login: (userData) => {
      UserQueries.loginReq(userData)
      // navigate('/login/auth')
    },
    auth: (data) => {
      UserQueries.verificationReq({ ...data, loggedIn: true })
      // navigate('/dashboard/*')
      // localStorage.setItem('logged-in', true)
    },
    forgot: (data) => {
      UserQueries.forgotPasswordReq(data)
      // navigate('/login/set-new-password')
    },
    setNewPassword: (data) => {
      UserQueries.verificationReq({ ...data, action: 'forget_password' })
      // navigate('/login/login-new-password')
    },
    loginNewPassword: (data) => {
      UserQueries.updatePasswordReq({ ...data, loggedIn: true })
      // navigate('/dashboard/*')
      // localStorage.setItem('logged-in', true)
    },
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
