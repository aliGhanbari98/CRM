import { createAction } from 'redux-actions'
import { dispatch } from '../store/index'

const setCampaignsData = createAction('SET_CAMPAIGNS_DATA')
export const dispatchSetCampaignsData = (args) =>
  dispatch(setCampaignsData(args))

const setInsightCardData = createAction('SET_CAMPAIGNS_INSIGHT_CARD_DATA')
export const dispatchSetInsightCardData = (args) =>
  dispatch(setInsightCardData(args))

const setDashboardCardData = createAction('SET_CAMPAIGNS_DASHBOARD_CARD_DATA')
export const dispatchsetDashboardCardData = (args) =>
  dispatch(setDashboardCardData(args))

export default null
