import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import { dispatchsetDashboardCardData } from 'redux/action-creators/channels'
// helpers
import reqWrapper from 'helpers/request'
import periodToDatesConverter from 'helpers/periodToDatesConverter'
// configs
import configs from '../../configs/global'

export const getSummaryReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/channels/dashboard/summary`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({
        data,
        cardType: 'summary',
      })
    )
)

export const getOverviewReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/channels/dashboard/overview`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({
        data,
        cardType: 'overview',
      })
    )
)

export const getReachabilityReq = reqWrapper((period, token) => {
  const { from, to } = periodToDatesConverter(period || 'this_month')
  console.log({ from, to })
  return axios
    .get(`${configs.API}/v1/channels/dashboard/reachability`, {
      params: {
        from,
        to,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({
        data,
        cardType: 'reachability',
      })
    )
})

export const getConvertionRate = reqWrapper((period, token) => {
  const { from, to } = periodToDatesConverter(period || 'this_month')
  return axios
    .get(`${configs.API}/v1/channels/dashboard/conversionRate`, {
      params: {
        from,
        to,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({ data, cardType: 'convertionRate' })
    )
})

export default {
  getSummaryReq,
  getOverviewReq,
  getReachabilityReq,
  getConvertionRate,
}
