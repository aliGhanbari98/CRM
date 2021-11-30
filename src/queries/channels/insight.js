import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import { dispatchSetInsightCardData } from 'redux/action-creators/channels'
// helpers
import reqWrapper from 'helpers/request'
import periodToDatesConverter from 'helpers/periodToDatesConverter'
// configs
import configs from '../../configs/global'

export const getOverviewReq = reqWrapper(({ channelType }, token) =>
  axios
    .get(`${configs.API}/v1/channels/insights/overview`, {
      params: {
        channel_type: channelType,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'overview' })
    )
)

export const getTopCampaignsCRReq = reqWrapper(({ channelType }, token) =>
  axios
    .get(`${configs.API}/v1/channels/insights/top`, {
      params: {
        channel_type: channelType,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({
        data,
        cardType: 'topCampaignsCR',
      })
    )
)

export const getAgeAndGendersReq = reqWrapper(({ channelType }, token) =>
  axios
    .get(`${configs.API}/v1/channels/insights/ageGender`, {
      params: {
        channel_type: channelType,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({
        data,
        cardType: 'ageAndGender',
      })
    )
)

export const getTrendsReq = reqWrapper(({ channelType, statusFilter }, token) =>
  axios
    .get(`${configs.API}/v1/channels/insights/trends`, {
      params: {
        channel_type: channelType,
        status_filter: statusFilter || 'delivered',
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'trends' })
    )
)

export const getFunnelReq = reqWrapper(({ channelType, period }, token) => {
  const { from, to } = periodToDatesConverter(period || 'this_month')
  return axios
    .get(`${configs.API}/v1/channels/insights/funnel`, {
      params: {
        from,
        to,
        channel_type: channelType,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'funnel' })
    )
})

export default {
  getOverviewReq,
  getAgeAndGendersReq,
  getTopCampaignsCRReq,
  getTrendsReq,
  getFunnelReq,
}
