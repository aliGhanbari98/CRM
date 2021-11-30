import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import { dispatchSetInsightCardData } from 'redux/action-creators/campaigns'
// helpers
import reqWrapper from 'helpers/request'
// configs
import configs from 'configs/global'

const getSummeryReq = reqWrapper((campaignId, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}/dashboard/summary`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'summery' })
    )
)

const getGenderReq = reqWrapper((campaignId, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}/dashboard/gender`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'gender' })
    )
)

const getAgeAndGenderReq = reqWrapper((campaignId, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}/dashboard/ageGender`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'ageAndGender' })
    )
)

const getTrendsReq = reqWrapper(({ campaignId, statusFilter }, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}/dashboard/summary`, {
      params: {
        status_filter: statusFilter || 'delievered',
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'trends' })
    )
)

const getCampaignsOSReq = reqWrapper((campaignId, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}/dashboard/os`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => dispatchSetInsightCardData({ data, cardType: 'os' }))
)

const getFunnelReq = reqWrapper(({ campaignId, channelType }, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}/dashboard/funnel`, {
      params: {
        channel_type: channelType,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchSetInsightCardData({ data, cardType: 'funnel' })
    )
)

export default {
  getSummeryReq,
  getGenderReq,
  getAgeAndGenderReq,
  getCampaignsOSReq,
  getTrendsReq,
  getFunnelReq,
}
