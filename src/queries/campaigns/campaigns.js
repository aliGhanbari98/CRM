import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import { dispatchSetCampaignsData } from 'redux/action-creators/campaigns'
// helpers
import reqWrapper from 'helpers/request'
// configs
import configs from 'configs/global'

const getCampaignsByChannelReq = reqWrapper(
  ({ status, channelType, offset, limit }, token) =>
    axios
      .get(`${configs.API}/v1/campaigns`, {
        params: {
          status,
          channel_type: channelType,
          offset: offset || 0,
          limit: limit || 10,
        },
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) =>
        dispatchSetCampaignsData({ data: data.result, key: 'items' })
      )
)

// TODO
const createCampaignReq = reqWrapper((data, token) =>
  axios
    .post(
      `${configs.API}/v1/campaigns`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(() => {})
)

const getSingleCampaignReq = reqWrapper((campaignId, token) =>
  axios
    .get(`${configs.API}/v1/campaigns/${campaignId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => dispatchSetCampaignsData({ data, key: 'single' }))
)

const compareCampaignsReq = reqWrapper((campainIds, token) =>
  axios
    .post(
      `${configs.API}/v1/campaigns/compare`,
      {
        campaign_ids: campainIds,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) =>
      dispatchSetCampaignsData({ data: data.campaigns, key: 'compared' })
    )
)

const startCampaignReq = reqWrapper((campaignId, token) =>
  axios
    .patch(
      `${configs.API}/v1/campaigns/${campaignId}/status/start`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {})
)

const stopCampaignReq = reqWrapper((campaignId, token) =>
  axios
    .patch(
      `${configs.API}/v1/campaigns/${campaignId}/status/stop`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {})
)

const pauseCampaignReq = reqWrapper((campaignId, token) =>
  axios
    .patch(
      `${configs.API}/v1/campaigns/${campaignId}/status/pause`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(({ data }) => {})
)

export default {
  getCampaignsByChannelReq,
  createCampaignReq,
  getSingleCampaignReq,
  compareCampaignsReq,
  startCampaignReq,
  stopCampaignReq,
  pauseCampaignReq,
}
