// modules
import React, { useState } from 'react'
import { connect } from 'react-redux'
// style
import './forgotForm.scss'
// queries
import { UserQueries } from 'queries'
// helpers
import usernameTypeDeterminer from 'helpers/usernameTypeDeterminer'
// components
import { PasswordInput, BasicInput } from 'base/inputs'
import { Button, AuthCodeButtons } from 'base/buttons'

const timeFormatter = (time) => (time > 9 ? `00:${time}` : `00:0${time}`)

const AuthForm = ({
  logingInByNewPassword,
  onButtonClick,
  previouslyEnteredUserName,
}) => {
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [contactedBy] = useState('phone')

  // delete this

  const [authCode, setAuthCode] = useState({
    content: '',
    remainingTime: 60,
    requested: false,
  })

  const [intervalId, setIntervalId] = useState()

  if (authCode.remainingTime < 0) {
    setAuthCode({ ...authCode, requested: false, remainingTime: 60 })
    clearInterval(intervalId)
  }

  const sendCode = () => {
    const usernameType = usernameTypeDeterminer(previouslyEnteredUserName)
    UserQueries.forgotPasswordReq({
      userName: previouslyEnteredUserName,
      type: usernameType,
      dontNavigate: true,
    })
  }

  const startTimer = () => {
    if (authCode.requested) return
    sendCode()
    const id = setInterval(() => {
      setAuthCode(({ remainingTime }) => ({
        ...authCode,
        requested: true,
        remainingTime: remainingTime - 1,
      }))
    }, 1000)
    setIntervalId(id)
  }

  return (
    <div className="forgot-form">
      <p>
        {!logingInByNewPassword
          ? 'Please type your Email or Phone Number to get the verification code'
          : 'Please type the password that has been sent to '}
        {logingInByNewPassword && <b>{previouslyEnteredUserName}</b>}
      </p>
      <div className="auth-form__body">
        <div className="verification-input__container">
          {logingInByNewPassword ? (
            <PasswordInput
              label="Write your password here"
              value={password}
              onChange={setPassword}
            />
          ) : (
            <BasicInput
              name="username"
              type="text"
              value={userName}
              label="Enter your Email or Phone Number"
              onChange={setUserName}
            />
          )}
          <AuthCodeButtons
            {...{
              left: { label: '' },
              right: {
                onClick: startTimer,
                disabled: authCode.requested,
                label:
                  logingInByNewPassword &&
                  (authCode.requested
                    ? timeFormatter(authCode.remainingTime)
                    : 'Resend'),
              },
            }}
          />
        </div>
      </div>
      <div
        className={`forgot-form__button ${
          logingInByNewPassword && 'higher-margin'
        }`}
      >
        <Button
          onClick={() => {
            onButtonClick({ userName, newPassword: password, contactedBy })
          }}
          label={logingInByNewPassword ? 'Login' : 'Send code'}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  previouslyEnteredUserName: state.view.loginData.forgot.userName,
})

export default connect(mapStateToProps, null)(AuthForm)
