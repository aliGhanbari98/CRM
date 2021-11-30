// modules
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// queries
import { UserQueries } from 'queries'
// helpers
import usernameTypeDeterminer from 'helpers/usernameTypeDeterminer'
// style
import './authForm.scss'
// components
import ReactCodeInput from 'react-verification-code-input'
import { Button, AuthCodeButtons } from '../../../../base/buttons'

const timeFormatter = (time) => (time > 9 ? `00:${time}` : `00:0${time}`)

const usernameTypeInverter = { email: 'sms', sms: 'email' }

const AuthForm = ({ forgot, onButtonClick, loginData }) => {
  const userName = forgot ? loginData.forgot.userName : loginData.login.userName
  console.log(userName)
  const [authCode, setAuthCode] = useState({
    content: '',
    remainingTime: 60,
    requested: false,
  })

  const [intervalId, setIntervalId] = useState()
  const [sendCodeTo, setSendCodeTo] = useState()

  useEffect(() => {
    const usernameType = usernameTypeDeterminer(userName)
    setSendCodeTo(usernameTypeInverter[usernameType])
  }, [userName])

  const sendCode = (resend) => {
    if (forgot)
      UserQueries.forgotPasswordReq({
        ...loginData.forgot,
        type: resend ? usernameTypeInverter[sendCodeTo] : sendCodeTo,
      })
    else
      UserQueries.loginReq({
        ...loginData.login,
        type: resend ? usernameTypeInverter[sendCodeTo] : sendCodeTo,
      })
    if (!resend) setSendCodeTo(usernameTypeInverter[sendCodeTo])
  }

  if (authCode.remainingTime < 0) {
    setAuthCode({ ...authCode, requested: false, remainingTime: 60 })
    clearInterval(intervalId)
  }

  const startTimer = () => {
    if (authCode.requested) return
    sendCode(true)
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
    <div className="auth-form">
      <p>
        Please type the verification code that has been sent to
        <b>{` ${userName}`}</b>
        {forgot ? ' to get a new password' : ''}
      </p>
      <div className="auth-form__body">
        <div className="verification-input__container">
          <label>Enter Code</label>
          <ReactCodeInput
            className="verification-input center"
            fields={6}
            fieldWidth={23}
            fieldHeight={30}
            values={['', '', '', '', '']}
            onChange={(value) => {
              setAuthCode({ ...authCode, content: value })
            }}
          />
          <AuthCodeButtons
            {...{
              left: {
                label: `Send Code to ${sendCodeTo}`,
                onClick: () => sendCode(false),
              },
              right: {
                onClick: startTimer,
                disabled: authCode.requested,
                label: authCode.requested
                  ? timeFormatter(authCode.remainingTime)
                  : 'Resend',
              },
            }}
          />
        </div>
      </div>
      <div className="auth-form__button">
        <Button
          onClick={() => {
            onButtonClick({
              verificationCode: String(authCode.content),
              userName,
            })
          }}
          label={forgot ? 'Send New Password' : 'Login'}
          fit={forgot}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ loginData: state.view.loginData })

export default connect(mapStateToProps, null)(AuthForm)
