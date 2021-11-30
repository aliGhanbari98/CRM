// modules
import React, { useState } from 'react'
// icons
import PersonIcon from '@atlaskit/icon/glyph/person'
import LockFilledIcon from '@atlaskit/icon/glyph/lock-filled'
// style
import './loginForm.scss'
// components
import { Checkbox } from '@atlaskit/checkbox'
import { Button } from 'base/buttons'
import { BasicInput, PasswordInput } from 'base/inputs'

export default ({ onButtonClick }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="login-form">
      <BasicInput
        name="username"
        placeHolder="johnsmith@gmail.com"
        type="text"
        value={userName}
        label="Phone Number/Email"
        Icon={PersonIcon}
        onChange={setUserName}
      />
      <PasswordInput
        value={password}
        label="Password"
        Icon={LockFilledIcon}
        onChange={setPassword}
      />
      <div className="login-form__checkbox">
        <Checkbox
          style={{ marginTop: 10 }}
          onChange={(e) => {
            setRememberMe(e.target.checked)
          }}
          label="Remembre me"
          value={rememberMe}
          name="remember-me"
        />
      </div>

      <div className="login-form__button">
        <Button
          onClick={() => {
            onButtonClick({ userName, password, rememberMe })
          }}
          label="Login"
        />
      </div>
    </div>
  )
}
