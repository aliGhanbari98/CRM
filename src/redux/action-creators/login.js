import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setLoginData = createAction('SET_LOGIN_DATA')
export const dispatchSetLoginData = (data) => dispatch(setLoginData(data))

const setForgotData = createAction('SET_FORGOT_DATA')
export const dispatchSetForgotData = (data) => dispatch(setForgotData(data))

export default null
