import axios from 'axios'
import { navigate } from '@reach/router'
// actions
import { dispatchsetDashboardCardData } from 'redux/action-creators/campaigns'
// helpers
import reqWrapper from 'helpers/request'
import periodToDatesConverter from 'helpers/periodToDatesConverter'
// configs
import configs from 'configs/global'

const getSummeryReq = reqWrapper(({ period }, token) => {
  const { from, to } = periodToDatesConverter(period)
  return axios
    .get(`${configs.API}/v1/campaigns/dashboard/summary`, {
      params: {
        from,
        to,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({ data, cardType: 'summery' })
    )
})

const getTopCampaignsReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/campaigns/dashboard/top`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({ data, cardType: 'topCampaigns' })
    )
)

const getUpcomingsCampaignsReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/campaigns/dashboard/upcomings`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({
        data,
        cardType: 'upcomingCampaigns',
      })
    )
)

const getRunningCampaaignsReq = reqWrapper((token) =>
  axios
    .get(`${configs.API}/v1/campaigns/dashboard/running`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) =>
      dispatchsetDashboardCardData({
        data: [
          {
            id: '666f6f2d6261722d71757578',
            name: 'string',
            start_date: '2020-12-29T13:05:56.664Z',
            end_date: '2020-12-29T13:05:56.664Z',
            status: 'started',
            channel_type: ['email'],
            total_sent: 0,
            seen: 0,
            clicked: 0,
            conversation_rate: 0,
          },
        ],
        cardType: 'runningCampaigns',
      })
    )
)

export default {
  getSummeryReq,
  getTopCampaignsReq,
  getUpcomingsCampaignsReq,
  getRunningCampaaignsReq,
}
