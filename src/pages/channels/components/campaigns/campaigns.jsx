// modules
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
// helpers
import tableHeaders from 'helpers/table_headers'
import tableFormatters from 'helpers/tablesDataFormatter'
// queries
import { CamapaignQueries } from 'queries'
// components
import { DataTable, TableTabs } from 'base/ui'
// style
import styles from './campaigns.module.scss'

const allCampaigns = [
  ...[...Array(8)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
  ...[...Array(8)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Paused',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
  ...[...Array(8)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Done',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
]

const doneCampaigns = [
  ...[...Array(20)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Done',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
  ...[...Array(20)].map(() => [
    {
      name: 'Father day',
    },
    {
      name: '2012/12/13',
    },
    {
      name: '2013/12/13',
    },
    {
      name: 'SMS',
    },
    {
      name: '17384',
    },
    {
      name: '484849',
    },
    {
      name: '12344',
    },
    {
      name: '16%',
    },
    {
      name: 'status',
      status: 'Done',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
]

const runningCampaigns = [
  ...[...Array(20)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
  ...[...Array(20)].map(() => [
    {
      name: 'Father day',
    },
    {
      name: '2012/12/13',
    },
    {
      name: '2013/12/13',
    },
    {
      name: 'SMS',
    },
    {
      name: '17384',
    },
    {
      name: '484849',
    },
    {
      name: '12344',
    },
    {
      name: '16%',
    },
    {
      name: 'status',
      status: 'Running',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
]

const pausedCampagins = [
  ...[...Array(20)].map(() => [
    {
      name: 'Christmas',
    },
    {
      name: '1989/12/13',
    },
    {
      name: '1989/12/13',
    },
    {
      name: 'Email',
    },
    {
      name: '129000',
    },
    {
      name: '120000',
    },
    {
      name: '23000',
    },
    {
      name: '12%',
    },
    {
      name: 'status',
      status: 'Paused',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
  ...[...Array(20)].map(() => [
    {
      name: 'Father day',
    },
    {
      name: '2012/12/13',
    },
    {
      name: '2013/12/13',
    },
    {
      name: 'SMS',
    },
    {
      name: '17384',
    },
    {
      name: '484849',
    },
    {
      name: '12344',
    },
    {
      name: '16%',
    },
    {
      name: 'status',
      status: 'Paused',
      key: 'status',
      customAccessor: true,
    },
    {
      name: 'action',
      campaign_id: 1,
      key: 'running_action',
      customAccessor: true,
    },
  ]),
]

const tabItemsMap = {
  0: allCampaigns,
  1: doneCampaigns,
  2: runningCampaigns,
  3: pausedCampagins,
}

const Campgigns = ({ campaigns }) => {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    CamapaignQueries.getCampaignsByChannelReq({})
  }, [])

  return (
    <section className={styles.campaigns}>
      <div className={styles.details}>
        <span>123 total campaigns</span>
        <span>last update 23 nov 2020</span>
      </div>

      <div className={styles.tableWrapper}>
        <TableTabs
          items={[
            {
              title: 'All campaigns',
              onClick: () => CamapaignQueries.getCampaignsByChannelReq({}),
            },
            {
              title: 'Done campaigns',
              onClick: () =>
                CamapaignQueries.getCampaignsByChannelReq({
                  status: 'stopped',
                }),
            },
            {
              title: 'Running campaigns',
              onClick: () =>
                CamapaignQueries.getCampaignsByChannelReq({
                  status: 'running',
                }),
            },
            {
              title: 'Paused campaigns',
              onClick: () =>
                CamapaignQueries.getCampaignsByChannelReq({
                  status: 'paused',
                }),
            },
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <DataTable
          className={styles.table}
          headers={tableHeaders.totalCampaigns}
          rows={tableFormatters.campaigns.total(campaigns.items)}
          action={false}
        />
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({ campaigns: state.main.campaigns })
export default connect(mapStateToProps, null)(Campgigns)
