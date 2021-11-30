import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setUserProfile = createAction('SET_USER_PROFILE')
export const dispatchSetUserProfile = (data) => dispatch(setUserProfile(data))

const updateUserProfile = createAction('UPDATE_USER_PROFILE')
export const dispatchUpdateUserProfile = (data) =>
  dispatch(updateUserProfile(data))

export default null
