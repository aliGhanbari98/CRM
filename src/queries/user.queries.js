import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import {
  dispatchSetUserProfile,
  dispatchUpdateUserProfile,
} from 'redux/action-creators/user'
import {
  dispatchSetLoginData,
  dispatchSetForgotData,
} from 'redux/action-creators/login'
// helpers
import usernameTypeDeterminer from 'helpers/usernameTypeDeterminer'
import reqWrapper from '../helpers/request'
// configs
import configs from '../configs/global'

const registerReq = reqWrapper(
  ({
    phoneNumber: phone_number,
    email,
    fullName: full_name,
    companyName: company_name,
    industry,
    country,
    city,
    address,
    jobPosition: job_position,
  }) =>
    axios
      .post(`${configs.API}/v1/users/register`, {
        phone_number,
        email,
        full_name,
        work: {
          phone_number: '+989039887654',
          company_name,
          industry,
          country,
          city,
          address,
          job_position,
        },
      })
      .then(({ data }) => {
        console.log(data)
        navigate('/thank-you')
      })
)

const loginReq = reqWrapper(({ userName: username, password, type }) =>
  axios
    .post(`${configs.API}/v1/users/login`, {
      username,
      type: type || usernameTypeDeterminer(username),
      password,
    })
    .then(({ data: { access_token, refresh_token } }) => {
      dispatchSetLoginData({ userName: username, password })
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
      navigate('/login/auth')
    })
)

const forgotPasswordReq = reqWrapper(
  ({ userName: username, type, dontNavigate }) =>
    axios
      .post(`${configs.API}/v1/users/password/forgot`, {
        username,
        type: type || usernameTypeDeterminer(username),
      })
      .then(() => {
        dispatchSetForgotData({ userName: username })
        if (!dontNavigate) navigate('/login/set-new-password')
      })
)

const verificationReq = reqWrapper(
  ({
    userName: username,
    verificationCode: verification_code,
    loggedIn,
    action,
  }) =>
    axios
      .post(`${configs.API}/v1/users/otp/verify`, {
        username,
        verification_code,
        action: action || 'login',
      })
      .then(({ data: { access_token, refresh_token, limited } }) => {
        localStorage.setItem('token_limited', limited)
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)

        if (loggedIn) {
          navigate('/dashboard/*')
          localStorage.setItem('logged-in', true)
        } else navigate('/login/login-new-password')
      })
)

const updatePasswordReq = reqWrapper(
  ({ oldPassword: old_password, newPassword: new_password, loggedIn }, token) =>
    axios
      .post(
        `${configs.API}/v1/users/password/reset`,
        {
          old_password,
          new_password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(() => {
        if (loggedIn) localStorage.setItem('logged-in', true)
        navigate('/dashboard/*')
      })
)

const getProfileReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/users/profile`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => dispatchSetUserProfile(data))
)

const updateProfileReq = reqWrapper(
  ({ fullName: full_name, jobPosition: job_position }, token) =>
    axios
      .patch(
        `${configs.API}/v1/users/profile`,
        {
          full_name,
          work: {
            job_position,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(({ data }) => dispatchSetUserProfile(data))
)

export const getUserSettingsReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/users/settings`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => data)
)

export const updateUserSettingsReq = reqWrapper(
  (
    { loginTwoFactors: two_factor_login, emailNotification: notification },
    token
  ) =>
    axios
      .patch(
        `${configs.API}/v1/users/settings`,
        {
          two_factor_login,
          notification,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(({ data }) => dispatchUpdateUserProfile({ data, key: 'settings' }))
)

const uploadAvatarReq = reqWrapper((file, token) =>
  axios
    .post(`${configs.API}/v1/users/password/reset`, file, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data: { avatar_url } }) => {
      dispatchUpdateUserProfile({ data: avatar_url, key: 'avatar_url' })
    })
)

export default {
  registerReq,
  loginReq,
  forgotPasswordReq,
  verificationReq,
  updatePasswordReq,
  getProfileReq,
  updateProfileReq,
  getUserSettingsReq,
  updateUserSettingsReq,
  uploadAvatarReq,
}
