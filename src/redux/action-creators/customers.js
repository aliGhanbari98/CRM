import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setCustomersFields = createAction('SET_CUSTOMERS_FIELDS')
export const dispatchsetCustomersFields = (data) =>
  dispatch(setCustomersFields(data))

const setCustomersList = createAction('SET_CUSTOMERS_LIST')
export const dispatchSetCustomersList = (data) =>
  dispatch(setCustomersList(data))

const setEditingCustomerId = createAction('SET_EDITING_CUSTOMER_ID')
export const dispatchsetEditingCustomerId = (id) =>
  dispatch(setEditingCustomerId(id))

export default null
