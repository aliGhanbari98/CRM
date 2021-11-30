import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setTemplatesItems = createAction('SET_TEMPLATE_ITEMS')
export const dispatchSetTemplatesItems = (items) =>
  dispatch(setTemplatesItems(items))

const setInsightCardData = createAction('SET_CHANNELS_INSIGHT_CARD_DATA')
export const dispatchSetInsightCardData = ({ data, cardType }) =>
  dispatch(setInsightCardData({ data, cardType }))

const setDashboardCardData = createAction('SET_CHANNELS_DASHBOARD_CARD_DATA')
export const dispatchsetDashboardCardData = ({ data, cardType }) =>
  dispatch(setDashboardCardData({ data, cardType }))

export default null
