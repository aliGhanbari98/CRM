import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setSelectedPage = createAction('SET_SELECTED_PAGE')
export const dispatchSetSelectedPage = (label) =>
  dispatch(setSelectedPage(label))

export default null
