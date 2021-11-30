import { CamapaignQueries } from 'queries'
import { navigate } from '@reach/router'

const onActionClicks = {
  start: (id) => CamapaignQueries.startCampaignReq(id),
  stop: (id) => CamapaignQueries.stopCampaignReq(id),
  pause: (id) => CamapaignQueries.pauseCampaignReq(id),
  edit: (id) => {},
  insight: (id) => {
    navigate(`insight/${id}`)
  },
}

const channelsTypeMap = {
  email: 'Email',
  sms: 'SMS',
}

const statusMap = {
  started: 'Running',
  running: 'Running',
  paused: 'Paused',
  stopped: 'Stopped',
  draft: 'Draft',
}

const campaigns = {
  upcoming: (data) =>
    data.map(({ id, name, start_date }) => [
      { name },
      { name: start_date },
      {
        name: 'action',
        key: 'upcoming_action',
        id,
        customAccessor: true,
        onEditClick: () => onActionClicks.edit(id),
        onStartClick: () => onActionClicks.start(id),
        onStopClick: () => onActionClicks.stop(id),
      },
    ]),
  total: (data) =>
    data.map(
      ({
        id,
        name,
        start_date,
        end_date,
        status,
        channel_type,
        total_sent,
        seen,
        clicked,
        conversation_rate,
      }) => [
        { id },
        {
          name,
        },
        {
          name: start_date,
        },
        {
          name: end_date,
        },
        {
          name: channelsTypeMap[channel_type],
        },
        {
          name: total_sent,
        },
        {
          name: seen,
        },
        {
          name: clicked,
        },
        {
          name: conversation_rate || (clicked / total_sent) * 100,
        },
        {
          name: 'status',
          status: statusMap[status],
          key: 'status',
          customAccessor: true,
        },
        {
          name: 'action',
          campaign_id: id,
          key: 'running_action',
          customAccessor: true,
          onInsightClick: () => onActionClicks.insight(id),
          onStopClick: () => onActionClicks.stop(id),
          onPauseClick: () => onActionClicks.pause(id),
        },
      ]
    ),
}

export default { campaigns }
