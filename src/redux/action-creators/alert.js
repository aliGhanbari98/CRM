import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setAlertData = createAction('SET_ALERT_DATA')
export const dispatchSetAlertData = (data) => dispatch(setAlertData(data))

export default null
