import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setOpenProfileCard = createAction('OPEN_PROFILE_CARD')
export const dispatchSetOpenProfileCard = (isOpen) =>
  dispatch(setOpenProfileCard(isOpen))

export default null
