import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setFilterData = createAction('SET_FILTER_DATA')
export const dispatchSetFilterData = (data) => dispatch(setFilterData(data))

const setFilterSelected = createAction('SET_FILTER_SELECTED')
export const dispatchSetFilterSelected = (data) =>
  dispatch(setFilterSelected(data))

export default null
